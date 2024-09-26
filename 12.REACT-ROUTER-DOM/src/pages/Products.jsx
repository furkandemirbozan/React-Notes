import React from 'react'
import Product from '../components/Product'

const products = [
    { id: 1, name: 'Samsung S21', price: 2000 },
    { id: 2, name: 'Samsung S20', price: 1500 },
    { id: 3, name: 'Samsung S9', price: 800 }
]

function Products() {
    return (
        <div>
            {
                products && products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products