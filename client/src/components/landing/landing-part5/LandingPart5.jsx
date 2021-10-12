import React from 'react'
import '../css/LandingStyle.css'
import profile1 from '../../../img/profile_1.png'
import profile2 from '../../../img/profile_2.png'
import profile3 from '../../../img/profile_3.png'
import profile4 from '../../../img/profile_4.png'


function LandingPart5() {
    return (
        <div>
        <div className="part5-background">
      <div className="part5-container">
          <div className="part5-main-text">
              <h3 className="part5-main-title">Contact the Moa Link team.</h3>   
          </div>
          <div className="part5-icon-background">
              <div className="part5-icon-container">
                  <div className="part5-img-icon">
                      <img src={profile1} alt="profile_1"/>
                      <h3 className="part5-name">이장희</h3>
                      <p>프론트 엔드</p>
                      <div className="part5-icon-size">
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://github.com/leejanghe"><i className="fab fa-github"></i> </a> 
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://joy-codeing-lee.tistory.com/"><i className="fab fa-blogger"></i> </a>
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="#"><i className="far fa-envelope"></i></a>
                      </div>
                  </div>
                  <div className="part5-img-icon">
                      <img src={profile2} alt="profile_2"/>
                      <h3>이건우</h3>
                      <p>프론트 엔드</p>
                      <div className="part5-icon-size">
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://github.com/Geonwoo-Lee"><i className="fab fa-github"></i> </a> 
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://velog.io/@lee_geon_woo4336"><i className="fab fa-blogger"></i> </a>
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="#"><i className="far fa-envelope"></i></a>
                      </div>
                  </div>
                  <div className="part5-img-icon">
                      <img src={profile3} alt="profile_3"/>
                      <h3>김동우</h3>
                      <p>프론트 엔드</p>
                      <div className="part5-icon-size">
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://github.com/off-dngw"><i className="fab fa-github"></i> </a> 
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://velog.io/@off-dngw"><i className="fab fa-blogger"></i> </a>
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="#"><i className="far fa-envelope"></i></a>
                      </div>
                  </div>
                  <div className="part5-img-icon">
                      <img src={profile4} alt="profile_4"/>
                      <h3>정종화</h3>
                      <p>백 엔드</p>
                      <div className="part5-icon-size">
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://github.com/pistachio02"><i className="fab fa-github"></i> </a> 
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="https://velog.io/@pistachio02"><i className="fab fa-blogger"></i> </a>
                      <a className="part5-link" rel="noopener noreferrer" target='_blank' href="#"><i className="far fa-envelope"></i></a>
                      </div>
                  </div>
              </div>
          </div>
         
      </div>
  </div>
      </div>
    )
}

export default LandingPart5
