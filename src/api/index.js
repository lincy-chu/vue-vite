import request from '/@/utils/request'
import URL from './urls'
import METHODS from './types'

export const login = (data) => request({
  url: URL.Login,
  method: METHODS.POST,
  data
})
