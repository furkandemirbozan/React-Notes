import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getAllUser } from './redux/userSlice'

function UserList() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    return (
        <div>UserList</div>
    )
}

export default UserList