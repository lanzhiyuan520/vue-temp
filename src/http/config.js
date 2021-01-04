const baseUrlConfig = {
  'development' : 'https://lanzhiyuan99.cn',
  'production' : 'https://lanzhiyuan99.cn',
  'test' : 'http://lanzhiyuan99.cn',
}

const getBaseurl = mode => baseUrlConfig[mode];

const config = {
  method : 'GET',
  baseURL : getBaseurl(process.env.NODE_ENV),
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 1000 * 60
}

export default config
