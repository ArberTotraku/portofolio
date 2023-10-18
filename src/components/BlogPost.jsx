import React from "react";

const BlogPost = ({ post }) => {
    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;


