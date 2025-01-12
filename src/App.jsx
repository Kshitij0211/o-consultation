import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Authentication from './components/Authentication'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
