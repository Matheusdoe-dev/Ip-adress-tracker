import axios from "axios";

// ip adress tracker api
const ipAdressApi = axios.create({
  baseURL: `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=`,
});

export default ipAdressApi;
