import { BrowserRouter, Routes, Route } from "react-router-dom"
import UsersPage from "./pages/UsersPage"
import HomePage from "./pages/HomePage"
import UserDetailsPage from './pages/UserDetailsPage'
import Navbar from "./components/Navbar"

import './app.css'
import { useEffect, useState } from "react"

import { user } from "./pages/UserDetailsPage"

function App() {

  const [users, setUsers] = useState<user[]>([])

  const usersFetch = async()=>{
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
        if (!response.ok) {
          throw new Error
        }
      const data = await response.json()
      setUsers(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    usersFetch()
  },[])

  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path='/users' element={<UsersPage users={users}></UsersPage>}></Route>
          <Route path="/users/:id" element={<UserDetailsPage users={users}></UserDetailsPage>}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
