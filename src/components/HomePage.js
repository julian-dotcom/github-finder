import React from 'react'
import FormSearch from './FormSearch';
import UserCard from './UserCard';
import axios from 'axios';
import { useState, useEffect } from 'react'

const HomePage = () => {
    const [githubUser, setGithubUser] = useState('')
    const [search, setSearch] = useState('github')
  
    const getUser = async (search) => {
      const response = await axios.get(`https://api.github.com/users/${search}`)
      setGithubUser(response.data)
    }
  
    useEffect(() => {
      getUser(search)
      console.log(githubUser)
    }, [search])
    return (
      <div>
        <FormSearch setSearch={setSearch} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <UserCard githubUser={githubUser} />
        </div>
    </div>
    )
}

export default HomePage
