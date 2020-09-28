import React, { useState, useContext } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../Context/UserContext';

const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
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
    axios.post('http://localhost:5000/api/auth/login', userData)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data.token);
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err)
      })
  }

  return(
    <section className="log-form">
      <h1>Log In</h1>
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
        <section className='form-footer'>
          <Link to='/register'>Register Instead</Link>
          <button type="submit">Submit</button>
        </section>
      </form>
    </section>
  );
}

export default Login;