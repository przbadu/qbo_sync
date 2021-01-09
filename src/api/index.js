import axios from "axios";
import { API_URL } from "../utils/constants";

export const Api = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "access-token": user["access-token"],
      "token-type": user["token-type"],
      client: user.client,
      expiry: user.expiry,
      uid: user.uid,
    },
  });
};
