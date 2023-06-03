import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    
    <Header/>
    <App />
    <Footer/>
  </>,
)
