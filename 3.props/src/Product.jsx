import React from 'react'

function Product({ productName, price }) {
    //function Product(props) {   //Yukarıda direkt distract edilmiş bir şekilde de yazabilirim
    //const { productName, price } = props  //productName :'Air Jorda' price: 8500   Yani aşağıdaki divin içerisine props.productname yazmaktan kurtuluyorum
    return (
        <div>
            <div>
                Ürün bilgileri
            </div>
            <div>
                <div> İsim : {productName}</div>
                <div> Fiyat : {price} TL</div>
            </div>


        </div>
    )
}

export default Product