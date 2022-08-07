import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Resume from './components/Resume'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element= {<Home />} />
      <Route path="/resume" element={<Resume />}/>
      </Route>
      
    </Routes>
    </>
  )
}

export default App
