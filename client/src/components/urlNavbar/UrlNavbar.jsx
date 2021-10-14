import React, { memo,} from 'react';
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import * as BiIcons from 'react-icons/bi'
import * as SiIcons from 'react-icons/si'
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom'


export const UrlNavbar= memo(() => {
  return (
    

    
    <Sidebar>
        {/* 여기는 sidebar 입니다 ! 딱히 수정 할 부분은 없을 것 같지만 혹여나 있다면 말씀해주세요 ! ㅎㅎ */}
      <MenuList>

        <Link to = "/UrlPage" className= "link-router">
        <MenuItem>
          <LinkTo>
            <IconContainer>
            <AiIcons.AiFillHome />
            </IconContainer>
            <Label>전체보기</Label>
          </LinkTo>
        </MenuItem>
        </Link>
        
        <Link to = "/UrlPage/games" className= "link-router">
        <MenuItem>
          <LinkTo >
            <IconContainer>
            <BiIcons.BiGame/>
            </IconContainer>
            <Label>Games</Label>
          </LinkTo>
        </MenuItem>
          
        </Link>
        
        <Link to = "/UrlPage/shopping" className= "link-router">
        <MenuItem>
          <LinkTo>
            <IconContainer>
             <AiIcons.AiOutlineShopping/>
            </IconContainer>
            <Label>Shopping</Label>
          </LinkTo>
        </MenuItem>
         </Link>
        
         <Link to = "/UrlPage/works" className= "link-router">
         <MenuItem>
          <LinkTo>
            <IconContainer>
            <SiIcons.SiCountingworkspro/>
            </IconContainer>
            <Label>Works</Label>
          </LinkTo>
        </MenuItem>
           </Link>

          <Link to = "/UrlPage/music" className= "link-router">
           <MenuItem>
          <LinkTo >
            <IconContainer>
            <GiIcons.GiMusicalNotes/>
            </IconContainer>
            <Label>Music</Label>
          </LinkTo>
           </MenuItem>
          </Link>
       
        <Link to = "/UrlPage/etc" className= "link-router">
          <MenuItem>
            <LinkTo>
              <IconContainer>
              <BiIcons.BiDotsHorizontalRounded/>
              </IconContainer>
              <Label>Etc</Label>
            </LinkTo>
            </MenuItem>
         </Link>
        
        
        <Link to = "/UrlPage/private" className= "link-router">
          <MenuItem>
           <LinkTo>
             <IconContainer>
              <AiIcons.AiFillLock/>
              </IconContainer>
              <Label>Private</Label>
             </LinkTo>
           </MenuItem>
      </Link>
        
      </MenuList>
    </Sidebar>
  );
});

const Sidebar = styled.div`
  position: absolute;
  width: 240px;
  height: 1000px;
  background: #0094FF;
  transition: 0.5s;
  /* overflow: hidden;
  text-decoration: none;
  &:hover {
    width: 240px;
  } */
`;

const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  text-decoration: none;
  .link-router{
    text-decoration: none;
  }
`;

const IconContainer = styled.span`
  position: relative;
  display: flex;
  line-height: 60px;
  text-align: center;
  height: 60px;
  min-width: 60px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;


const LinkTo = styled.a`
  text-decoration: none;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

`;

const MenuItem = styled.li`
  list-style: none;
  position: relative;
  width: 100%;

  &:hover {
    background: #90C4F8;
  }
`;

const Label = styled.span`
  position: relative;
  display: block;
  padding: 0 10px;
  line-height: 60px;
  text-align: start;
  width: 60px;
  white-space: nowrap;
  color: white;

`;

export default UrlNavbar
