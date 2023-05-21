import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './Pages/Home'
import { Acerca } from './Pages/Acerca'
import { Contacto } from './Pages/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/acerca' >Acerca</Link>
        <Link to='/contacto' >Contacto</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acerca' element={<Acerca/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
