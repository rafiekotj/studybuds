import http from "../../../http-common";

const create = (data) => {
  return http.post("/myclass/createdclass", data);
};

const getAllTopics = () => {
  return http.get(`/topics`);
};

const FormService = {
  create,
  getAllTopics,
};

export default FormService;
