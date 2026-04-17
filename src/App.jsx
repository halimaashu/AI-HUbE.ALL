import { Suspense, useState } from 'react'

import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Models from './component/Models'
import Tabs from './component/Tabs'
import Cart from './component/Cart'
import { ToastContainer } from 'react-toastify'
const getModels=async ()=>{
    try{
        const res=await fetch("/models.json")
    return res.json()
    }catch(e){
        console.log(e)
    }
}


function App() {
const models=getModels();
const [tab,setTab]=useState("models")
const [cart,setCart]=useState([])
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Tabs  setTab={setTab} cart={cart} ></Tabs>
   <Suspense fallback={<div className='text-center flex justify-center items-center py-32'><span className="loading loading-spinner text-neutral text-9xl text-center py-[100px] flex flex-col justify-center items-center"></span></div>}>
    {tab==="models" && <Models models={models} cart={cart} setCart={setCart}></Models> ||<Cart cart={cart} setCart={setCart}></Cart>}

   </Suspense>
    <Footer></Footer>

<ToastContainer />
    
    </>
  )
}

export default App
