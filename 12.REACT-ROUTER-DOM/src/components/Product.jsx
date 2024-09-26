import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, name, price } = product
    const navigate = useNavigate();
    return (
        <div style={{ marginBottom: "40px", backgroundColor: "lightgray" }}>

            <div>Ürün detayı</div>,
            <h3>İSİM : {name}</h3>
            <h3>FİYAT: {price}</h3>
            <button onClick={() => navigate(`/product-details/${id}`)}>Detay</button>
        </div>
    )
}

export default Product