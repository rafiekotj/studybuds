import http from "../../../http-common";

const get = () => {
  return http.get("/studyroom/:id");
};

const DetailRoomService = {
  get,
};

export default DetailRoomService;
