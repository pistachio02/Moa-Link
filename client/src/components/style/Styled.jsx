import styled from 'styled-components'


export const ButtonWrapCard = styled.div`
margin-top: 50px;

`

export const CancleButtonCard = styled.button`
background-color: transparent;
padding: 10px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
margin-right: 20px;
&:hover{
     background-color:  #1E6FD9;
     color: #fff;
     transition-duration: 1s;
 }
`

export const SubmitButtonCard = styled.button`
background-color: transparent;
padding: 10px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
margin-left: 20px;
&:hover{
     background-color: #F26D6D;
     color: #fff;
     transition-duration: 1s;
 }

`

export const Card = styled.div`
  position: relative;
  width: 220px;
  height: 150px;
  perspective: 500px;
  border-radius: 5px;
  background-color: #0094FF;
  opacity: 90%;
  &:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
  }
  .title{
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .des{
    color: #fff;
    font-size: 11px;
    margin-left: 20px;
    margin-bottom: 30px;
    margin-right: 5px;
  }
  .url{
    margin-left: 20px;
    color: #fff;
    opacity: 70%;
    cursor: pointer;
    :hover{
      opacity: 100%;
    }
  }
  .icons{
    margin-left: 90%;
    cursor: pointer;
  }
  .trash{
    margin-top: 30%;
    color: #fff;
  }

`;


export const CardModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 350px;
    height: 250px;
   
    .header{
      font-size: 20px;
      margin-top: 40px;
    }
    .message{
      font-size: 15px;
      margin-top: 20px;
    }
    
`;

export const Select = styled.select`
width: 50%;
height: 35px;
background: white;
color: gray;
padding-left: 5px;
font-size: 14px;
border: none;
margin-left: 9%;
margin-top: 10px;

option {
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
`;

export const UrlComponentWrap = styled.div`
display: grid;
row-gap: 20px;
grid-template-columns: 1fr 1fr 1.5fr;
`
export const UrlAll = styled.div`
margin-bottom: 20px;
`


export const ShortWrapper = styled.div`
margin-right: 50%;
margin-top: 20px;
`
export const TextArea = styled.textarea`
margin-top: 30px;
margin-left: 10%;
margin-right: 30%;
border-top: none;
border-left: none;
border-right: none;
height: 100px;
`
export const TextInputArea = styled.input `
margin-left: 10%;
margin-right: 30%;
border-top: none;
border-left: none;
border-right: none;
height: 40px;
border-bottom: {
    opacity: 20%;
};
`

export const TextAreaWrap = styled.div`
display: grid;
margin-top: 15px;
width: 900px;
 .cissors{
     margin-left: 80%;
     cursor: pointer;
     font-size: 25px;
 }
`

export const ButtonWrap = styled.div`
margin-top: 50px;
margin-left : 60%;
`

export const CancleButton = styled.button`
background-color: transparent;
padding: 10px;
margin-right: 30px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
&:hover{
     background-color: #F26D6D;
     color: #fff;
     transition-duration: 1s;
 }
`

export const SubmitButton = styled.button`
background-color: transparent;
padding: 10px;
margin-right: 50px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
&:hover{
     background-color: #1E6FD9;
     color: #fff;
     transition-duration: 1s;
 }

`


export const UrlPlusButton = styled.button`
    padding: 70px;
    width: 220px;
    opacity: 40%;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border-width: 1px;
    margin-right: 40%;

 &:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
}
`
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 700px;
    height: 500px;

   .cancle-arrow{
       font-size: 25px;
       font-weight: bold;
       margin-top: 1%;
       margin-right: 80%;
       cursor: pointer;
   }
    
`;

export const PrivateTextInputArea = styled.input.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  type: 'password',
}))`
margin-left: 142px;
border-top: none;
border-left: none;
border-right: none;
height: 35px;
width: 200px;
border-bottom: {
    opacity: 20%;
};
`

export const PrivateUrlPlusButton = styled.button`
    padding: 13px;
    width: 70px;
    opacity: 40%;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border-width: 1px;
    margin-left: 40px;

 &:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
}
`

export const PrivateModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #fff;
    width: 700px;
    height: 700px;

    .lock-icon{
      font-size: 500px;
      margin-left: 40px;
    }
`;