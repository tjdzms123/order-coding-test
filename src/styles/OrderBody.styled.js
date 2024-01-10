import styled from 'styled-components';

export const StOrderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  margin-top: 57px;
  position: relative;
`;

export const StOrderList = styled.div`
  border: 1px solid #0000004d;
  border-radius: 10px;
  width: 300px;
  height: 80px;
  padding: 10px;
  display: flex;
  gap: 10px;
  /* background: #f75a2f1a; */
`;

export const StImgbox = styled.div`
  width: 62px;
  height: 62px;
  background-color: #d9d9d9;
`;

export const StInforbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
`;

export const StListName = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const StEvent = styled.p`
  width: 53px;
  height: 23px;
  background-color: #f75a2f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 13px;
  color: white;
`;

export const StNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StCount = styled.div`
  display: flex;
  gap: 5px;
`;

export const StCountBtn = styled.button`
  border: none;
  background: none;
  font-size: 18px;
`;
