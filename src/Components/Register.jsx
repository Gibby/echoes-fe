import React, { useState, useContext } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {UserContext} from '../Context/UserContext';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    discord_id: ''
  })
  const {user, setUser} = useContext(UserContext);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const doSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
  }

  return(
<section className="log-form">
      <h1>Register</h1>
      <form onSubmit={doSubmit}>
        <label>
          Username:
          <input
            id="username"
            name="username"
            type="text"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          E-Mail:
          <input
            id="email"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Discord ID:
          <input
            id="discord_id"
            name="discord_id"
            type="text"
            value={userData.discord_id}
            onChange={handleChange}
          />
        </label>
        <section className='form-footer'>
          <Link to='/login'>Login Instead</Link>
          <button type="submit">Submit</button>
        </section>
      </form>
    </section>
  );
}

export default Register;