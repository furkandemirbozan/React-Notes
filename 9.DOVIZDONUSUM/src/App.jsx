import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Currency />
    </div>
  )
}

export default App
