import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../login/LoginAndSign.css'

axios.defaults.withCredentials = true;

function SignModel() {
  
    const [userinfo, setuserinfo] = useState({
      email: '',
      password: '',
      username: ''
    });
    
    const [errorMessage, setErrorMessage] = useState('');
    
    const history = useHistory();
    
    const handleInputValue = (key) => (e) => {
      setuserinfo({ ...userinfo, [key]: e.target.value });
    };
    
    const handleSignup = () => {
  
      const { email, password, username } = userinfo
  
      if(!email || !password || !username ) {
        return setErrorMessage('모든 항목은 필수입니다!')
      }
  
      axios
        .post(
          "https://localhost:4000/signup",
          { email, password ,username },
          { headers: { "Content-Type": "application/json" }}
        )
        .catch((err)=>console.log(err))
        alert('축하합니다! 회원가입이 완료되었습니다!')
      history.push("/Login");
  
    };
    return (
      <div>
        <section className="signin">
          <div className="signin__card">
          <h2>
              Moa Link 회원가입을 해주세요!
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            
              <input 
              className="email"
              type='email' 
              placeholder="이메일주소를 입력해주세요"
              onChange={handleInputValue('email')} 
              />
            
              <input
                className="passord"
                type='password'
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInputValue('password')}
              />
             
              
              <input 
              className="username"
              type='text' 
              placeholder="이름을 입력하세요"
              onChange={handleInputValue('username')} />
            
            <button
              className='btn-signup'
              type='button'
              onClick={handleSignup}
            >
              회원가입
            </button>
            <p className='alert-box' >{errorMessage}</p>
          </form>
          
            <div className="actions">
              <Link to='/login'>로그인</Link>
              <Link to='/'>닫기</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default SignModel
