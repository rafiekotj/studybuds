import http from "../../../http-common";

const getAllCreated = () => {
  return http.get("/myclass/createdclass");
};

const getAllJoined = () => {
  return http.get("/myclass/joinedclass");
};

const MyClassService = {
  getAllCreated,
  getAllJoined,
};

export default MyClassService;
