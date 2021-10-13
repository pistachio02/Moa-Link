import React, { useState } from 'react'
import { Modal } from './Modal'
import { UrlComponentWrap } from '../style/Styled'
import { UrlPlusButton } from '../style/Styled'

function PlusButton() {
    const [isOpen, setIsOpen] = useState(true);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
    return (
       <UrlComponentWrap>
          {isOpen ? <UrlPlusButton onClick = {openModalHandler}>Url 추가 하기</UrlPlusButton> : 
          <div>
               <UrlPlusButton onClick = {openModalHandler}>Url 추가 하기</UrlPlusButton>
              <Modal openModalHandler = {openModalHandler} isOpen = {isOpen} setIsOpen = {setIsOpen}/>
          </div>
          }
       </UrlComponentWrap>
           
            
    )
}

export default PlusButton