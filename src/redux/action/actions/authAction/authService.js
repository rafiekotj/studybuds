import http from "../../../http-common";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

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
  //   register,
  login,
  logout,
};
