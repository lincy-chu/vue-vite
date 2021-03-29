import { createProxy } from './src/utils/proxy'
import { isDevFn } from './src/utils'
import proxy from './src/config/proxy'

const { resolve } = require('path')

const resolvePath = (path) => resolve(__dirname, path)

module.exports = {
  open: true,
  https: false,
  ssr: false,
  sourcemap: isDevFn(),
  alias: {
    '/@/': resolvePath('./src')
  },
  proxy: createProxy([...proxy])
}
