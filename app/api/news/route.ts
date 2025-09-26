import axios from "axios";
import { NextResponse } from "next/server";

const tokens = ["d1c806b7b0d22cead5f5b432e8156e36", "b014ea9f6b56d5b440f1db52dd5c48f5", "f658eda930684da2b70b41255d121054"];

const urlBase = "https://gnews.io/api/v4/search";
const lang = "pt";
const matter = "publishedAt";
const max = 10;

// Função Fallback
async function fetchFallback(query: string) {
  // Iniciando um loop com o for, criando uma variável token que recebe todos os meus tokens
  for (const token of tokens) {

    // Usando para gerar um número e ir trocando a page que selecionamos no POST 
    const pageNews = Math.floor(Math.random() * 2) + 1;

    const url = `${urlBase}?q=${query}&lang=${lang}&sortBy=${matter}&max=${max}&page=${pageNews}&apikey=${token}`;

    try {
      const response = await axios.get(url);
      return response.data.articles;
    } catch (error: any) {
    
      // pegando o código de status
      const status = error.response?.status;
      const data = error.response?.data;
      console.log(`Token ${token} falhou:`, status, data);

      // Se diferente do erro 429, da o throw error, mas se for 429 não entra no if e o loop segue
      if (status !== 429) throw error; 
    }
  }
  throw new Error("Todos os tokens atingiram o limite ou falharam.");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  try {
    const articles = await fetchFallback(query);
    return NextResponse.json(articles, { status: 200 });
  } catch (error: any) {
    console.error("Erro na rota GNews:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}