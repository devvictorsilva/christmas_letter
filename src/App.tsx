import { Navigate } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Letter from './pages/letter/letter'

function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/letter/:id" element={<Letter />} />
      <Route path="*" element={<Navigate to={"/home"}/>} />
    </Routes>
  )
}

export default App
