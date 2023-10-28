import React, { useState } from 'react';
import Button from './Button.jsx';

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/#about" },
    { name: "SERVICE", link: "#services" },
    { name: "ABOUT", link: "#about" },
    { name: "TESTIMONIALS", link: "#testimonials" },
    { name: "CONTACT", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust the offset as needed
        behavior: 'smooth',
      });
      setOpen(false)
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
          <span className="text-3xl text-indigo-600 mr-1 pt-2 text-white">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Portofolio
        </div>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 text-white md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.link); // Scroll to the target section
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
