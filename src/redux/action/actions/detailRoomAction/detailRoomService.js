import http from "../../../http-common";

const getDetail = (id) => {
  return http.get(`/studyroom/${id}`);
};

const remove = (id) => {
  return http.delete(`/myclass/createdclass/${id}`);
};

const createChoose = (id) => {
  return http.post("/chosenclass", id);
};

const DetailRoomService = {
  getDetail,
  remove,
  createChoose,
};

export default DetailRoomService;
