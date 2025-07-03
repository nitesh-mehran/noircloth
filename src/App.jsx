import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './ScrollToTop'
import TopBar from './components/layout/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <TopBar/>
    <Navbar/>
    <AppRoutes/>
    <Footer/>

    
    </BrowserRouter>
      
    </>
  )
}

export default App
