import './App.css'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rifa from './views/Rifa'
import CreateRifa from './views/CreateRifa'
import List from './views/List'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rifa/:id" element={<Rifa />} />
          <Route path="/create-rifa" element={<CreateRifa />} />
          <Route path="/list/:id" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
