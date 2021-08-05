import React, { useEffect, useState } from 'react'
import api from '../api/index'
import NavBar from '../components/NavBar'
import MyTable from '../components/Table'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get('')
      setUsers(response.data)
      console.log(response.data)
    }

    getUsers()
  }, [])

  return (
    <>
      <NavBar />
      <h1>Utilizando meu própio componente de tabela</h1>
      <MyTable columns={['Username', 'Avatar']} data={users} />
    </>
  )
}

export default Home
