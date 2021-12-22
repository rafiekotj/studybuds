import http from "../../../http-common";

const create = (data) => {
  return http.post("/myclass/createdclass", data);
};

const FormService = {
  create,
};

export default FormService;
