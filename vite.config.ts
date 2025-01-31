// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     build: {
//         outDir: "../Versiones/version0_1_2" // Cambia "ruta-personalizada" por la carpeta que desees
//     },
//     base: "/Calculadora/"

// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: true,
    },
    base: '/'
})