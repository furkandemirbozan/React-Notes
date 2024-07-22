import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"


const BASE_URL = "http://localhost:3005"

function App() {
  //Get
  const getAllUsers = async () => {
    const res = await axios.get(BASE_URL + "/users")
    console.log(res.data)
  }

  const getUserById = async (userId) => {
    //Get
    const res = await axios.get(BASE_URL + "/users/" + userId)
    console.log(res.data)
  }

  const createUser = async (newUser) => {
    //Post
    const res = await axios.post(`${BASE_URL}/users`, newUser)
    console.log(res.data)
  }


  const updateUser = async (userId, updatedUser) => {
    //PUT 
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
  }

  const deleteUserById = async (userId) => {
    //Delete
    const deletedRes = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedRes)
  }


  useEffect(() => {
    //getAllUsers()
    //getUserById(2)
    // const newUser = {
    //   "username": "yamac",
    //   "password": "yamac",

    // }
    // createUser(newUser)


    // updateUser("4e50", {
    //   "username": "zeynoş",
    //   "password": "zeynoş"
    // })
    //deleteUserById("4e50")
  }, [])

  return (
    <>
      FURKAN
    </>
  )
}

export default App
