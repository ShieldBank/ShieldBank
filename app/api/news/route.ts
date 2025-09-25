import axios from "axios";
import { NextResponse } from "next/server"; 


const GNEWS_API_KEY = process.env.GNEWS_API_KEY; 

const urlBase = "https://gnews.io/api/v4/search";
const lang = "pt";
const matter = "publishedAt";


export async function GET(request: Request) {
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    
    const pageNews = Math.floor(Math.random() * 2) + 1;
    const max = 10; 

    const url = `${urlBase}?q=${query}&lang=${lang}&sortBy=${matter}&max=${max}&page=${pageNews}&apikey=${GNEWS_API_KEY}`;

    try {
        
        const response = await axios.get(url);
        
       
        return NextResponse.json(response.data.articles, { status: 200 }); 

    } catch (error: any) {
        const errorData = error.response?.data
        const status = error.response?.status
        
        console.error("Erro na chamada GNews:", errorData);
        return NextResponse.json(errorData, { status: status });
    }
}