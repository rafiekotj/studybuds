import http from "../../../http-common";

const register = (fullname, email, password) => {
  return http
    .post(`/user/register`, {
      fullname,
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const login = (email, password) => {
  return http
    .post(`/user/login`, {
      email,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
