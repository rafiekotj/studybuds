import axios from "axios";

export default axios.create({
  baseURL: "https://api-studybuds.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6IlJhZmllIiwiZW1haWwiOiJyYWZpZTEyM0BnbWFpbC5jb20iLCJpbWFnZVVzZXIiOm51bGwsImJpbyI6bnVsbCwiaWF0IjoxNjQwMTc3Mzk4fQ.RpFFf-Cqk7aRFoHeM4z6v0ZFABN_ECb9PQ9Xdr6AZTM",
  },
});
