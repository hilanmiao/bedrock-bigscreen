import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import { fileURLToPath } from 'node:url'
import createVitePlugins from './vite/plugins/index.js'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  return {
    // 部署生产环境和开发环境下的URL。
    // base: VITE_APP_ENV === 'production' ? '/' : '/',
    base: '/frontend/',
    plugins: createVitePlugins(env, command === 'build'),
    build: {
      // sourcemap: true // 生产环境也使用sourcemap
    },
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(rootDir, './'),
        // 设置别名
        '@': path.resolve(rootDir, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 10070,
      host: true,
      open: true
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    }
  }
})
