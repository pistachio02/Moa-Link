import './App.css';
import React,{useEffect, useState} from 'react';
import {Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import UrlPage from './pages/UrlPage';
import Loading from './components/loading/Loading'

function App() {

  const [ready, setReady] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setReady(false)
    },3000)
  },[])


  return ready?<Loading />:(
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
