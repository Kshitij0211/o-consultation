import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter basename='/o-consultation/'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
