import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";

export default defineConfig({
	root: 'src',
	plugins: [
		ImportMetaEnvPlugin.vite({
			example: ".env"
		}),
		react(),
	],
	server: {
		port: 3000,
		open: true
	}
})