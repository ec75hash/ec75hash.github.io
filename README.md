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
- [Earlier survey archive, v0.1.2](https://zenodo.org/records/23546828)
- [Neuron-response study](https://huggingface.co/datasets/ec75hash/copy-blocks-qwen/blob/v0.3.0/studies/qwen3_response/README.md)
- [Composition-sensitive register readouts](https://zenodo.org/records/21213596)
- [In-context availability, v1.2](https://zenodo.org/records/23546831)
- [In-context availability code and methods](https://github.com/ec75hash/in-context-availability-moe-routing)
- [Cross-checkpoint Jacobian lens transfer](https://zenodo.org/records/22133736)
- [Lens-transfer code and evaluations](https://github.com/ec75hash/jacobian-lens-transfer-qwen36-38)
- [Expert specialization during generation, v1.2](https://zenodo.org/records/22236999)
- [Specialization code and evidence](https://github.com/ec75hash/paper-expert-specialization-generation)
- [Dialect-Marked Response Audit, v4.3](https://zenodo.org/records/22291463)
- [DMRA methods and artifacts](https://github.com/ec75hash/dmra-paper)
- [Distributed safety routing, v1.2](https://zenodo.org/records/22088890)
- [Refusal-routing code and evidence](https://github.com/ec75hash/distributed-safety-routing)
- [Full publication index](https://github.com/ec75hash/ec75hash/blob/main/PUBLICATIONS.md)

The neuron-response figure is a verbatim copy of the research's retained
`neuron_pairing.svg`. The 34-checkpoint survey and the
288-pair Qwen3 response sample are separate studies.

Selected Work includes all six studies cited in the primary profile README,
alongside the motivating E114 paper and the separate weight/response studies.
The Zenodo survey archive is an earlier snapshot; the current weight/response
release is pinned independently at v0.3.0. E114 links to its public paper because
its primary-account code repository is private.

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
