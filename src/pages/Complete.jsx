import React, { useEffect } from 'react';
import { StCompleteWrap } from '../styles/Complete.styled';
import { useNavigate } from 'react-router-dom';

function Complete() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/order');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <StCompleteWrap>
      <div>
        <img
          src="/img/CheckFilled.png"
          alt="체크박스"
        />
      </div>
      <div style={{ fontSize: '18px' }}>
        <span>주문이 완료되었습니다.</span>
      </div>
    </StCompleteWrap>
  );
}

export default Complete;
