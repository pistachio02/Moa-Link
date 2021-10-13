import React from 'react'
import styled from 'styled-components';

const Container1 = styled.div`
  width: 1048px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin: auto;
  height: 580px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 30px;
  transition: 0.5s;
  color: gray;
`;

const P = styled.p`
  margin: 0;
  font-size: 18px;
  transition: 0.5s;
  color: gray;
`;

const Card = styled.div`
  position: relative;
  width: 320px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(-100% + 4px);
    width: 100%;
    height: 100%;
    background: black;
    z-index: 1;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    ${Title} {
      color: white;
    }
    ${P} {
      color: white;
    }
  }
  &:hover::before {
    bottom: 0;
  }
  &:nth-child(1)::before {
    background: #1e008b;
  }
  &:nth-child(2)::before {
    background: orange;
  }
  &:nth-child(3)::before {
    background: #F55B9D;
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 2;
`;

const ReadMoreButton = styled.a`
  text-decoration: none;
  margin: 20px 0 0;
  font-size: 14px;
  display: inline-block;
  transition: 0.5s;
  background: white;
  color: gray;
  padding: 8px 12px;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
`;


function LandingPart3() {
    return (
        <div>
            <Container1>
      <Card>
        <Contents>
          <Title>Share your URL</Title>
          <P>
          You can manage frequently used websites and share URLs with people you know. Share the URL with your friends on Moalink!
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>

      <Card>
        <Contents>
          <Title>Shorten Url</Title>
          <P>
          Have you ever felt inconvenient to organize your URLs because they are long? Moalink also has a function to shorten URL addresses. Try shortening the URL length!
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>

      <Card>
        <Contents>
          <Title>Manage your URLs</Title>
          <P>
          Moalink manages URLs by category and lets you add any URL you want! Manage your URLs in Moalink!
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>

      
    </Container1>
        </div>
    )
}

export default LandingPart3
