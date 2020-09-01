import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Components/Landing';
import Industry from './Components/Industry/Industry';
import AdminPanel from './Components/Admin/AdminPanel';

import { UserContext } from './Context/UserContext'

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Navbar />
        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/industry" component={Industry} />
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
