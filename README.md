# Shortcut for Special Characters

[한국어](README.kr.md) | English

A customizable Obsidian plugin that allows you to insert special characters with keyboard shortcuts. Users can add their own custom characters and command names through the settings interface.

## Features

- **Customizable Shortcuts**: Add any special character you want
- **Easy Management**: Add, remove, and manage shortcuts through the settings UI
- **Default Characters**: Comes with useful characters like middle dot (·), corner brackets (｢｣)
- **Real-time Updates**: Changes take effect immediately without restarting Obsidian
- **Command Palette Integration**: All shortcuts appear in the Command Palette

## Installation

### From Community Plugins
1. Open **Settings → Community plugins**
2. Browse community plugins
3. Search for "Shortcut for special characters"
4. Install and enable the plugin

### Manual Installation
1. Download the latest release files:
   - **Recommended**: `shortcut-for-special-characters-{version}.zip` (complete package)
   - **Individual files**: `main.js`, `manifest.json`, `styles.css`
2. For zip installation: Extract and copy contents to your vault's `.obsidian/plugins/shortcut-for-special-characters/` folder
3. For individual files: Copy them to your vault's `.obsidian/plugins/shortcut-for-special-characters/` folder
4. Reload Obsidian and enable the plugin in **Settings → Community plugins**

## Usage

### Adding Custom Shortcuts
1. Go to **Settings → Shortcut for special characters**
2. In the "Add New Shortcut" section:
   - Enter the character you want to insert in "Character to insert"
   - Enter a descriptive name in "Command name"
   - Click "Add Shortcut"
3. The new command will immediately appear in the Command Palette

### Using Shortcuts
1. Open Command Palette (`Ctrl+P` / `Cmd+P`)
2. Search for your custom command name
3. Execute the command to insert the character at cursor position

### Managing Shortcuts
- View all current shortcuts in the settings tab
- Remove unwanted shortcuts with the "Remove" button
- Changes are saved automatically

## Default Characters

The plugin comes with these pre-configured characters:
- **Middle Dot (·)**: `Insert Middle Dot (·)`
- **Left Upper Corner Bracket (｢)**: `Insert Left Upper Corner Bracket (｢)`
- **Right Down Corner Bracket (｣)**: `Insert Right Down Corner Bracket (｣)`

## Development

### Prerequisites
- Node.js 16+ (`node --version`)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd obsidian-plugin

# Install dependencies
npm install

# Start development mode
npm run dev
```

### Building
```bash
# Build for production
npm run build
```

### File Structure
```
src/
├── settings.ts          # Settings interface and defaults
├── settings-tab.ts      # Settings UI implementation
main.ts                  # Main plugin file
manifest.json           # Plugin manifest
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have feature requests, please:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include Obsidian version and plugin version information

---

**Made with ❤️ for the Obsidian community**
