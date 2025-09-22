import axios from "axios";

// const token = '771874c73ae34339a1c902b70d93c978';
// const token = "2e43869325e04a5cbc4d8cf9b8188684";
const token = "72340279fa7d4d229ccedbf7be3fb190";
const urlBase = "https://newsapi.org/v2/everything";
const language = "pt";
const matter = "publishedAt";

// function to fetch news based on a query
const news = async (query) => {
  const url = `${urlBase}?q=${query}&language=${language}&sortBy=${matter}&apiKey=${token}`;

  try {
    const response = await axios.get(url);
    console.log("Passei aqui ", response);
    return response.data.articles;
  } catch (error) {
    console.log(
      "Erro: ",
      error.response.data,
      error.response.status,
      error.message
    );
  }
}; // export functions to fetch specific categories of news
export const fetchTechnologyNews = () => {
  return news("Tecnologia Financeira");
};

export const fetchB3News = () => {
  return news("B3 bolsa de valores");
};

export const fetchMarketTrendsNews = () => {
  return news("tendências de mercado financeiro");
};
