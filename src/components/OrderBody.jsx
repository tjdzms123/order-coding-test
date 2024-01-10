import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StCount,
  StCountBtn,
  StEvent,
  StImgbox,
  StInforbox,
  StListName,
  StNumber,
  StOrderBox,
  StOrderList,
} from '../styles/OrderBody.styled';

function OrderBody({
  lists,
  handleDecrement,
  handleIncrement,
  itemQuantities,
}) {
  const isLoading = useSelector(state => state.listSlice.isLoading);

  if (isLoading) {
    return (
      <div>
        <p>
          목록을 <br />
          불러오고 있습니다.
        </p>
      </div>
    );
  }

  return (
    <StOrderBox>
      {lists.map(list => {
        return (
          <StOrderList key={list.id}>
            <StImgbox></StImgbox>
            <StInforbox>
              <StListName>
                <p>{list.name}</p>
                {list.event === 1 ? <StEvent>이벤트</StEvent> : null}
              </StListName>
              <StNumber>
                <StCount>
                  <StCountBtn onClick={() => handleDecrement(list.id)}>
                    -
                  </StCountBtn>
                  <p>{itemQuantities[list.id]}</p>
                  <StCountBtn onClick={() => handleIncrement(list.id)}>
                    +
                  </StCountBtn>
                </StCount>
                <div>
                  <span>{list.price.toLocaleString()}원</span>
                </div>
              </StNumber>
            </StInforbox>
          </StOrderList>
        );
      })}
    </StOrderBox>
  );
}

export default OrderBody;
