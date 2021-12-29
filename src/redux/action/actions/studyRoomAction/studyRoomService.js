import http from "../../../http-common";

const getAll = (slug) => {
  return http.get(`/studyroom${slug.slug}`);
};

const getAllTopics = () => {
  return http.get(`/topics`);
};

const StudyRoomService = {
  getAll,
  getAllTopics,
};

export default StudyRoomService;
