import axios from "axios";
export default axios.create({
  baseURL: "https://tracking.bosta.co",
  headers: {
    "Content-type": "application/json"
  }
});