import http from "../../../http-common";

const getDetail = (id) => {
  return http.get(`/studyroom/${id}`);
};

const update = (id, data) => {
  return http.put(`/studyroom/${id}`, data);
};

const getAllTopics = () => {
  return http.get(`/topics`);
};

const FormEditService = {
  getDetail,
  update,
  getAllTopics,
};

export default FormEditService;
