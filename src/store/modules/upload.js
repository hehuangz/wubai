// 图片上传数据存储
import * as types from './../mutation_types'
export default {
  state: {
    urlArr: []
  },
  mutations: {
    [types.GET_UPLOAD_SRC] (state, url) {
      if (state.urlArr.length > 3) return false
      state.urlArr.push(url)
      console.log(state.urlArr)
    }
  }
}
