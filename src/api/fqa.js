import Axios from '@/util/request'

export const getAllFQA = () => Axios({
  url: '/api/faq/allfaq'
})

export const getIssueList = data => Axios({
  url: 'api/faq/getfaqbycategory',
  method: 'post',
  data
})

export const getFQADetail = data => Axios({
  url: 'api/faq/getbyid',
  params: data
})

export const search = data => Axios({
  url: 'api/faq/search',
  method: 'post',
  data
})
