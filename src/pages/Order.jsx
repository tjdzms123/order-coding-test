import React, { useEffect } from 'react';
import OrderHeader from '../components/OrderHeader';
import OrderFooter from '../components/OrderFooter';
import OrderBody from '../components/OrderBody';
import { useDispatch } from 'react-redux';
import { __getLists } from '../redux/modules/listSlice';

function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getLists());
  });

  return (
    <>
      <OrderHeader />
      <OrderBody />
      <OrderFooter />
    </>
  );
}

export default Order;
