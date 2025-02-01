import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider';

export const Login = () => {
  const initVals = {username: '', password:''};
  const [formData, setFormData] = useState(initVals);
  const {loginFunc} = useContext(AuthContext);

  const handleInput = (e) => {
    const {name, value} = e.target
    console.log(name, value);
    
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    loginFunc(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter username' name='username' onChange={handleInput}/>
      <input type="password" placeholder='Enter password' name='password' onChange={handleInput}/>
      <input type="submit" value='Login' />
    </form>
  )
}
