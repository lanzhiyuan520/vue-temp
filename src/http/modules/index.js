// import { houseList } from "../api";
import * as api from '../api'
import request from '../request'

const getHouseRequest = data => {
  return request({
    url : api.houseList,
    data
  })
}

export default {
  getHouseRequest
}
