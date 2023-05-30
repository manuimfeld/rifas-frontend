import './App.css'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rifa from './views/Rifa';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rifa/:id" element={<Rifa />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
