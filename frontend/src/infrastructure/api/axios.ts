import axios from "axios";

const host = import.meta.env.VITE_API_HOST || "http://localhost:3030";

export const instance = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json",
  },
});
