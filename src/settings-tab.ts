import { App, PluginSettingTab, Setting } from 'obsidian';
import { ShortcutForDotSettings, CustomShortcut } from './settings';

export class ShortcutForDotSettingTab extends PluginSettingTab {
	plugin: any; // Use any type to avoid circular import

	constructor(app: App, plugin: any) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl('h2', { text: 'Shortcut for Dot - Settings' });

		// Add new shortcut section
		new Setting(containerEl)
			.setName('Add New Shortcut')
			.setDesc('Add a custom character shortcut')
            .addText(text => text
				.setPlaceholder('Command name')
				.setValue('')
				.onChange(async (value) => {
					// Store temporary value for the form
					(this as any).tempName = value;
				}))
			.addText(text => text
				.setPlaceholder('Character to insert')
				.setValue('')
				.onChange(async (value) => {
					// Store temporary value for the form
					(this as any).tempCharacter = value;
				}))
			.addButton(button => button
				.setButtonText('Add Shortcut')
				.setCta()
				.onClick(async () => {
					const character = (this as any).tempCharacter;
					const name = (this as any).tempName;

					if (character && name) {
						const newShortcut: CustomShortcut = {
							id: `custom-${Date.now()}`,
							name: name,
							character: character
						};

						this.plugin.settings.customShortcuts.push(newShortcut);
						await this.plugin.saveSettings();
						this.plugin.registerCommands();
						this.display(); // Refresh the settings tab
					}
				}));

		containerEl.createEl('h3', { text: 'Current Shortcuts' });

		// Display existing shortcuts
		this.plugin.settings.customShortcuts.forEach((shortcut: CustomShortcut, index: number) => {
			new Setting(containerEl)
				.setName(shortcut.name)
				.setDesc(`Character: ${shortcut.character}`)
				.addButton(button => button
					.setButtonText('Remove')
					.setWarning()
					.onClick(async () => {
						this.plugin.settings.customShortcuts.splice(index, 1);
						await this.plugin.saveSettings();
						this.plugin.registerCommands();
						this.display(); // Refresh the settings tab
					}));
		});
	}
}
