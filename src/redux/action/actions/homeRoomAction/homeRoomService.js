import http from "../../../http-common";

const getAll = (slug) => {
  return http.get(`/studyroom${slug.slug}`);
};

const HomeRoomService = {
  getAll,
};

export default HomeRoomService;
