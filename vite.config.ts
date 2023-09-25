import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'
import postcssPresetEnv from 'postcss-preset-env'

import { defineConfig, loadEnv } from 'vite'

import { envDir, manualChunks, sourceDir } from './scripts/build'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir)

  return {
    /**
     * 管理环境变量的配置文件存放目录
     */
    envDir,

    /**
     * 项目部署目录路径
     *
     * @description 见项目根目录下的 `config` 文件夹说明
     */
    base: env.VITE_DEPLOY_BASE_URL,

    /** 打包优化 */
    build: {
      rollupOptions: {
        output: {
          /**
           * 打包优化，避免全部打包到一个很大的 Chunk 里
           * @description 根据包名生成不同的 Chunk 文件，方便按需加载
           */
          manualChunks,
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 600,
    },

    /** 配置别名 */
    resolve: {
      alias: {
        '@': sourceDir,
      },
    },

    /** CSS */
    css: {
      modules: {
        // generateScopedName: '[path][name]__[local]__[hash:5]',
        // localsConvention: 'camelCaseOnly',
      },
      postcss: {
        plugins: [postcssPresetEnv()],
      },
      less: {},
    },

    plugins: [
      react(),

      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      /**
       * 为入口文件增加 EJS 模版能力
       */
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            appTitle: env.VITE_APP_TITLE,
            appDesc: env.VITE_APP_DESC,
            appKeywords: env.VITE_APP_KEYWORDS,
          },
        },
      }),

      /**
       * 打包分析
       */
      visualizer(),
    ],
  }
})
