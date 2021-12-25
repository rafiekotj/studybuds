import http from "../../../http-common";

const getProfile = () => {
  return http.get(`/user/profile`);
};

const ProfileService = {
  getProfile,
};

export default ProfileService;
