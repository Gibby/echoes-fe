import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './Components/Navbar';
import Login from './Users/Login';
import Register_One from './Users/Register_One';
import Register_Two from './Users/Register_Two';
import Landing from './Components/Landing';
import Industry from './Components/Industry/Industry';
import AdminPanel from './Components/Admin/AdminPanel';
import Dashboard from './Components/Dashboard';
import Missions from './Components/Missions';

import { UserContext } from './Context/UserContext'

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
