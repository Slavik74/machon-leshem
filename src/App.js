import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (

    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
        </Switch>
      </HashRouter>
    </>
    

  );
}

export default App;
