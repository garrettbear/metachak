# Prepare metachak for npm package distribution

## Description
This pull request updates the `metachak` repository to prepare it for npm package distribution. The following changes have been made:

- Updated the `package.json` file:
  - Removed the "private" field to allow for npm publication.
  - Added a "main" entry point to specify the main file for the package.
  - Specified the files to include in the package using the "files" field.
  - Moved React and ReactDOM to peerDependencies.

- Ensured that the `CustomButton` component is properly exported for use in other projects.

## Changes
- `package.json`: Updated metadata and configuration for npm package distribution.
- `src/components/index.ts`: Ensured `CustomButton` is exported.

## Testing
- Verified that the `CustomButton` component is correctly exported and can be imported in other projects.

## Notes
- Additional updates to the build script and documentation may be required for final npm publication.

[This Devin run](https://preview.devin.ai/devin/864877ac70e24b72b4b43ea17d114139) was requested by Garrett.
