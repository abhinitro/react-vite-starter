import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

const global = {
  name: "Abhilash",
  age: 30,
  city: "Bangalore"
}

function App() {

  return (
    <>
      <Footer myData={global} information={'String'}/>
    </>
  )
}

export default App
