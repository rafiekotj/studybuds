import http from "../../../http-common";

const getAll = (slug) => {
  return http.get(`/studyroom${slug.slug}`);
};

const StudyRoomService = {
  getAll,
};

export default StudyRoomService;
