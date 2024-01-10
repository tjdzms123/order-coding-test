import React from 'react';
import {
  StCountBox,
  StFooterBox,
  StOrderBtn,
} from '../styles/OrderFooter.styled';

function OrderFooter({ totalQuantity, totalPrice }) {
  
  return (
    <StFooterBox>
      <StCountBox>
        <p>총 수량 : {totalQuantity}개</p>
        <p>총 가격 : {totalPrice}원</p>
      </StCountBox>
      <div>
        <StOrderBtn>주문하기</StOrderBtn>
      </div>
    </StFooterBox>
  );
}

export default OrderFooter;
