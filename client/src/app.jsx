import './App.css';
import {Route, Switch } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import LogIn from './pages/login';
import SignUp from './pages/signup';
import UrlPage from './pages/urlpage';


function App() {
  return (
    <>
    <Switch>
     <Route exact path="/">
     <LandingPage />
   </Route>
  
   <Route path="/UrlPage">
     <UrlPage />
   </Route>
  
   <Route path="/Login">
      <LogIn />
   </Route>
   
   <Route path="/SignUp">
      <SignUp />
   </Route>
   </Switch>
   </>
  );
}

export default App;
