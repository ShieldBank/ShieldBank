import axios from "axios";

const news = async (query: string) => { 
    
    const url = `/api/news?query=${query}`; 

    try {
        const response = await axios.get(url);
        
        
        return response.data; 
    } catch (error: any) {
        
        console.log(
            "Erro ao buscar notícias: ", 
            error.response?.data,
            error.response?.status,
            error.message
        );
        
        return [];
    }
};


export const fetchTechnologyNews = () => {
    return news("tecnologia");
};

export const fetchB3News = () => {
    return news("b3");
};
