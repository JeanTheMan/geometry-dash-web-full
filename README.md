# Geometry Dash Web Runtime (Educational Project)

This folder contains a browser-playable reconstruction of the Geometry Dash https://www.geometrydash.com runtime using Phaser.

The project loads level data from text files, draws gameplay from sprite atlases, supports official-style level selection, and plays per-level music.

## Important Disclaimer

This project is provided **only for educational purposes**.

- Do not use this project to pirate, redistribute, or bypass purchase requirements for any commercial game.
- Do not upload copyrighted game assets unless you have permission from the rights holder.
- Respect all original creators, licenses, and terms of service.

## What This Build Includes

- Phaser-based game loop and scene system
- Cube and ship gameplay modes
- Portals (mode, speed, gravity)
- Pads and rings
- Trigger-driven behavior (including color and movement-related behavior)
- Per-level song loading
- Per-level background loading
- Level title updates in the browser tab
- In-page level selector UI
- Pause menu and fullscreen support
- Attempt counter and progress display

## Folder Layout

- index.html: App entry page, level selector UI, boot watchdog
- game.js: Main game runtime and gameplay logic
- vendor.js: Phaser/vendor bundle used by the runtime
- assets/: Game assets used by this build
- assets/levels/: Level files and overrides

Notable files in assets:

- assets/levels/1.txt to assets/levels/22.txt: Main level data
- assets/levels/5001.txt to assets/levels/5004.txt: Additional level data
- assets/levels/object_overrides.json: Runtime behavior overrides for object IDs
- assets/GJ_WebSheet*.png/.json, assets/GJ_GameSheet*.png/.json: Atlas textures and frame maps
- assets/*.mp3, assets/*.ogg: Music and sound effects

## Requirements

- A modern desktop or mobile browser
- A local static web server (recommended)

Why a local server:

- Some browsers restrict file access and media loading from file:// URLs.
- Running from localhost avoids common CORS and audio-loading issues.

## Quick Start

From inside this gd folder:

### Option A: Python

```bash
python -m http.server 8080
```

Open:

- http://localhost:8080

### Option B: Node (serve)

```bash
npx serve .
```

Open the URL shown in your terminal.

## How To Select Levels

### In UI

Use the level picker at the top-right:

1. Choose a level from the dropdown
2. Click Load

### By Query Parameter

You can open directly with:

- ?level=1
- ?level=14
- ?level=22

Example:

- http://localhost:8080/?level=14

The runtime maps this to:

- assets/levels/<level>.txt

If the parameter is invalid, it falls back to level 1.

## Controls

Typical controls available in this build:

- Space / mouse / touch: Jump or hold for ship flight
- Escape: Pause/resume
- Fullscreen toggle: Available in menu and pause overlay

## Runtime Notes

- Game width is dynamically managed to preserve intended visual behavior.
- A resize observer dispatches resize events to keep layout and camera behavior aligned.
- A boot watchdog in index.html reports startup issues if canvas creation fails.
- Level metadata drives song, title, and background selection.

## Known Caveats

- This is a reconstruction project, not an exact original engine clone.
- Behavior parity can vary for rare objects/triggers not fully modeled yet.
- Browser audio policies may require a user interaction before playback starts.

## Development Notes

If you modify gameplay behavior:

1. Keep object ID overrides in assets/levels/object_overrides.json organized
2. Validate level loads for multiple levels (1, 10, 14, 22 are good smoke tests)
3. Re-test pause/fullscreen/resume after camera or timing changes
4. Re-test mobile touch input if UI or input logic changes

## Publishing Guidance

If you publish this repository:

- Include this disclaimer unchanged
- Remove any assets you do not have rights to distribute
- Add explicit attribution and license notes for all third-party content
- Do not market this as an official product

## Non-Affiliation

This repository is an independent educational project and is not an official release or endorsement by any original game developer or publisher.
