import { useState } from 'react'
import './App.css'

function App() {



  //değişken tanımlıyoruz normlade dimi 

  const [firstName, setFirstname] = useState("Furkan")
  const [lasttName, setLasttname] = useState("Demirbozan")

  const [names, setNames] = useState(["Furkan", "Sahra", "Yamaç", "Zeyno"])

  const handleChange = () => {
    setLasttname("Öztürk")
    console.log(names)
  }
  return (
    <>
      <div>
        {`isim : ${firstName} Soy isim : ${lasttName}`}
      </div>

      <div>
        <button onClick={() => { setFirstname("Sahra") }}>Ad Değiştir</button>{/*Butona bastığımda  setFirstname state ine bu değer atanacak*/}

        <button onClick={handleChange}>Soyad  Değiştir</button>{/*Butona bastığımda  handleChange fonsksiyonu çalışacak ve oradada setLasttname state i değişecek*/}
      </div>

    </>
  )
}

export default App
