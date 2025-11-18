import axios from "axios";
const BASE_URL = "https://panda-market-api-crud.vercel.app";
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

class Article {
  #likeCount;
  constructor({ title = "", content = "", writer = "" } = {}) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.#likeCount = 0;
    this.createdAt = new Date();
  }
  like = () => {
    this.#likeCount++;
  };
}

const getArticleList = async (page, pageSize, keyword) => {
  const params = {
    page,
    pageSize,
    keyword,
  };

  return api
    .get("/articles", { params })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getArticle = async (id) => {
  return api
    .get(`/articles/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const createArticle = async (requestBody) => {
  return api
    .post("/articles", requestBody)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const patchArticle = async (id, requestBody) => {
  return api
    .patch(`/articles/${id}`, requestBody)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const deleteArticle = async (id) => {
  return api
    .delete(`/articles/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const articleAPI = {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};

export default articleAPI;
