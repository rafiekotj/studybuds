import http from "../../../http-common";

const getDetail = (id) => {
  return http.get(`/studyroom/${id}`);
};

const DetailRoomService = {
  getDetail,
};

export default DetailRoomService;
