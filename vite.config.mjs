import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            name: 'hashcat-rules',
            entry: path.resolve(__dirname, 'index.js'),
            fileName: `hashcat-rules`,
            formats: ['cjs']
        },
        rollupOptions: {
            external: [],
        }
    },
    resolve: {
    }
});
