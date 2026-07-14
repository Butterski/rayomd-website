# Batch benchmark

Deterministic native conversion sample.

| Workload | Input | Median | Result |
|:--|--:|--:|:--|
| Tiny README | 205 B | 15.45 ms | Pass |
| Feature mix | 15.1 KB | 17.29 ms | Pass |
| 500-row table | 33.4 KB | 18.66 ms | Pass |
| Unicode report | 28.7 KB | 21.12 ms | Pass |
| Batch corpus | 100 files | 1.44 ms/file | Pass |

## Method

Fresh-process timings include startup, parsing, PDF generation, and output-file writing. Results are scoped to the supported native subset and are not a claim of visual equivalence with browser or TeX renderers.

---

Always reproduce performance claims on the target system and workload.
