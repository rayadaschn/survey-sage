import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import postcssPresetEnv from 'postcss-preset-env'

import { defineConfig, loadEnv } from 'vite'

import { envDir, manualChunks, sourceDir } from './scripts/build'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir)

  return {
    /** 管理环境变量的配置文件存放目录 */
    envDir,

    /**
     * 项目部署目录路径
     *
     * @description 见项目根目录下的 `config` 文件夹说明
     */
    base: env.VITE_DEPLOY_BASE_URL,

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

    /** 配置代理 */
    server: {
      proxy: {
        '/devapi/v1': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/devapi\/v1/, ''),
          bypass(req, res, options) {
            if (options.rewrite && req.url) {
              const proxyUrl = new URL(
                options.rewrite(req.url),
                options.target as string,
              ).href
              res.setHeader('x-req-proxyUrl', proxyUrl)
              console.info(proxyUrl) // 服务器打印访问代理地址
            }
          },
        },
      },
    },

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

    plugins: [
      /** 基础插件 */
      unocss(),
      react(),

      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      /**
       * 自动导入 API ，不用每次都 import
       *
       * @tips 如果直接使用没导入的 API 依然提示报错，请重启 VS Code
       */
      autoImport({
        imports: ['react', 'react-router-dom', 'ahooks'],
        dts: 'src/types/declaration-files/auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),

      /** 为入口文件增加 EJS 模版能力 */
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

      /** 打包分析 */
      visualizer(),
    ],
  }
})
