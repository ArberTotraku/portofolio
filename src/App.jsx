import React from 'react'
import About from './pages/About.jsx'
import Footer from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import "./App.css"
import Header from './pages/Header.jsx'
import HamburgerMenu from './components/HamburgerMenu.jsx'
// import Navbar from './pages/Navbar.jsx'
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline m-0 auto">
      Hello world!
    </h1>
    {/* <Navbar/> */}
    <HamburgerMenu/>
<Header/>
    <About/>
<Projects/>
    <Footer/>
    </div>
  )
}

export default App