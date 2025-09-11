import axios from 'axios';

const token = '771874c73ae34339a1c902b70d93c978'; 
const urlBase = "https://newsapi.org/v2/everything";
const language = 'pt';
const matter = 'relevancy';

const news = async (query) => {

  const url =`${urlBase}?q=${query}&language=${language}&sortBy=${matter}&apiKey=${token}`;

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.log("Erro: ", error.response.data , error.response.status, error.message);
  }

}

export const fetchTechnologyNews = () => {
  return news("tecnologia financeira");
};

export const fetchEconomyNews = () => {
  return news("economia Brasil");
};

export const fetchB3News = () => {
  return news("B3 bolsa de valores");
};

export const fetchMarketTrendsNews = () => {
  return news("tendências de mercado financeiro");
};
