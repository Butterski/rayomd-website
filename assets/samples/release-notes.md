# RayoMD 5.2.5

Exports run about a fifth faster than 5.2.2 (essay-style text 36 %), folders of small notes convert a quarter faster than 5.2.4, and an editor can rebuild its preview from the blocks an edit changed.

## Highlights

- One long page for screens: `--page-size=210mmxauto`
- Print output: `--black-text` and `--hide-tags`
- Incremental previews through `TinyPdf::BuildSession`
- Every PDF of a document without the new options keeps its bytes

## Upgrade

Replace the binary, then check the installation:

```sh
rayomd --version
rayomd --doctor
rayomd --export notes.md notes.pdf --page-numbers
```

The complete list of supported Markdown is in the [documentation](https://github.com/Butterski/rayomd/wiki/Native-Markdown-Support).
