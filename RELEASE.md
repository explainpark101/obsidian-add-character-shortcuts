# Release Guide

[한국어](RELEASE.kr.md) | English

This document explains how to create releases using GitHub Actions.

## Automatic Release Process

The GitHub Actions workflow automatically creates releases when you push tags or manually trigger a release.

### Method 1: Using Git Tags (Recommended)

1. **Update version in manifest.json**:
   ```bash
   # Edit manifest.json and update the version field
   # Example: "version": "2.1.0"
   ```

2. **Create and push a tag**:
   ```bash
   git add .
   git commit -m "Release v2.1.0"
   git tag v2.1.0
   git push origin v2.1.0
   ```

3. **GitHub Actions will automatically**:
   - Build the plugin
   - Create a GitHub release
   - Upload `main.js`, `manifest.json`, and `styles.css`

### Method 2: Manual Release

1. Go to **Actions** tab in GitHub
2. Select **Release Plugin** workflow
3. Click **Run workflow**
4. Enter version (e.g., `v2.1.0`)
5. Click **Run workflow**

### Method 3: Using npm scripts

```bash
# Patch version (1.0.0 -> 1.0.1)
npm run release:patch

# Minor version (1.0.0 -> 1.1.0)
npm run release:minor

# Major version (1.0.0 -> 2.0.0)
npm run release:major
```

## Release Files

Each release will include:
- `shortcut-for-special-characters-{version}.zip` - Complete plugin package (recommended)
- `main.js` - Main plugin file (individual download)
- `manifest.json` - Plugin manifest (individual download)
- `styles.css` - Plugin styles (individual download)

## Installation Instructions

### Recommended: Zip Installation
1. Download `shortcut-for-special-characters-{version}.zip`
2. Extract the zip file
3. Copy the extracted files to `.obsidian/plugins/shortcut-for-special-characters/`
4. Reload Obsidian and enable the plugin

### Manual Installation
1. Download the individual files (`main.js`, `manifest.json`, `styles.css`)
2. Copy them to `.obsidian/plugins/shortcut-for-special-characters/`
3. Reload Obsidian and enable the plugin

## Troubleshooting

### Build fails
- Check that all TypeScript files compile without errors
- Ensure all dependencies are properly installed

### Release not created
- Verify the tag format is correct (`v*` pattern)
- Check GitHub Actions logs for errors
- Ensure you have write permissions to the repository

### Files not uploaded
- Verify the `dist/shortcut-for-special-characters/` folder exists
- Check that all required files are present
- Review the workflow logs for upload errors
