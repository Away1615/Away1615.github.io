---
projectId: rasterizer
language: en
---

## Key work

- Added vertex cache, pre-normalized lighting, Early-Z, backface and frustum culling.
- Vectorized eight-pixel shading and lighting with AVX SIMD.
- Implemented tile-based rendering through a custom thread pool and compared FPS, P99 latency, and speedup.
