# Changelog

All major changes to the LazyDog frontend project are documented here.  
We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) principles.

---

## Release Tag Checklist (e.g. v0.2.0)
- [ ] All new features are merged into `main`
- [ ] Functionality is manually (or automatically) tested
- [ ] All relevant design systems and docs are updated
- [ ] `CHANGELOG.md` is updated and accurate
- [ ] No debug code, `console.log`, or unused styles remain
- [ ] Version number in README (if applicable) matches the tag
- [ ] Git tag is created: `git tag -a v0.2.0 -m "Release v0.2.0"`
- [ ] Tag is pushed: `git push origin v0.2.0`
- [ ] GitHub Release is created (optional but recommended)

---

## [Unreleased]

_This section lists unreleased changes._

<!-- 
Use this format when preparing the next version entry:

## [n.n.n] - YYYY-MM-DD

### Added
- Short clear statement about the new thing.

### Changed
- Short clear statement about what changed.

### Fixed
- Short clear statement about the bug fix.

### Removed
- Short clear statement about what's gone.
-->

_(Includes all changes up to and including 2025-05-05 — not yet released to production)_

---

## [0.2.0] - 2025-05-05

### Added
- feat: Add glowpointer button component with styles and JS interaction (6e18030)
- feat: Add gradient flow button styling with hover effects (9c28bbb)
- feat: Add shared styles for glow layout (005d2ec)
- feat: Add glow buttons HTML markup (780b5ce)
- feat: Add button link in column layout to access glow buttons (1740f82)
- feat: Add spinning loader to examples (2634c12)
- feat: Add grid layout and UI buttons to palette-test page (d7a3371)
- feat: Add color palette preview mini-app with toggle (1d94450)
- feat: Add components guide for Error, About, Auth, Dashboard, Contribution, Resource, and Home pages (multiple commits)
- feat: Add dev principles and directory structure docs (a3c6926)
- feat: Add wireframe imagery and structure to documentation (4c61f5b, e96fbd8)
- feat: Add deployment and usage guides for LazyDog platform (d428bdd, 63aa14b)
- feat: Add business strategy and design docs including the five planes (174f986, 692fc84)
- feat: Add favicon and logo image assets (3b3c678)

### Changed
- refactor: Move glowbuttons to `components/` folder and fix pathing (e1e9f62)
- refactor: Move wireframes and images to central documentation directory (0594a70)
- style: Improve CSS readability and formatting in palette-test (a2fbf49)
- chore: Housekeeping updates to palette, docs and UI experiments (850c444, a7878a0)

### Fixed
- fix: Correct stylesheet path for shared glow styles (1224d04)
- fix: Adjust text color on hover for fancy button (775d14c)
- fix: MD linter hierarchical errors in docs (175e541, d76ebef)
- fix: Fix broken formatting in ERD markdown (3d94875, b715caa)
- fix: Delete outdated `five-planes.md` from index (b72ac82)
- fix: Correct file extensions and typos in markdown files (a13e08f, 4f430bc, a7ed22b)

### Removed
- docs: Remove outdated `docs/ella/` folder and consolidate images (299cdec)

---

## [0.1.0] - 2025-03-01

### Added
- Initial commit (2752655)
