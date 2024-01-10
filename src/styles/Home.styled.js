import styled from 'styled-components';

export const StHome = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StLogo = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StGoOrderBtn = styled.button`
  width: 172px;
  height: 88px;
  border-radius: 20px;
  background-color: #ffffff;
  font-size: 25px;
  color: #000000;
`;
