import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/CounterSlice';
//Yani kısaca Slice ın içerisindeki state e arişmek için useSellector kullanılır fonksiyona erişmek için ise useDispatch kullanılır 

function App() {

  //fonkisyon yakalamak için dispatch kullanıyorum 
  const dispatch = useDispatch();

  //useSellector benim store mi çekiyor ve store min içerisinde counter diye bir slice ım var onu çeker misin demek istiyorum aslında 
  const { value } = useSelector((store) => store.counter)
  console.log(value)

  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div>
  )
}

export default App
