import axios from "axios";
const BASE_URL = "https://panda-market-api-crud.vercel.app";
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

class Product {
  #favoriteCount;
  constructor({
    name = "",
    description = "",
    price = 0,
    tags = [],
    images = [],
  } = {}) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.#favoriteCount = 0;
  }

  favorite = () => {
    this.#favoriteCount++;
  };
}

class ElectronicProduct extends Product {
  constructor(data = {}) {
    super(data);
    this.manufacturer = data.manufacturer ?? "";
  }
}

const formatProductList = (list) => {
  return list.map((acc) => {
    if (acc.tags.includes("전자제품")) {
      return new ElectronicProduct(acc);
    }

    return new Product(acc);
  });
};

const getProductList = async (page, pageSize, keyword) => {
  const params = {
    page,
    pageSize,
    keyword,
  };
  const response = await api.get(`/products`, { params });
  const { list } = response.data;
  const result = formatProductList(list);

  return result;
};

const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response.data;
};
const createProduct = async (requestBody) => {
  const response = await api.post(`/products`, requestBody);

  return response.data;
};

const patchProduct = async (id, requestBody) => {
  const response = await api.patch(`/products`, requestBody);

  return response.data;
};
const deleteProduct = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response.data;
};

const productAPI = {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};

export default productAPI;
