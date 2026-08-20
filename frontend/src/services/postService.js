import api from "../api/axios";

export const postService = {
  getPosts: () => api.get("/posts"),

  getPost: (id) => api.get(`/posts/${id}`),

  createPost: (data) => api.post("/posts", data),

  updatePost: (id, data) => api.put(`/posts/${id}`, data),

  deletePost: (id) => api.delete(`/posts/${id}`),
};
