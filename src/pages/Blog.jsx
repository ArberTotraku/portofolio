// import React from 'react';

// import BlogPost from '../components/BlogPost.jsx';
// import BlogData from '../BlogData.jsx'

// const Blog = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//              <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-semibold mb-4">My Blog</h1>
//             {BlogData.map((post, index) => (
//                 <BlogPost key={index} post={post} />
//             ))}
//         </div>
          
//         </div>
//     );
// };

// export default Blog;

import React, { useState, useEffect } from 'react';
import BlogData from '../BlogData.jsx'; 

function BlogList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await BlogData();
        setArticles(data.slice(0,4));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container bg-gray-800 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">NEWS BLOG:</h1>
      <p className='text-center mb-3'>Articles are via a REST API and they are real time news</p>
      <span className='text-center mb-2'>loading...</span>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4 bg-gray-700 p-2">
            <div className="flex">
              <div className="w-1/3 pr-4 ">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="rounded-lg w-full"
                  />
                )}
              </div>
              <div className="w-2/3">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-5ß0">{article.description}</p>
             

                <a
                  href={article.url}
                  className="text-blue-500 hover:underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Read more
                </a>
                    
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

