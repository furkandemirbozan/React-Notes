import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRotateRight } from "react-icons/fa6";
import axios from 'axios'

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_OUVTUpw8jHZ4D4O3WJvzuKMciKRF6902mxBEwuGb"


function Currency() {
    const [amount, setAmount] = useState()
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const exchange = async () => {

        const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (res.data.data[toCurrency] * amount).toFixed(2);
        setResult(result)

    }
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', color: 'blanchedalmond', backgroundColor: 'green', width: '100%', textAlign: 'center' }}>
                <h2>DÖVİZ KURU DÖNÜŞTÜRME</h2>
            </div>
            <div style={{ marginTop: '25px' }}>

                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className='amount'
                />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowRotateRight style={{ fontSize: '25px', marginRight: "10px", marginTop: '10px' }} />

                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>
            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Çevir</button>
            </div>

        </div>
    )
}

export default Currency