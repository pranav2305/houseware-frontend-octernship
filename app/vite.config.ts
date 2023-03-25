import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import mui from "vite-plugin-material-ui"

const muiPlugin = mui as PluginOption

export default defineConfig({
  base: '/houseware-frontend-octernship/',
  plugins: [react(), muiPlugin],
})
