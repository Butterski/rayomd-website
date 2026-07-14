# RayoMD 2.3.0

This release strengthens exact source recovery and keeps ordinary exports on the unchanged lightweight PDF path.

## Highlights

- Bounded reversible PDF metadata
- SHA-256 source integrity checks
- Clear privacy disclosure before source embedding
- Windows and Linux release verification
- No browser or bundled runtime on the native path

## Upgrade

Download the current package, replace the existing binary, then run:

```text
rayomd --doctor
rayomd --export notes.md notes.pdf
```

See the project documentation for the complete compatibility matrix.
