import axios from "axios";

export function request(config) {
  const instances = axios.create({
    baseURL: "http://123.207.32.32:8000/api/v2", //备用接口
    // baseURL: 'http://106.54.54.237:8000/api/v1', //新接口
    timeout: 5000
  });

  instances.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
      return err;
    }
  );

  return instances(config)
}
