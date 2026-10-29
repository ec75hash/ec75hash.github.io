# Jeffrey Shorthill

Personal research portfolio at **https://ec75hash.github.io/**.

Includes independent research, applied AI work at Progressive, and the
Gift-Connect Parenting Suite iOS app.

Built as a static site using HTML, CSS, and GSAP 3.15.0 with ScrollTrigger.
Fonts and animation libraries are served locally. The site supports reduced
motion, keyboard navigation, and an optional motion toggle.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. No build or package installation is required.
GitHub Pages publishes the root of `main`.

## Content sources

- [Versioned research dataset](https://huggingface.co/datasets/ec75hash/copy-blocks-qwen/tree/v0.3.0)
- [Code mirror](https://github.com/ec75hash/copy-blocks-qwen/tree/v0.3.0-mirror)
- [Neuron-response study](https://huggingface.co/datasets/ec75hash/copy-blocks-qwen/blob/v0.3.0/studies/qwen3_response/README.md)

The neuron-response figure is a verbatim copy of the research's retained
`neuron_pairing.svg`. The hero diagram is conceptual, and is labeled as an
illustration rather than measured data. The 34-checkpoint survey and the
288-pair Qwen3 response sample are separate studies.

The site presents current research interests as questions. It does not assert
a verified temporal training record or a common ancestry across model families.

## Dependencies

`GSAP_DEPENDENCY.json` and `FONT_DEPENDENCIES.json` record the pinned sources
and file hashes. GSAP is distributed under its [standard license](https://gsap.com/standard-license/).
Google Fonts: Instrument Serif, DM Sans, and IBM Plex Mono.
The Gift Connect panel uses its supplied logo and Public Sans, with the app
screenshot taken from its official App Store listing.
No credentials, analytics, contact-form backend, or external runtime requests
are required by the page.

## Additional project references

- [Gift Connect](https://gift-connect.org/)
- [Gift Connect technology tools](https://gift-connect.org/our-work/technology-tools/)
- [Gift-Connect Parenting Suite on the App Store](https://apps.apple.com/us/app/gift-connect-parenting-suite/id6741826572)
- [Progressive](https://www.progressive.com/)
- [Progressive's Fortune 500 listing in its newsroom](https://progressive.mediaroom.com/news-coverage/?o=20)
