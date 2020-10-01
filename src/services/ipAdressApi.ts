import axios from "axios";

const ipAdressApi = axios.create({
  baseURL: `https://geo.ipify.org/api/v1?apiKey=at_6ttJWVAtb3CMx5RvYZHb9y8eCEW77&ipAddress=`,
});

export default ipAdressApi;
