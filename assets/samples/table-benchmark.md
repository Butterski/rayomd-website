# Markdown to PDF, against other tools

Each tool converts the same document, `tester.md` without images, as a fresh process: median of 20 on four pinned cores, measured on 2026-10-20.

| Tool | Version | Time | Against RayoMD | Peak memory |
|:--|:--|--:|--:|--:|
| **RayoMD** | 5.2.5 | **1.34 ms** | 1x | **3.4 MiB** |
| glu | 0.0.46 | 55 ms | 41x | 33 MiB |
| Qt 6 `QTextDocument` | 6.12.0 | 71 ms | 53x | 39 MiB |
| Pandoc + Typst | 3.11, Typst 0.15.1 | 357 ms | 266x | 239 MiB |
| Pandoc + WeasyPrint | 3.11, 70.0 | 987 ms | 737x | 241 MiB |
| md-to-pdf | 5.2.5, Chromium 154 | 1,821 ms | 1,359x | 205 MiB |
| Pandoc + XeLaTeX | 3.11, TeX Live 2026 | 2,147 ms | 1,602x | 340 MiB |

## Method

AMD Ryzen 5 PRO 4650GE, Arch Linux container without network. Times run from start to exit. In a running process (`--serve`, `--batch`) each further export takes 0.16 ms.

---

The tools render different Markdown subsets and look different: this compares time to a finished PDF, not identical output.
