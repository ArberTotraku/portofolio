import React from 'react';
import profile from "../images/profile.jpeg";

const About = () => {
  const onButtonClick = () => {
    fetch('../public/myCv.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.getElementById('cv');
        alink.href = fileURL;
        alink.download = 'myCv.pdf';
        alink.click();
      });
  };

  return (
    <div id='about' className="bg-gray-800 text-white py-8">
      <div className="container mx-auto p-4  bg-gray-600">
        <h1 className="text-3xl font-bold mb-6 text-center">About</h1>
        <div className="bg-grey-600 p-6">
          <img src={profile} alt="Arber Totraku" className="w-90 h-90 rounded mx-auto mb-5" />
          <p  className="text-white text-center mt-4">
            Hi, I'm Arber Totraku and I live in Berlin, Germany. I am a passionate full stack web developer with a focus on creating
            user-friendly and visually appealing web applications. I have a
            strong background in HTML, CSS, TailwindCss, Bootstrap, JavaScript, Typescript, Angular for Frontent technologies also NodeJs, ExpressJs and NoSql (MongoDb) and SQL for Backend.
          </p>
          <p className="text-white text-center mt-4">
            In my free time, I enjoy traveling, swimming and playing chess. So if you think that you're better than me in chess, you are absolutely right. I am also a big fan of espresso. I think that espresso has the magic to turn coffee into code.
          </p>
          <div className="text-center mt-4">
            <button
              onClick={onButtonClick}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span id='cv'>
                <a href="./myCv.pdf" download="myCv.pdf">Download my Cv here</a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
