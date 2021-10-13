import React from 'react'
import '../css/LandingStyle.css'

function LandingPart2() {
    return (
        <div>
          <div className="part2-background">
        <div className="part2-container">
            <div className="part2-main-text">
                <h3 className="part2-main-title">Moalink core service manages URLs.</h3>
            </div>
            <div className="part2-icon-background">
                <div className="part2-icon-container">
                    <div className="part2-img-icon">
                        <i className="fas fa-share i-one"></i>
                        <h3 className="part2-sub-text">Share</h3>
                     
                    </div>
                    <div className="part2-img-icon">
                    <i className="fas fa-sort-amount-down i-one"></i>
                        <h3 className="part2-sub-text">Shorten Url</h3>
                    
                    </div>
                    <div className="part2-img-icon">
                    <i className="fas fa-download i-one"></i>
                        <h3 className="part2-sub-text">Management</h3>
                     
                    </div>
                </div>
            </div>
           
        </div>
    </div>
        </div>
    )
}

export default LandingPart2

