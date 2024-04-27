import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'shared',
            fileName: (format: any) => `shared.${format}.js`
        },
        rollupOptions: {
            external: ['lodash']
        }
    }
})