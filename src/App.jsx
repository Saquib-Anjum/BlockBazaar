import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'
import Navbar from './components/Navbar.jsx/Navbar'
import {Routes,Route} from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <div className='app'>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/coin/:coinId' element={<Coin/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App
