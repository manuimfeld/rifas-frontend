import { useState } from "react"
import Header from "../components/Header"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [haveRifa, setHaveRifa] = useState(false)

  const handleClick = () => {
    setHaveRifa(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id.value
    navigate(`/rifa/${id}`)
  }

  return (
    <main className="home">
        <Header />
        <Link to="/crear-rifa">Crear rifa</Link>
        <p>¿Ya tenés una rifa?</p>
        <button onClick={handleClick}>Entrar a una rifa</button>
        {haveRifa && 
        <>
        <form action="" onSubmit={handleSubmit}>
          <input type="number" id="id"/>
          <button>Entrar</button>
        </form>
        </>
        }
        
    </main>
  )
}

export default Home