import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Guests from './components/Guests'
import Rooms from './components/Rooms'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />
<Main />
<Dashboard/>
<Guests/>
<Rooms/>
<Footer/>
    </>
  )
}

export default App
