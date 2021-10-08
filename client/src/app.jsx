import './App.css';
import {Route, Switch } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import UrlPage from './pages/Urlpage';


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
