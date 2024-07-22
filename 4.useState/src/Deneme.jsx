import React, { useState } from 'react'

function Deneme() {
    const [count, setCount] = useState(0);

    const arttir = () => {
        setCount(count + 1)
    }
    const azalt = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }
    return (
        <div>
            <div><button onClick={arttir}>Arttır</button></div>
            <div>{count}</div>
            <div><button onClick={azalt}>Azalt</button></div>
        </div>
    )
}

export default Deneme