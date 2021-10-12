import React from 'react'
import Header from '../components/common/header/Header'
import UrlNavbar from '../components/urlNavbar/UrlNavbar'

function UrlPage({userinfo, handleLogout}) {
    return (
        <div>
            <Header userinfo={userinfo} handleLogout={handleLogout}/>
            <UrlNavbar/>
        </div>
    )
}

export default UrlPage