import Table from 'rc-table'
import React, { useEffect, useState } from 'react'
import api from '../api/index'
import NavBar from '../components/NavBar'

const About = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get('')
      setUsers(response.data)
      console.log(response.data)
    }

    getUsers()
  }, [])

  const columns = [
    {
      title: 'Username',
      dataIndex: 'login',
      key: 'login',
      width: 50,
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar_url',
      key: 'avatar_url',
      width: 50,
      render: (children) => <img src={children} alt='avatar' width='100px' />,
    },
  ]

  const data = users

  return (
    <>
      <NavBar />
      <h1>Utilizando componente de tabela pronto</h1>
      <Table columns={columns} data={data} />
    </>
  )
}

export default About
