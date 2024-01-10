import React from 'react';
import { StHeaderBox } from '../styles/OrderHeader.styled';
import { StLogo } from '../styles/Home.styled';

function OrderHeader() {
  return (
    <StHeaderBox>
      <StLogo
        src="/img/logo-black.png"
        alt="반장창고"
        width={'94px'}
        height={'32px'}
        style={{ marginLeft: '10px' }}
      />
    </StHeaderBox>
  );
}

export default OrderHeader;
