import http from "../../../http-common";

const getApprove = (id) => {
  return http.get(`/participant/${id}`);
};

const ApproveService = {
  getApprove,
};

export default ApproveService;
