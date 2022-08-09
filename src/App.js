import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Resume from './components/Resume'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element= {<Home />} />
      <Route path="/resume" element={<Resume />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<AboutMe />}/>
      <Route path="/skills" element={<Skills />} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App
