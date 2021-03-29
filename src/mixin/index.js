/**
 * Created by robin zhu on 2021/3/23
 */
import debounce from 'lodash.debounce'

const mixin = {
  computed: {
    debounce: () => debounce
  }
}

export function setupMixin(app) {
  app.mixin(mixin)
}
