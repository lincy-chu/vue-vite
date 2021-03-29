export function createProxy(list) {
  const ret = {}
  for (const { prefix, target } of list) {
    ret[prefix] = {
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^/${prefix}`]: ''
      }
    }
  }
  return ret
}
