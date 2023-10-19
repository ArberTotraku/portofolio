import React from "react";
import About from "./pages/About.jsx";
import Footer from "./pages/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import "./App.css";
import Header from "./pages/Header.jsx";
import Nav from "../src/components/Hamburger.jsx";
import Contact from "./pages/Contact.jsx"
import Blog from "./pages/Blog.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
// import { Route , Routes} from "react-router-dom";
// import Layout from "./pages/Layout.jsx";
// import Home from "./pages/Home.jsx";
// import HamburgerMenu from './components/HamburgerMenu.jsx'
// import Navbar from './pages/Navbar.jsx'
const App = () => {
  return (
    <div className="bg-gray-800 text-white">
      <h1 className="text-3xl font-bold underline m-0 auto">Hello world!</h1>
      {/* <Navbar/> */}
      {/* <HamburgerMenu/> */}
      <Nav />
      <Header />
      <About />
      <Projects />
      <ComingSoon/>
      <Contact/>
      <Blog/>
      <Footer />
     
{/* 
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />

</Route>
      </Routes> */}
    </div>
  );
};

export default App;
