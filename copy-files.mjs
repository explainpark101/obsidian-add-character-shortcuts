import * as fs from 'fs';

const outdir = 'dist/shortcut-for-special-characters';

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir, { recursive: true });
}

fs.copyFileSync('manifest.json', `${outdir}/manifest.json`);
fs.copyFileSync('styles.css', `${outdir}/styles.css`);
