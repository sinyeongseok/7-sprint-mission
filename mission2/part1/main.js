import articleAPI from "./articles/articleService.js";
import productAPI from "./products/productService.js";

const requestBody = {
  image: "https://placehold.co/600x400/png",
  content: "제주도 산지직송 감귤",
  title: "제주 감귤 바꿈",
};

// articleAPI.getArticleList(1, 10, "테스트").then(console.log).catch(console.log);
// articleAPI.getArticle(5179).then(console.log).catch(console.log);
// articleAPI.createArticle(requestBody).then(console.log).catch(console.log);
// articleAPI.patchArticle(5179, requestBody).then(console.log).catch(console.log);
// articleAPI.deleteArticle(5179).then(console.log).catch(console.log);

const doThis = async () => {
  try {
    const result = await productAPI.getProductList(1, 20, "전자제품");
    // const result = await productAPI.getProduct(5207);
    //   const result = await productAPI.createProduct(requestBody);
    //   const result = await productAPI.patchProduct(5207, requestBody);
    //   const result = await productAPI.deleteProduct(5207);
    console.log(result);
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

doThis();
