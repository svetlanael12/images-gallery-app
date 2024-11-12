import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@context': resolve(__dirname, 'src/context'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@models': resolve(__dirname, 'src/models'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@routers': resolve(__dirname, 'src/routers'),
            '@shared': resolve(__dirname, 'src/shared'),
            '@stores': resolve(__dirname, 'src/stores'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
});
