import { useEffect } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { getRifaById } from '../axios/apiRifas'
import { useState } from 'react'

const List = () => {
  const { id } = useParams()
  const [listRifa, setListRifa] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRifaById(id)
        const numbers = data.numbers
        const newList = numbers
          .filter((number) => number.name !== '')
          .sort((a, b) => a.numero - b.numero)
        setListRifa(newList)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <Header />
      <main className="list">
        <Link to={`/rifa/${id}`} className="back-route">
          ← Volver
        </Link>
        <h2>LISTA</h2>
        {listRifa.length <= 0 ? (
          <h2>No hay ningún número vendido</h2>
        ) : (
          <>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Número</th>
                  <th>Pagó</th>
                </tr>
              </thead>
              <tbody>
                {listRifa.map((numberMap, index) => {
                  if (index % 2 === 0) {
                    return (
                      <tr key={numberMap._id}>
                        <td>{numberMap.name}</td>
                        <td>{numberMap.number}</td>
                        <td>{numberMap.paid == true ? 'Si' : 'No'}</td>
                      </tr>
                    )
                  } else {
                    return (
                      <tr key={numberMap._id} className="active-row">
                        <td>{numberMap.name}</td>
                        <td>{numberMap.number}</td>
                        <td>{numberMap.paid == true ? 'Si' : 'No'}</td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  )
}

export default List
