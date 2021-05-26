import MyNavbar from './components/Navbar';
import FormSearch from './components/FormSearch';
import UserCard from './components/UserCard';
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


const App = () => {
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
    <div className="App">
      <MyNavbar />
      <FormSearch setSearch={setSearch} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <UserCard githubUser={githubUser} />
      </div>
    </div>
  );
}

export default App;
