# Presentation Guide (Korean deck)

21 slides, 1280×720 (16:9). Each slide is a standalone `slideNN.html`; `presentation.html` plays them and `printable.html` exports them to PDF.

## How to Use

1. **Present** — open `presentation.html` in Chrome or Edge.
   - `→` / `Space`: next slide, `←`: previous slide, `F`: fullscreen
2. **Export to PDF** — click **Export PDF** in the bottom bar (opens `printable.html`).
   - Tick the slides to include; drag or use the arrows to reorder them.
   - Click **PDF로 저장 (인쇄)**. In the print dialog set:
     - Destination: **Save as PDF**
     - Margins: **None**
     - **Background graphics: on**
   - The page size is set to 16:9 (1280×720) automatically, one slide per page.
   - Embedded videos are replaced by a thumbnail with a play badge in the PDF.

Run the deck from a web server (GitHub Pages, or `python -m http.server` in the repo root) rather than by double-clicking the file.

## Slide Order

The order is defined once in the `slides` array of `presentation.html` and again in `printable.html`. Keep the two lists identical. File numbers are historical and do not match the running order.

| # | File | Slide |
|---|------|-------|
| 1 | slide01 | Title |
| 2 | slide02 | Researcher Profile |
| 3 | slide03 | Education & Career Timeline |
| 4 | slide04 | Core Competencies & Skills |
| 5 | slide14 | Project 01 — Universal VLA Model (2026.01 – Present) |
| 6 | slide15 | Project 02 — EASIS (2026.01 – Present) |
| 7 | slide18 | Project 03 — Smart Monitoring System (2025.11 – 2026.09) |
| 8 | slide05 | Project 04 — Korean LLM (2025.06 – 2025.10) |
| 9 | slide13 | Project 05 — NVIDIA Jetson AMR (2025.06) |
| 10 | slide06 | Project 06 — SeeU Track (2024.11 – 2025.05) |
| 11 | slide07 | Project 07 — Face Recognition (2024.12 – 2025.02) |
| 12 | slide09 | Project 08 — Tanzania Smart Gate (2024.01 – 2024.12) |
| 13 | slide08 | Project 09 — SeeU ID (2024.05 – 2024.11) |
| 14 | slide10 | Project 10 — Gumi Metaverse (2024.01 – 2024.09) |
| 15 | slide11 | Project 11 — AVA, Autonomous Vehicle for All (2022.05 – 2023.08) |
| 16–18 | slide19–21 | Project 11 — Master's Thesis 1/3, 2/3, 3/3 |
| 19 | slide12 | Project 12 — Robotic Arm Object Relocator (2022.09 – 2022.12) |
| 20 | slide16 | Key Achievements Summary |
| 21 | slide17 | Thank You |

Projects are numbered latest first. The master's thesis is part of the AVA project, so the deck counts **12 projects**.

## Adding or Editing a Slide

- Keep everything inside `.slide-container` (1280×720, `overflow: hidden`). Anything taller is cut off on screen and in the PDF.
- Project slides share one header: badge (`Project NN`), category, title, subtitle with pills, and the date chip on the right. Copy it from an existing project slide.
- Link the shared files in `<head>` — they set the print page size and the video stand-ins:
  ```html
  <link href="slide-common.css" rel="stylesheet"/>
  <script defer src="slide-common.js"></script>
  ```
- Add the file to the `slides` array in **both** `presentation.html` and `printable.html`.
- When a project is added, update the project count on `slide02.html` and `slide16.html`.

## Files

- `slideNN.html` — the slides
- `slide-common.css`, `slide-common.js` — shared print rules and video thumbnails for PDF
- `assets/` — slide background images
- `presentation.html` — slideshow
- `printable.html` — PDF export page

## Troubleshooting

- **Charts not showing** — wait a moment after load, or refresh.
- **PDF has white backgrounds** — turn on "Background graphics" in the print dialog.
- **PDF has extra margins or blank pages** — set Margins to "None" and leave paper size on the default.
- **A video shows "Demo Video" without a picture in the PDF** — Google Drive did not return a thumbnail; the video file must be shared as "anyone with the link".
