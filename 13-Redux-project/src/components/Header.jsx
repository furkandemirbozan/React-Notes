import React from 'react'
import { MdAddChart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';

function Header() {
    const dispatch = useDispatch()
    return (
        <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
            <div className='text-3xl'>React Uygulama</div>
            <div className='flex items-center gap-5'>
                <div className='text-black'>
                    <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className='h-10 rounded-lg' name="" id=''>
                        <option value="asc">Artan</option>
                        <option value="desc">Azalan</option>
                    </select>
                </div>
                <div>
                    <input onChange={e => dispatch(searchDataFunc(e.target.value))} className='h-10 rounded-lg px-4 text-black' type="text" placeholder='ara' />
                </div>
                <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer '>
                    <MdAddChart size={28} />
                </div>
            </div>
        </div>
    )
}

export default Header