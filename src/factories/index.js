export function createFactory(fn) {
  return function (options = {}) {
    const defaults = {
      props: {},
      store: {},
      options: {},
    }
    const params = Object.assign({}, defaults, options)
    return fn(params)
  }
}
