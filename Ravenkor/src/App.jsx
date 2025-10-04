import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import './App.css'

 
function App() {
  return (
    <>
      <Header />
      <div className="pt-24"> {/* Espaço para o header fixo */}
        <Banner />
      </div>
    </>
  )
}

export default App
