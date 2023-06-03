import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <Footer />
  </>,
)
