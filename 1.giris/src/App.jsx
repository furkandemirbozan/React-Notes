import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = "FURKAN"
  const lastName = "Demirbozan"
  let isimler = ["Furkan", "Sahra", "Yamac"]
  return (

    <>
      {
        isimler.map((isim, index) => {
          <div style={{ backgroundColor: "orange" }} key={index}>
            {isim}
          </div>
        })
      }
    </>

  )
}

export default App
