// 
import ReactDOM from 'react-dom/client'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import TechStack from './components/Tech'
import Footer from './components/Footer'
import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <About /> 
    <TechStack />
    <Projects />
    <Contact />
    <Footer />

  </>,
)
