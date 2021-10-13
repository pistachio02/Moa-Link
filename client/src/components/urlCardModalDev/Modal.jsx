import { useState, useEffect } from 'react';
// import { useParams,  } from 'react-router-dom';
import React from 'react';
import * as BsIcons from 'react-icons/bs'
import logo from '../../img/moalink.png'
import {ShortWrapper, TextArea, TextInputArea, TextAreaWrap, ButtonWrap,  CancleButton, SubmitButton, ModalBackdrop, ModalContainer, ModalView, Select} from '../style/Styled'
import axios from 'axios';
import { isEmpty } from './IsEmpty';

const selectList = ["카테고리를 설정해 주세요","All", "games", "shopping", "works", "music", "etc", "private"]


export const Modal = ({isOpen, setIsOpen, openModalHandler}) => {
 

  
//   const histroy = useHistory();
  const [link, setLink] = useState('')
  const [isTitle, setIsTitle] = useState('')
  const [isDes, setIsDes] = useState('')
  const [isSelected, setIsSelected] = useState("")
//   const {id} = useParams();

  const handleSelect = (e) => {
    setIsSelected(e.target.value);
  };

  const submitForm = async (e) =>{
    e.preventDefault()

    if(isEmpty(isTitle)){
      return alert('제목을 입력해주세요')
    }
    if(isEmpty(isDes)){
      return alert('내용을 입력해주세요')
    }
    try {
      await axios.post('https://localhost:4000/addurl',{
        title : isTitle,
        description : isDes,
        url : link,
        category : isSelected,
      })
      if(isEmpty()){
        alert('등록되었습니다.');
        openModalHandler()
      }

    } catch (err) {
      console.log(err);
    }

  }
const changeTitle = (e) =>{
    setIsTitle(e.target.value)
  }

  const changeDesc = (e) =>{
    setIsDes(e.target.value)
  }

    
    const handleSubmit = (e) => {
     
    }



  return (
    <div>
      <ModalContainer>
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <BsIcons.BsArrowLeft onClick={openModalHandler} className='cancle-arrow'/>
            <img src = {logo} alt = "logo"/>
            <TextAreaWrap>
            <form onChange = {(e) => handleSubmit(e)}  style = {{display: 'flex', flexDirection: 'column'}}>  
          <TextInputArea placeholder = "URL을 입력해주세요" value={link}  onChange= {(e) => {setLink(e.target.value)}}></TextInputArea>
            </form>
            <ShortWrapper>
    
              {/* onClick = {() => window.open(`http://${short}`, '_blank')} */}
    
            </ShortWrapper>
                <TextInputArea placeholder = "Title을 입력해주세요" value = {isTitle} onChange = {changeTitle} ></TextInputArea>
                <Select value = {isSelected} onChange = {handleSelect} >
                {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                      {console.log(isSelected)}
                 </option>
                ))}
                </Select>
                <TextArea placeholder= 'URL 상세 정보를 입력해 주세요' value = {isDes} onChange = {changeDesc}></TextArea>
            </TextAreaWrap>
            <ButtonWrap>
            <CancleButton onClick={openModalHandler}>
               Cancle
            </CancleButton>
            <SubmitButton onClick = {submitForm}>
               Submit
            </SubmitButton>
            </ButtonWrap>

          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </div>
  );
};