import http from "../../../http-common";

const create = () => {
  return http.post("/studyroom");
};

const FormService = {
  create,
};

export default FormService;
