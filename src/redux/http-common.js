import axios from "axios";
import authHeader from "../redux/action/actions/authAction/auth-header";

export default axios.create({
  baseURL: "https://api-studybuds.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    authorization: authHeader(),
  },
});
