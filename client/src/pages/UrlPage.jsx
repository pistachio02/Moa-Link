import React from 'react'
import Header from '../components/common/header/Header'
import UrlNavbar from '../components/urlNavbar/UrlNavbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllUrl from '../components/urlComponents/AllUrl'
import Games from '../components/urlComponents/Games'
import Works from '../components/urlComponents/Works'
import Private from '../components/urlComponents/Private'
import Music from '../components/urlComponents/Music'
import Shopping from '../components/urlComponents/Shopping'
import Etc from '../components/urlComponents/Etc'
import './UrlPage.css'

function UrlPage({ userinfo, handleLogout }) {
    return (
        <div className ='total'>
            <Header userinfo={userinfo} handleLogout={handleLogout} />
            <Router>
      <UrlNavbar/>
      <div className = "switch">
      <Switch >
        <Route path='/UrlPage' exact component={AllUrl} />
        <Route path='/UrlPage/games' exact component={Games} />
        <Route path='/UrlPage/shopping' exact component={Shopping} />
        <Route path='/UrlPage/works' exact component={Works} />
        <Route path='/UrlPage/music' exact component={Music} />
        <Route path='/UrlPage/etc' exact component={Etc} />
        <Route path='/UrlPage/private' exact component={Private} />
      </Switch>
      </div>
    </Router>
        </div>
    )
}

export default UrlPage