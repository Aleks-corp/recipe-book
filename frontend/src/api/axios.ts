import axios from "axios";

const host = "http://localhost:3030";

export const instance = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json",
  },
});
