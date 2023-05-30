import './App.css'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rifa from './views/Rifa'
import CreateRifa from './views/CreateRifa'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rifa/:id" element={<Rifa />} />
          <Route path="/create-rifa" element={<CreateRifa />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
