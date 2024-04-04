import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    plugins: [
        react()
    ],
    server: {
        cors: true,
        proxy: {
            '^/github/.*': {
                target: 'https://github.com/',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => {
                    const newPath = path.replace(/^[/]github/, '');
                    console.log("### rewrite", { path, newPath });
                    return newPath;
                },
            },
        }
    }
});
