import React, { useState, useEffect } from 'react'
import {TextArea, TextInputArea, TextAreaWrap, ButtonWrap,  CancleButton, SubmitButton, ModalBackdrop, ModalContainer, ModalView,Card, PrivateModalView, PrivateTextInputArea, PrivateUrlPlusButton, UrlComponentWrap } from '../style/Styled'
import * as BsIcons from 'react-icons/bs'
import logo from '../../img/moalink.png'
import * as BiIcons from 'react-icons/bi'
import PlusButton from '../urlCardModalDev/PlusButton'
import { useParams } from 'react-router';
import axios from 'axios';
import * as AiIcons from 'react-icons/ai'

function Private() {
    const [link, setLink] = useState('')
    const [isTitle, setIsTitle] = useState('')
    const [isDes, setIsDes] = useState('')
    const [edit, setEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [urlList, setUrlList] =useState([]);
    const {id, categoryId} = useParams()
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
  
  
    const editCard = () => {
      setEdit(!edit)
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
              <BiIcons.BiPencil className = 'pencil' onClick = {editCard}/>
              </div>
              <div>{el.title}</div>
                  <div>{el.description}</div>
                  <a href = {el.url}>Url</a>

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
      {edit && 
      <ModalContainer>
        <ModalBackdrop onClick = {editCard}>
          <ModalView  onClick={(e) => e.stopPropagation()}>
          <BsIcons.BsArrowLeft onClick={editCard} className='cancle-arrow'/>
            <img src = {logo} alt = "logo"/>
            <TextAreaWrap>
           
          <TextInputArea placeholder = "URL을 입력해주세요" value={link}  onChange= {(e) => {setLink(e.target.value)}}></TextInputArea>
           
                <TextInputArea placeholder = "Title을 입력해주세요" value = {isTitle} onChange = {(e) => {setIsTitle(e.target.value)}} ></TextInputArea>
                <TextArea placeholder= 'URL 상세 정보를 입력해 주세요' value = {isDes} onChange = {(e) => {setIsDes(e.target.value)}}></TextArea>
            </TextAreaWrap>
            <ButtonWrap>
            <CancleButton onClick={editCard}>
               Cancle
            </CancleButton>
            <SubmitButton onClick = {console.log()}>
               Submit
            </SubmitButton>
            </ButtonWrap>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
      }
      
  </div>
    )
}

export default Private