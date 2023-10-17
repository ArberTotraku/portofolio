import React from 'react'
import About from './pages/About.jsx'
import Footer from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import "./App.css"
// import Navbar from './pages/Navbar.jsx'
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline ml-10">
      Hello world!
    </h1>
    {/* <Navbar/> */}

    <About/>
<Projects/>
    <Footer/>
    </div>
  )
}

export default App