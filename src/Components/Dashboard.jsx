import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../Context/UserContext'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';

const Dashboard = () => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();
  const admin = false;

  useEffect(() => {
    axiosWithAuth().get('/isAdmin')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  })

  return(
    <>
      {user ?
        admin ?
          <h1>You're an admin</h1>
          :
          <h1>You're not an admin</h1>
        :
        history.push('/login')
      }
    </>
  )
}

export default Dashboard;