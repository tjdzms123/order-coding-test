import React from 'react';
import {
  StCountBox,
  StFooterBox,
  StOrderBtn,
} from '../styles/OrderFooter.styled';

function OrderFooter() {
  return (
    <StFooterBox>
      <StCountBox>
        <p>총 수량 : 0개</p>
        <p>총 가격 : 0원</p>
      </StCountBox>
      <div>
        <StOrderBtn>주문하기</StOrderBtn>
      </div>
    </StFooterBox>
  );
}

export default OrderFooter;
