import React, { useEffect } from 'react';
import { StErrorWrap } from '../styles/Error.styled';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/order');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  
  return (
    <StErrorWrap>
      <span>
        주문에 실패하였습니다. <br />
        다시 시도해주세요.
      </span>
    </StErrorWrap>
  );
}

export default Error;
