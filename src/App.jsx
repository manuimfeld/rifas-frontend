import './App.css'
import Home from './views/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rifa from './views/Rifa'
import CreateRifa from './views/CreateRifa'
import List from './views/List'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const subscribeToPushNotifications = async () => {
      const registration = await navigator.serviceWorker.register(
        '/service-worker.js'
      )
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: import.meta.env.VITE_PUBLIC_VAPID_KEY,
      })

      await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      })
    }

    subscribeToPushNotifications()
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
