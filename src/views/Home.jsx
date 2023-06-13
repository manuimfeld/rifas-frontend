import { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [haveRifa, setHaveRifa] = useState(false)

  const handleClick = () => {
    setHaveRifa(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id.value
    if (id !== '' && id !== null) {
      navigate(`/rifa/${id}`)
    }
  }

  return (
    <main className="home">
      <Header />
      <Link to="/create-rifa">Crear rifa</Link>
      <button onClick={handleClick}>Entrar a una rifa</button>
      {haveRifa && (
        <>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="number"
              id="id"
              maxLength={10}
              placeholder="Ingresar ID"
            />
            <button>Entrar</button>
          </form>
        </>
      )}
    </main>
  )
}

export default Home
