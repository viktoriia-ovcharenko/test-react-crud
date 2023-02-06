import { client } from "./service";

export const getAllPosts = () => {
  return client.get(`/posts`);
};

export const createPost = async (post) => {
  return client.post('/posts', post);
};

export const getCommentsById = (postId) => {
  return client.get(`/comments?postId=${postId}`);
};

export const getPostById = (postId) => {
  return client.get(`/posts/${postId}`);
};

export const addPost = (newPost) => {
  return client.post('/posts', newPost);
};

export const deletePost = (postId) => {
  return client.delete(`/posts/${postId}`);
};

export const updatePost = (postId, title, body) => {
  return client.put(`/posts/${postId}`, { title, body });
};
