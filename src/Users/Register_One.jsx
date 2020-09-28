import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../Context/UserContext';

const Register_One = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    discord_id: ''
  })
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const doSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', userData)
      .then(res => {
        history.push('/registered');
      })
      .catch(err => {
        const {message, error} = err;
        console.log(message);
        console.log(error);
      })
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

export default Register_One;