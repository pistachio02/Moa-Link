import React from 'react'
import '../css/LandingStyle.css'

function Footer() {
    return (
        <>
        <hr/>
        <div className="footer-background">
            <div className="footer-contanier">
                <div className="footer-text">
                © Copyright 2021 Moa Link Inc. All rights reserved
                </div>
                <div className="footer-grow"></div>
                <a className="footer-link" href="https://github.com/codestates/Moa-Link/wiki"> | Wiki</a>
                <a className="footer-link" href="https://github.com/codestates/Moa-Link/wiki"> | Clinet</a>
                <a className="footer-link" href="https://github.com/codestates/Moa-Link/wiki"> | Server</a>
            </div>
        </div>
        </>
    )
}

export default Footer
