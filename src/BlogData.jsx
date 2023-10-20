const BlogData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=fb921efd2b50464087fa45e81a5c3ab0'
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
  
  export default BlogData;
  