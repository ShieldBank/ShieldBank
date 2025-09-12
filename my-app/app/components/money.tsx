import axios from 'axios';

const token = '99abdcd40661d9a55aac7eb828045e96b0da42f0721645e7ecd0e665aff60021'; 




export const moneyCota = async () => {
    
    const url =`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL?token=${token}`;

  try {
    const response = await axios.get(url);
    console.log("Cotação Autal", response.data)
    return response.data;
  } catch (error) {
    console.log("Erro: ", error.response.data , error.response.status, error.message);
  }

}