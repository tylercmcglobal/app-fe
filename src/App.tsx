import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Client from './pages/client'
import Dashboard from './pages/dashboard'
import { SocketContext, socket } from './context/socket'

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <Routes>
          <Route path='/client' element={<Client />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
    
  )
}

export default App
