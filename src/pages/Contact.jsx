import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Form from '../components/Form.jsx';

const Footer = () => {
  return (
    <div className="container mx-auto shawdow-md rounded justify-center my-3 py-5 text-center">
      <h1  id="contact" className="text-4xl font-bold mt-5">Connect with me:</h1>
      <Form />

      <div className="text-right bg-gray-600 p-4 mt-5"> Reach me via:
        <span className="mx-2">
          <SocialIcon url="https://github.com/arbertotraku" target="_blank" />
        </span>
        <span className="mx-2">
          <SocialIcon url="https://linkedin.com/in/arbertotraku" target="_blank" />
        </span>
        <span className="mx-2">
          <SocialIcon url="https://wa.me/4917630460502" target="_blank" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
