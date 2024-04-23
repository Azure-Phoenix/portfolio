import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        server: {
            host: true,
            open: true
        },
        plugins: [react()],
        define: {
            // By default, Vite doesn't include shims for NodeJS/
            // necessary for segment analytics lib to work
            global: {},
        },
    };
});