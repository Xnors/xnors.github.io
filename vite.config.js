import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    copy({
      targets: [
        // 复制 src/assets 目录到 dist/assets
        { src: 'src/assets', dest: 'dist/assets' },
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      // 设置路径别名
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      // 可以添加更多别名
    },
  },
  build: {
    assetsInlineLimit: 0,
  }
});
