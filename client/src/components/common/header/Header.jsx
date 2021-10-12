import React from 'react'
import {Link} from 'react-router-dom'
import '../header/Header.css'
import logo from '../../../img/moalink.png'
import axios from 'axios'


axios.defaults.withCredentials = true;


function Header({ userinfo, handleLogout }) {

    if(userinfo) {
        return (
          <div>
            <div className="header-background">
            <div className="header-container">
            <Link to="/" className="logo"><img src={logo} alt="logo"/></Link>
            <div className="grow"></div>
            <Link to="/UrlPage" className="header-flex-box url">Url Service</Link>
              <div className="header-flex-box">Wellcom! {userinfo.username} 님</div>
              <div className="header-flex-box-logout" onClick={handleLogout}>Logout</div>
            </div>
          </div>
          </div>
        );
      } else {
        return (
          <div>
              <div className="header-background">
            <div className="header-container">
            <Link to="/" className="logo"><img src={logo} alt="logo"/></Link>
            <div className="grow"></div>
            <Link to="/LogIn" className="header-flex-box">Log in</Link>
            <Link to="/SignUp" className="header-flex-box">Sign Up</Link>
            </div>
            </div>
          </div>
        )
      }
    }

export default Header