---
projectId: survivors-like
language: en
---

## System architecture

I designed the runtime around explicit ownership and a clear orchestration path, separating process-level composition, application states, per-run coordination, and domain logic.

- Main is the composition root: it initializes the content path and resources once, constructs each concrete gameplay service, and injects them into GEGameSession and GameManager.
- GameManager owns the application state machine and save-list flow. GEGameSession owns one run and defines the frame order: player, camera and map, enemies, projectiles, power-ups, then map-to-HUD rendering.
- MapProvider, PlayerProvider, EnemyProvider, ProjectileProvider, and PowerUpProvider expose narrow capabilities; serializable providers also implement GECodable&lt;State&gt;, so orchestration depends on contracts rather than concrete managers.
- Concrete managers retain domain ownership for spawning, collisions, drops, and cleanup. GEObjectPool owns reusable slots, while GEEnemyManager keeps a compact active set for the hot update and draw paths.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/runtime-architecture.svg" width="1600" height="900" alt="Runtime architecture from Main and GameManager through GEGameSession, provider-based gameplay subsystems, foundation services, and versioned persistence." loading="lazy" decoding="async" />
  <figcaption>Runtime ownership and state flow: composition and application states remain above a provider-driven session, while shared foundation services and persistence stay explicit.</figcaption>
</figure>
</div>

## World, camera, and collision

The same data-driven tile source supports a bounded authored level and an unbounded procedural traversal mode.

- The level loader parses a 70 × 70 map of 32-pixel tiles from a human-readable text format, including tile dimensions and layer data.
- Fixed mode clamps player and camera movement to the authored 2,240 × 2,240 world; infinite mode samples tiles from world coordinates through modulo repetition or seed-based hashing.
- A shared collision query handles circle-circle interactions for characters and projectiles and circle-AABB tests for solid or hazardous terrain.
- The virtual camera follows the player, respects fixed-map bounds, and participates in snapshots so visual position matches restored world state.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/gameplay-fixed.png" width="1281" height="720" alt="Fixed-map gameplay showing the authored water, path, and hazard layout with the player and an automatic projectile." loading="lazy" decoding="async" />
  <figcaption>Fixed mode keeps the camera inside the authored 70 × 70 tile world while terrain collision and hazards remain data-driven.</figcaption>
</figure>
</div>

## Combat and entity lifecycle

The combat loop combines escalating pressure with bounded, allocation-conscious runtime work.

- Built a complete 120-second survival loop with four enemy archetypes, time-based spawn escalation, contact and projectile damage, drops, victory, and defeat.
- Automatic fire finds the nearest live target, while the player-triggered AOE selects the highest-HP enemies within range through a fixed-capacity candidate set.
- Preallocated pools support up to 2,000 enemy, 1,000 projectile, and 100 power-up slots; inactive objects are reused instead of recreated during combat.
- Projectiles outside the camera plus a safety margin are deactivated for reuse, preventing off-screen entities from permanently consuming pool capacity.

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/vampire-survivors-like/collision-debug-current.png" width="1281" height="720" alt="Live collision debug view with circles around the player and enemy while an automatic projectile travels between them." loading="lazy" decoding="async" />
  <figcaption>The J-key debug view exposes circle colliders during live combat without changing the collision query used by gameplay.</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/vampire-survivors-like/aoe-impact.png" width="1281" height="720" alt="Green AOE impact rings on two enemies with collider debug circles still visible." loading="lazy" decoding="async" />
  <figcaption>A player-triggered AOE selects the highest-HP in-range targets through a fixed-capacity candidate set and records short-lived impact markers.</figcaption>
</figure>
</div>

## State persistence

Saving is treated as restoration of gameplay causality, not just player position and health.

- The versioned binary snapshot records map mode and seed, active chunk and camera, session time, player combat and buff timers, spawn progression, active entities, and subsystem random states.
- Enemy activity order, contact-damage cooldowns, fire state, and random-generator state are restored so loading does not silently change subsequent combat behavior.
- The serializer validates a magic header, exact format version, bounded strings, and entity counts before accepting a save.
- Save slots are written to a temporary file and replaced with a write-through atomic move, reducing the chance of leaving a partially written save.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/save-system.png" width="1281" height="720" alt="Save Game screen showing the create-new entry, a real timestamped save slot, and keyboard controls." loading="lazy" decoding="async" />
  <figcaption>The slot UI supports create, select, replace, delete, and load flows; each entry is backed by a validated full-runtime snapshot.</figcaption>
</figure>
</div>

## Evaluation and iteration

The original coursework report documented both the result and the limits of the first implementation; the current develop branch reflects a later engineering pass.

- The report observed roughly 700 FPS on AC power and 400 FPS on battery on the development machine. These are local observations rather than a controlled cross-hardware benchmark.
- Frame-rate degradation became visible with several hundred active enemies, identifying broad-phase spatial partitioning as a more valuable next optimization than further micro-tuning.
- The report also exposed incomplete cooldown restoration and tightly coupled responsibilities. Later revisions expanded the save schema, preserved random and activity state, and narrowed subsystem interfaces.
- The main project lesson was to balance architectural ambition with delivery: establish clear ownership and testable boundaries, but prioritize a complete playable result before deeper abstraction.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/vampire-survivors-like/hud-evaluation.png" width="1067" height="600" alt="Coursework report screenshot annotating score, timer, FPS, cooldown, buffs, and save controls." loading="lazy" decoding="async" />
  <figcaption>Report evaluation view showing the live score, survival timer, FPS, ability cooldown, power-up, collision toggle, and save control.</figcaption>
</figure>
</div>
