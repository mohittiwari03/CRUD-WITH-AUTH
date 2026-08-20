import api from "../api/axios";
import Register from "../pages/Register";

export const authService = {
  login: (data) => api.post("/auth/login", data),

  Register: (data) => api.post("/auth/register", data),

  logout: () => api.post("/auth/logout"),

  profile: () => api.get("/auth/profile"),
};
