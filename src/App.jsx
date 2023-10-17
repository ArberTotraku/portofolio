import React from 'react'
import About from './pages/About.jsx'
import Footer from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import "./App.css"
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline ml-10">
      Hello world!
    </h1>
    <p>hi</p>

    <About/>
<Projects/>
    <Footer/>
    </div>
  )
}

export default App