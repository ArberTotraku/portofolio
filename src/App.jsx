import React from "react";
import About from "./pages/About.jsx";
import Footer from "./pages/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import "./App.css";
import Nav from "../src/components/Hamburger.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import ScrollToTopButton from "./utils/ScrollToTopButton.jsx";

const App = () => {
  return (
    <div className="bg-gray-800 text-white">
      <h1 className="text-3xl font-bold underline m-0 auto">Hello world!</h1>

      <Nav />

      <About />
      <Projects />

      <Services />
      <TestimonialsPage />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
