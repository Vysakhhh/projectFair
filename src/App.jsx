import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/ContextAPI'



function App() {
 
  const {isAuthorized}=useContext(tokenAuthContext)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        theme="colored"

      />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/dashboard' element={isAuthorized? <Dashboard /> : <Navigate to={'/login'} /> } />
        <Route path='/projects' element={isAuthorized? <Projects /> : <Navigate to={'/login'} />} />





      </Routes>

      <Footer />
    </>
  )
}

export default App
