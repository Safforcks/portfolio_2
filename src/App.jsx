import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Indisponivel from './components/indisponivel'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Habilidades from './pages/Habilidades'
import Contato from './pages/Contato'

import { Routes, Route } from 'react-router'

export default function App(){
  return(
    <div className="App">
      <div className="layout">
        <Header />
        <Indisponivel/>
        <div className="content">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/projetos" element={<Projetos/>} />
            <Route path="/habilidades" element={<Habilidades/>} />
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
