import React from 'react';
import { StGoOrderBtn, StHome, StLogo } from '../styles/Home.styled';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navi = useNavigate();
  return (
    <StHome>
      <div>
        <StLogo
          src="/img/logo-black.png"
          alt="반장창고"
        />
      </div>
      <div>
        <StGoOrderBtn onClick={() => navi('/order')}>
          주문하러 가기
        </StGoOrderBtn>
      </div>
    </StHome>
  );
}

export default Home;
