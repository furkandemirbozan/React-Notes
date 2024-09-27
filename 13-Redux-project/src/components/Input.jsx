import React from 'react'

function Input({ value, placeholder, type, id, name, onChange }) {
    return (
        <input className='h-10 w-full border rounded-md p-2 outline-none mt-3' placeholder={placeholder} type={type} id={id} name={name} value={value} onChange={onChange} />
    )
}

export default Input