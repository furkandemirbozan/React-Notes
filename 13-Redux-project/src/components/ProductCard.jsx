import React, { useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useNavigate } from 'react-router-dom';

function ProductCard({ dt }) {
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateFunc = () => {
        dispatch(modalFunc())
        setOpenEdit(false)
        navigate(`/?update=${dt.id}`)

        // dispatch(updateDataFunc(dt))
    }
    return (
        <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
            <img src={dt?.url} className='w-full h-full rounded-md' />
            <div className='absolute left-0 bg-indigo-600 text-white w-full px-2'>
                <div className=' font-semibold'>{dt.name}</div>
                <div className=' font-semibold'>{dt.price}$</div>
            </div>
            <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-2 right-2'>
                <HiDotsVertical size={24} className='absolute right-0 text-white' />
            </div>
            {
                openEdit && (
                    <div className='bg-black border-white text-white absolute top-10 right-5 p-2 text-sm'>
                        <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
                        <div onClick={updateFunc} className='cursor-pointer'>Düzenle</div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductCard