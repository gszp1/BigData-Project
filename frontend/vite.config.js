import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
    server: {port: 9091},
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'frontend')
      }
    },
    base: '/frontend/',
  } 
)
