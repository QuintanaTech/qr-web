import axios from "axios";
import {API_BASE_URL} from "../config/constants";
import isJson from "../helpers/isJson";

const generate = (data) => {
  const headers = {
    'Content-Type': isJson(data) ? 'application/json' : 'text/plain',
  }
  return axios.post(`${API_BASE_URL}/v1/qr`, data, {
    headers,
  })
}

export default generate;
