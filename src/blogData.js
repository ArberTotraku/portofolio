import dotenv from "dotenv"
dotenv.config()

const blogData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=en&apiKey=${process.env.API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export default blogData;
  