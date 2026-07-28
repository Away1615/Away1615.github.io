---
projectId: vehicle
language: en
---

## System architecture

I divided the work into state orchestration, reusable simulation components, effect authoring, and gameplay integration so each layer could evolve without owning the others' details.

- Weather requests flow through BP_WeatherManager into data-driven presets, which blend global sky, exposure, cloud, post-process, and vehicle-fog parameters over a configurable duration.
- A C++ base particle component owns emission, lifetime simulation, and instanced rendering; Data Assets configure it, while specialized components supply fog, smoke, and spark behavior.
- Blueprint-facing APIs connect those systems to weather events, wheel state, vehicle speed, and collision impulses without moving simulation logic back into gameplay Blueprints.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/weather-transition.webp" width="1800" height="1625" alt="Blueprint graph showing weather request setup, timed interpolation, and application of blended environment parameters." loading="lazy" decoding="async" />
  <figcaption>BP_WeatherManager transition pipeline: capture current and target presets, advance a normalized alpha, then apply the blended environment state.</figcaption>
</figure>
</div>

## Dynamic weather

The weather layer presents one event-oriented interface to level logic while coordinating several independent rendering systems behind it.

- Defined sunny, overcast, and rainy presets with transition duration, Rayleigh scattering, exposure compensation, post-process materials, cloud-density offset, and vehicle-fog density.
- Combined Niagara rain streaks and collision-driven ground splashes with a lightning material, temporary exposure response, and a screen-space rain-drip post process.
- Kept rain simulation local to the player and blended the custom vehicle-fog density through the same weather transition, preserving atmosphere without simulating rain across the full level.

<div class="project-detail-gallery">
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/weather-states.webp" width="2200" height="454" alt="The same driving scene shown in sunny, overcast, and rainy weather." loading="lazy" decoding="async" />
  <figcaption>One scene, three coordinated presets: sunny, overcast, and rainy.</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/rain-system.webp" width="1800" height="1499" alt="Niagara rain and splash emitters alongside the splash material graph." loading="lazy" decoding="async" />
  <figcaption>Rain presentation combines falling streaks, ground splashes, and a lightweight splash material.</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/rain-post-process.webp" width="1800" height="672" alt="Post-process material graph and preview for animated rain droplets on the screen." loading="lazy" decoding="async" />
  <figcaption>A screen-space rain-drip material separates the rainy state from a simple lighting change.</figcaption>
</figure>
</div>

## Reusable C++ particle framework

The framework handles a deliberately small set of particle features in native code and exposes focused controls to Blueprint rather than recreating a general-purpose VFX editor.

- UL1_ParticleComponent supports continuous and burst emission, accumulated spawn rates, particle limits, randomized lifetimes and scales, world- or local-space simulation, and lifecycle cleanup.
- Particles share a UInstancedStaticMeshComponent renderer; per-instance custom data carries opacity while age-based fade-in and fade-out are applied during instance rebuilding.
- Vehicle fog scales spawn rate, particle cap, and material opacity with density, then fades particles by distance so dense fog does not cover the immediate driving area.
- Tire smoke inherits vehicle velocity and applies damping; collision sparks derive burst count and opacity from impact intensity, then use the hit normal, spread, gravity, and damping to shape motion.

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/vehicle-fog.webp" width="1537" height="1166" alt="Blueprint call into the C++ vehicle-fog component with a clear and dense fog comparison." loading="lazy" decoding="async" />
  <figcaption>Weather-driven fog density reaches the native component through a narrow Blueprint API.</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/collision-spark-integration.webp" width="1444" height="564" alt="Blueprint graph mapping vehicle collision data into the Burst At function of the C++ spark component." loading="lazy" decoding="async" />
  <figcaption>OnComponentHit supplies impact position and normal; normalized impulse becomes the spark intensity.</figcaption>
</figure>
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/tire-smoke-integration.webp" width="2200" height="776" alt="Vehicle Blueprint graph evaluating wheel contact, steering, slip, and speed before updating tire smoke." loading="lazy" decoding="async" />
  <figcaption>Wheel state stays in gameplay Blueprint while particle simulation remains inside the reusable C++ component.</figcaption>
</figure>
</div>

## Niagara and gameplay feedback

- Built a parameterized beam from separate core, halo, spark, and hit-point emitters, with a panning emissive material and public start/end positions.
- Attached speed-line emitters to the vehicle camera and toggled them at a speed threshold to reinforce acceleration without changing the vehicle simulation.
- Created a target-driven missile effect with a lead mesh, layered trails, and smoke, plus Ribbon-based tire marks placed at the rear-wheel contact points.

<div class="project-detail-gallery">
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/beam-niagara.webp" width="1600" height="904" alt="Niagara beam preview and its core, halo, spark, and hit-point emitter stack." loading="lazy" decoding="async" />
  <figcaption>Beam readability comes from layered emitters with distinct responsibilities.</figcaption>
</figure>
<figure class="project-detail-figure">
  <img src="/assets/projects/skyfire-uprising/speedline-niagara.webp" width="1283" height="982" alt="Niagara speed-line preview and emitter stack." loading="lazy" decoding="async" />
  <figcaption>Camera-local speed lines provide a restrained high-speed cue.</figcaption>
</figure>
<figure class="project-detail-figure is-wide">
  <img src="/assets/projects/skyfire-uprising/missile-niagara.webp" width="1600" height="687" alt="Niagara missile preview with lead, trail, secondary trail, and smoke emitters." loading="lazy" decoding="async" />
  <figcaption>Projectile duration and target position drive a layered missile presentation.</figcaption>
</figure>
</div>

## Engineering decisions

- Limited rain generation to the area around the player and used instanced meshes for the native particle effects, keeping the implementation mindful of runtime cost without claiming unmeasured gains.
- Used presets and narrow Blueprint APIs so artists and gameplay programmers could tune density and intensity without depending on the simulation internals.
- Identified distance culling or LOD for larger particle counts and reduced coupling around shared SFX logic as the next iteration rather than hiding those limits.
