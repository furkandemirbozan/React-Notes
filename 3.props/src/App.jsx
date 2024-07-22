import { useState } from 'react'

import './App.css'
import Product from './Product'
import Container from './Container'

function App() {


  return (
    <>
      {/* <Product productName="Ayakkabi" price={3200} />
      <Product productName="Pantolon" price={950} />
      <Product productName={producttName} price={9550} /> */}
      <Container>
        <Product productName="Air Jordan" price={8500} />
      </Container>

    </>
  )
}

export default App
