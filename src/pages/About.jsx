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
                        className="w-90 h-90 rounded mx-auto mb-5"
                    />
                    <p className="text-gray-700 text-center">
                        Hi, I'm Arber Totraku and I live in Berlin, Germany. I am a passionate full stack web developer with a focus on creating
                        user-friendly and visually appealing web applications. I have a
                        strong background in HTML, CSS, JavaScript, and modern web
                        technologies.
                    </p>
                    <p className="text-gray-700 text-center mt-4">
                        In my free time, I enjoy traveling, swimming and playing chess. So if you think that you're better than me in chess, you are absolutely right. I am also a big fan of espresso. I think that espresso has the magic to turn coffee into code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
