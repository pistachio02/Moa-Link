import React, { memo } from 'react';
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import * as BiIcons from 'react-icons/bi'
import * as SiIcons from 'react-icons/si'
import * as GiIcons from 'react-icons/gi'


export const UrlNavbar= memo(() => {
  return (
    

    
    <Sidebar>
        {/* 여기는 sidebar 입니다 ! 딱히 수정 할 부분은 없을 것 같지만 혹여나 있다면 말씀해주세요 ! ㅎㅎ */}
      <MenuList>
        <MenuItem>
          <Link href="/UrlPage">
            <IconContainer>
            <AiIcons.AiFillHome />
            </IconContainer>
            <Label>전체보기</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="/UrlPage/games">
            <IconContainer>
            <BiIcons.BiGame/>
            </IconContainer>
            <Label>Games</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="/UrlPage/shopping">
            <IconContainer>
             <AiIcons.AiOutlineShopping/>
            </IconContainer>
            <Label>Shopping</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="/UrlPage/works">
            <IconContainer>
            <SiIcons.SiCountingworkspro/>
            </IconContainer>
            <Label>Works</Label>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/UrlPage/music">
            <IconContainer>
            <GiIcons.GiMusicalNotes/>
            </IconContainer>
            <Label>Music</Label>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/UrlPage/etc">
            <IconContainer>
            <BiIcons.BiDotsHorizontalRounded/>
            </IconContainer>
            <Label>Etc</Label>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/UrlPage/private">
            <IconContainer>
            <AiIcons.AiFillLock/>
            </IconContainer>
            <Label>Private</Label>
          </Link>
        </MenuItem>
      </MenuList>
    </Sidebar>
  );
});

const Sidebar = styled.div`
  position: absolute;
  width: 60px;
  height: 100%;
  background: #1E6FD9;
  transition: 0.5s;
  overflow: hidden;
  &:hover {
    width: 240px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
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


const Link = styled.a`
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