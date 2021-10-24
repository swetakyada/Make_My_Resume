import './App.css';
import React, { useState } from 'react';
import UserForm from './components/home/UserForm';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Defaultpage from './components/default/default';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [ user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Defaultpage /></Route>
          <Route path="/login"><Login setLoginUser={setLoginUser} /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/home">
            {
              user && user._id ? <UserForm setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
