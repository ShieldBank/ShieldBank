import axios from "axios";

// const token = "d1c806b7b0d22cead5f5b432e8156e36"
const token = "b014ea9f6b56d5b440f1db52dd5c48f5";

// const token = "f658eda930684da2b70b41255d121054"

const urlBase = "https://gnews.io/api/v4/search";
const lang = "pt";
const matter = "publishedAt";
const pageNews = Math.floor(Math.random() * 4) + 1;;

// function to fetch news based on a query
const news = async (query: string, page: number = pageNews, max: number = 100) => {
  const url = `${urlBase}?q=${query}&lang=${lang}&sortBy=${matter}&max=${max}&page=${page}&apikey=${token}`;

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error: any) {
    console.log(
      "Erro: ", 
      error.response?.data,
      error.response?.status,
      error.message
    );
  }
};
 // export functions to fetch specific categories of news

export const fetchTechnologyNews = () => {
  return news("tecnologia");
};

export const fetchB3News = () => {
  return news("b3");
};
