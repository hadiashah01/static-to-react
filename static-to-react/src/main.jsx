import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import MainOfBody from './components/MainOfBody'
import Footer from './components/Footer''

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <MainOfBody></MainOfBody>
    <Footer></Footer>
  </StrictMode>,
)
