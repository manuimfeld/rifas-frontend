import './App.css'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rifa from './views/Rifa'
import CreateRifa from './views/CreateRifa'
import List from './views/List'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const subscribeToNotifications = async () => {
      try {
        // Obtén el objeto de suscripción
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.getSubscription()

        if (subscription) {
          // Si ya está suscrito, envía la suscripción al backend
          await fetch(`${import.meta.env.VITE_RIFAS_URL}/subscribe`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscription),
          })
          console.log('Suscrito correctamente')
        } else {
          console.log('El usuario aún no se ha suscrito')
        }
      } catch (error) {
        console.error('Error al suscribirse a las notificaciones:', error)
      }
    }

    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          // El usuario ha dado permiso, puedes llamar a la función para suscribirse a las notificaciones
          subscribeToNotifications()
        }
      } catch (error) {
        console.error('Error al solicitar el permiso de notificación:', error)
      }
    }
    subscribeToNotifications()
    requestNotificationPermission()
  }, [])

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
