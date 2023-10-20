import dotenv from "dotenv";
dotenv.config();

const blogData = () => {
  fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.articles;
    })
    .catch((error) => error.message);
};

export default blogData;
