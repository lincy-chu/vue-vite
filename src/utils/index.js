export function isDevFn() {
  return process.env.NODE_ENV === 'development'
}

export function isProdFn() {
  return process.env.NODE_ENV === 'production';
}
