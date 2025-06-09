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
import Login from './pages/Login'



function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    AOS.init({duration:800,once:false,mirror:true })
  },[])

  return (
    <>
    <h1>Hello</h1>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/help' element={<CustomerCare/>} ></Route>
        <Route path='/login' element={<Login />}></Route>
        
              </Routes>
    </>
  )
}

export default App
