import React from 'react';
import Banking from "../images/banking-app.png"
import Budget from "../images/budget.png"
import Forex from "../images/forex.png"
import PingPong from "../images/pingpong.png"
import Snake from "../images/snake.png"
import Sushi from "../images/sushi-restaurant.png"
import ToDo from "../images/todo.png"
const projectsData = {
    projects: [
        {
            id: 1,
            title: 'Budget application',
            imageSrc: Banking,
            link: 'https://control-your-budget-liard.vercel.app',
        },
        {
            id: 2,
            title: 'Banking application',
            imageSrc: Budget,
            link: 'https://banking-app-jade-phi.vercel.app',
        },
        {
            id: 3,
            title: 'Currency exchange',
            imageSrc: Forex,
            link: 'https://forex-exchange-eight.vercel.app',
        },
        {
            id: 4,
            title: 'Ping Pong game',
            imageSrc: PingPong,
            link: 'https://ping-pong-arcade.vercel.app',
        },
        {
            id: 5,
            title: 'Snake game',
            imageSrc: Snake,
            link: 'https://snake-game-rust-five.vercel.app',
        },
        {
            id: 6,
            title: 'Sushi restaurant landing page',
            imageSrc: Sushi,
            link: 'https://sushiweb-beta.vercel.app',
        },
        {
            id: 7,
            title: 'To do react app',
            imageSrc: ToDo,
            link: 'https://todo-react-three-murex.vercel.app',
        },
    ],
};

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1 className='ta-center'>Some of my work:</h1>
            {projectsData.projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300"
                >
                    <img
                        src={project.imageSrc}
                        alt={project.title}
                        
                        className="w-190 h-48 mx-auto mb-10 contain-cover"
                    />
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
