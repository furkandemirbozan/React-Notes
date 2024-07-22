import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLasttname] = useState("")

  useEffect(() => {
    console.log("Her zaman Çalisir")
  })
  useEffect(() => {
    console.log("Array koyduktan sonra yalnızca sayfa yüklenirken çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve firstName state i değiştiğinde çalışır")
  }, [firstName])

  return (
    <div>
      <div>
        <button onClick={() => setFirstname("Furkan")} >Adi değiştir</button>
      </div>
    </div>
  )
}

export default App
