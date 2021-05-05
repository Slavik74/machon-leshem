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

function App() {
  return (
    <>
      <MainNavbar/>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/mivdak"><MivdakPage/></Route>
          <Route exact path="/online"><OnlinePage/></Route>
          <Route path="/"><NotFoundPage/></Route>
        </Switch>
      </HashRouter>
    </>
    

  );
}

export default App;
