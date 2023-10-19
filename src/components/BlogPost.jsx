import React from "react";

const BlogPost = ({ post }) => {
    return (
        <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mt-3 mx-auto">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;


