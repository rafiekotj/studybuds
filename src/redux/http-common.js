import axios from "axios";

export default axios.create({
  baseURL: "https://api-studybuds.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
