import http from "../../../http-common";

const getAll = (slug) => {
  return http.get(`/studyroom${slug.slug}`);
};

const getAllTopics = () => {
  return http.get(`/topics`);
};

const HomeRoomService = {
  getAll,
  getAllTopics,
};

export default HomeRoomService;
