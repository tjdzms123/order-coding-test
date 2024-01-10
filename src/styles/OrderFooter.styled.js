import styled from 'styled-components';

export const StFooterBox = styled.div`
  width: 350px;
  height: 170px;
  position: fixed;
  bottom: 0px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px -4px 10px 0px #00000040;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StCountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  font-size: 18px;
`;

export const StOrderBtn = styled.button`
  width: 300px;
  height: 48px;
  color: #ffffff;
  background-color: #000000;
  font-size: 18px;
`;