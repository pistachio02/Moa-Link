import React from 'react'
import LandingHome from '../components/landing/landing-Home/LandingHome'
import LoginModal from '../components/login/LoginModal'

function Login({isLogin, handleResponseSuccess}) {
    return (
        <div>
            <LandingHome />
            <LoginModal 
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
            />       
        </div>
    )
}

export default Login