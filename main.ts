import { Editor, MarkdownView, Plugin } from 'obsidian';
import { ShortcutForDotSettings, DEFAULT_SETTINGS } from './src/settings';
import { ShortcutForDotSettingTab } from './src/settings-tab';

export default class ShortcutForDotPlugin extends Plugin {
	settings: ShortcutForDotSettings;

	async onload() {
		console.log('ShortcutForDotPlugin: Loading...');
		await this.loadSettings();

		// Add the settings tab
		this.addSettingTab(new ShortcutForDotSettingTab(this.app, this));
		console.log('ShortcutForDotPlugin: Settings tab added');

		// Register commands based on settings
		this.registerCommands();
		console.log('ShortcutForDotPlugin: Commands registered');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	registerCommands() {
		// Register commands from settings
		this.settings.customShortcuts.forEach(shortcut => {
			this.addCommand({
				id: shortcut.id,
				name: shortcut.name,
				editorCallback: (editor: Editor, _view: MarkdownView) => {
					editor.replaceSelection(shortcut.character);
				}
			});
		});
	}

	onunload() {

	}
}