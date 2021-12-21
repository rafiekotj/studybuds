import http from "../../../http-common";

const create = () => {
  return http.post("/myclass/createdclass");
};

const FormService = {
  create,
};

export default FormService;
