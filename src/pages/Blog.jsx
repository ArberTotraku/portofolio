import React from 'react';

import BlogPost from '../components/BlogPost.jsx';
import BlogData from '../BlogData.jsx'

const Blog = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">My Blog</h1>
            {BlogData.map((post, index) => (
                <BlogPost key={index} post={post} />
            ))}
        </div>
          
        </div>
    );
};

export default Blog;
