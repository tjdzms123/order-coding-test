import React from 'react';
import {
  StCountBox,
  StFooterBox,
  StOrderBtn,
} from '../styles/OrderFooter.styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OrderFooter({ totalQuantity, totalPrice }) {
  const navi = useNavigate();

  const isLoading = useSelector(state => state.listSlice.isLoading);

  const onClickOrderBtn = () => {
    if (totalQuantity === 0) {
      alert('재고를 선택해 주세요');
    } else {
      navi('/complete');
    }
  };

  return (
    <StFooterBox>
      <StCountBox>
        <p>총 수량 : {totalQuantity}개</p>
        <p>총 가격 : {totalPrice}원</p>
      </StCountBox>
      <div>
        {isLoading ? (
          <StOrderBtn
            onClick={onClickOrderBtn}
            style={{ backgroundColor: '#C1C1C1' }}
          >
            주문하기
          </StOrderBtn>
        ) : (
          <StOrderBtn onClick={onClickOrderBtn}>주문하기</StOrderBtn>
        )}
      </div>
    </StFooterBox>
  );
}

export default OrderFooter;
