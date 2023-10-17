import React from 'react';
import profile from "../images/profile.jpeg"

const About = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">About</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                        src={profile}
                        alt="Arber Totraku"
                        className="w-100 h-100 rounded mx-auto mb-5"
                    />
                    <p className="text-gray-700 text-center">
                        Hi, I'm Arber Totraku, a passionate full stack web developer with a focus on creating
                        user-friendly and visually appealing web applications. I have a
                        strong background in HTML, CSS, JavaScript, and modern web
                        technologies.
                    </p>
                    <p className="text-gray-700 text-center mt-4">
                        In my free time, I enjoy coding, exploring new technologies, and
                        contributing to open-source projects. I'm dedicated to delivering
                        high-quality software solutions to meet the needs of clients and
                        users.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
