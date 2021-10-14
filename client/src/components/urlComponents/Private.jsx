import React, { useState } from 'react'
import {Card, PrivateModalView, PrivateTextInputArea, PrivateUrlPlusButton, UrlComponentWrap } from '../style/Styled'
import * as BiIcons from 'react-icons/bi'
import axios from 'axios';
import * as AiIcons from 'react-icons/ai'

function Private() {
    const [urlList, setUrlList] =useState([]);
    const [isPassword, setIsPassword] = useState('')
    const [isAccept, setIsAccept] = useState(false)
  
    const passWordHandler = (e) => {
        setIsPassword(e.target.value)
      }

    const trueOrFalse= async () => {
        try {
            const response = await axios.post('https://localhost:4000/private', { userPassword: isPassword })
            const url = response.data.data;
            const isValid = response.data.isValid;
            setUrlList(url);
            console.log(response)
            if(isValid === "true") {
                setIsAccept(true);
            }
        } catch (error) {
            throw error;
        }
    }

    const deleteHandler = async (id) => {
        try {
            await axios.post('https://localhost:4000/deleteurl', { id : id })
            .then(async () => {
              const response = await axios.post('https://localhost:4000/private', { userPassword: isPassword })
            const url = response.data.data;
            setUrlList(url);
            })
        } catch (error) {
            throw error;
        }
    }
  


    return (
        <div>
            { isAccept ?    <UrlComponentWrap>
                {
            urlList !== undefined &&

            urlList.map((el) => (

              <Card>
          <div className = 'icons'>
              <BiIcons.BiTrash className = 'trash' key={el.id} onClick = {() => deleteHandler(el.id)}/>
              </div>
              <div className = 'title'>{el.title}</div>
                  <div className = 'des'>{el.description}</div>
                  <div className = 'url' onClick = {() => window.open(`${el.url}`, '_blank')}>Move to Url !</div>
                 </Card>
                ))}
            
        </UrlComponentWrap>
        :
        <div>
         <PrivateModalView>
             <AiIcons.AiFillLock className = "lock-icon"/>
             <div className = 'private'>
             <PrivateTextInputArea placeholder = "사용자의 비밀번호를 입력해주세요" value = {isPassword} onChange = {passWordHandler} ></PrivateTextInputArea>
        
             <PrivateUrlPlusButton onClick={trueOrFalse}>
               확인
             </PrivateUrlPlusButton>
             </div>
        </PrivateModalView>
          </div>
        
          }
    
      
  </div>
    )
}

export default Private