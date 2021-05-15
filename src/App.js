import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainNavbar from './components/MainNavbar/MainNavbar';
import MivdakPage from './Pages/MivdakPage/MivdakPage';
import OnlinePage from './Pages/OnlinePage/OnlinePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import UserModel from './model/UserModel';
import usersJSON from './data/users.json';
import { init } from 'emailjs-com';

function App() {


  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(null);

  const handleSignup = newUser => {
    setActiveUser(newUser) 
    setUsers(users.concat(newUser))
  }

  //emailjs initialization
  init("user_1Dk0HD2uoGBLJ3voaJ987");

  return (
    <>
      <MainNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/signup"><SignupPage activeUser={activeUser} users={users} onSignup={handleSignup}/></Route>
          <Route exact path="/mivdak"><MivdakPage/></Route>
          <Route exact path="/online"><OnlinePage activeUser={activeUser}/></Route>
          <Route path="/"><NotFoundPage/></Route>
        </Switch>
      </HashRouter>
    </>
    

  );
}

export default App;
