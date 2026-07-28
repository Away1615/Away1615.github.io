---
projectId: rasterizer
language: zh
---

## 关键工作

- 加入顶点缓存、预归一化光照、Early-Z、背面剔除与视锥剔除。
- 使用 AVX SIMD 对八像素着色与光照进行向量化。
- 通过自研线程池实现分块渲染，并对比 FPS、P99 延迟与加速比。
