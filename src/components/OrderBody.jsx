import React from 'react';
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

function OrderBody() {
  const lists = useSelector(state => state.listSlice.lists);
  const newLists = lists.map(e => ({ ...e, count: 0 }));
  console.log(newLists);
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
                  <StCountBtn>-</StCountBtn>
                  <p>0</p>
                  <StCountBtn>+</StCountBtn>
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
