import { NavLink } from "react-router-dom";

import React from 'react'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Navbar = () => {
  return (
<NavLink>

    <Home/>
    <About/>
    <Projects/>
    <Contact/>
</NavLink>

    )
}

export default Navbar