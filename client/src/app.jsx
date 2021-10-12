import './App.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LogIn from './pages/Login';
import SignUp from './pages/Signup';
import UrlPage from './pages/UrlPage';
import Loading from './components/loading/Loading'

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);

  const [ready, setReady] = useState(true)

  const history = useHistory();


  const isAuthenticated = () => {
    axios
       .get('https://localhost:4000/auth')
       .then((res)=>{
         setIsLogin(true);
         setUserinfo(res.data.data.userInfo)
         history.push('/');
       })
 };

 const handleLogout = () => {
   axios
     .post('https://localhost:4000/logout')
     .then(() => {
       setUserinfo(null);
       setIsLogin(false);
       history.push('/');
     });
 };

 const handleResponseSuccess = () => {
   isAuthenticated();
 };


  useEffect(()=>{
    setTimeout(()=>{
      setReady(false)
    },3000)
  },[])


  useEffect(() => {
    isAuthenticated();
  }, []);


  return ready?<Loading />:(
    <>
    <Switch>
     <Route exact path="/">
     <LandingPage 
     userinfo={userinfo} 
     handleLogout={handleLogout}
     />
   </Route>
  
   <Route path="/UrlPage">
     <UrlPage 
     userinfo={userinfo} 
     handleLogout={handleLogout}
     />
   </Route>
  
   <Route path="/Login">
      <LogIn 
      isLogin={isLogin}
      handleResponseSuccess={handleResponseSuccess}
      />
   </Route>
   
   <Route path="/SignUp">
      <SignUp 
      isLogin={isLogin}
      />
   </Route>
   </Switch>
   </>
  );
}

export default App;
