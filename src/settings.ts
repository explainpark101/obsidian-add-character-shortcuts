export interface ShortcutForDotSettings {
	customShortcuts: CustomShortcut[];
}

export interface CustomShortcut {
	id: string;
	name: string;
	character: string;
}

export const DEFAULT_SETTINGS: ShortcutForDotSettings = {
	customShortcuts: [
		{
			id: 'insert-dot',
			name: 'Insert Middle Dot (·)',
			character: '·'
		},
		{
			id: 'insert-left-upper-corner-bracket',
			name: 'Insert Left Upper Corner Bracket (｢)',
			character: '｢'
		},
		{
			id: 'insert-right-down-corner-bracket',
			name: 'Insert Right Down Corner Bracket (｣)',
			character: '｣'
		}
	]
};
