import { useEffect, useState } from 'react'
import { Routes,Route  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CustomerCare from './pages/CustomerCare'


function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    AOS.init({duration:800,once:false,mirror:true })
  },[])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/help' element={<CustomerCare/>} ></Route>
      </Routes>
    </>
  )
}

export default App
