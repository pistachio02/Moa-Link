import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../login/LoginAndSign.css'

function LoginModal({handleResponseSuccess}) {
  
    const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
    });
  
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputValue = (key) => (e) => {
      setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };
  
    const handleLogin = () => {
    
      const url = 'https://localhost:4000/login'
      const { email, password } = loginInfo
  
      if(!email || !password) {
        return setErrorMessage('이메일과 비밀번호를 입력하세요!')
      }
  
      axios
        .post(url,
          {email, password},
          {headers:{"Content-Tpye":"application/json",'Access-Control-Allow-Origin': '*'}}
        )
        .then(()=>{
          handleResponseSuccess()
        })
        .catch((err)=>console.log(err))
    };
    return (
      <div>
        <section className="signin">
          <div className="signin__card">
          <h2>
            MoaLink에 오신것을 환영합니다!
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
           
              <input 
              type='email' 
              onChange={handleInputValue('email')} 
              placeholder="이메일을 입력해주세요" 
              id="useremail" />
              <input
                type='password'
                onChange={handleInputValue('password')}
                placeholder="비밀번호를 입력해주세요" 
                className="password"
              />
             <button id='btn-sigup' 
             type='button' 
             
             onClick={handleLogin}>
              로그인
            </button>
            <p className='alert-box'>{errorMessage}</p>
            </form>
            <div className="actions">
              <Link to='/signup'>회원가입</Link>
              <Link to='/'>닫기</Link>
            </div>
          </div>
          </section>
      </div>
    );
  }

export default LoginModal
