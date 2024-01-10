import React, { useEffect, useState } from 'react';
import OrderHeader from '../components/OrderHeader';
import OrderFooter from '../components/OrderFooter';
import OrderBody from '../components/OrderBody';
import { useDispatch, useSelector } from 'react-redux';
import { __getLists } from '../redux/modules/listSlice';

function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getLists());
  }, [dispatch]);

  const lists = useSelector(state => state.listSlice.lists);

  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    lists.forEach(item => {
      initialQuantities[item.id] = 0;
    });
    setItemQuantities(initialQuantities);
  }, [lists]);

  const handleIncrement = itemId => {
    if (itemQuantities[itemId] < 1000) {
      setItemQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] + 1,
      }));
    }
  };

  const handleDecrement = itemId => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  // 총 수량 계산
  const totalQuantity = Object.values(itemQuantities).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  // 총 가격 계산
  const totalPrice = lists.reduce(
    (acc, item) => acc + item.price * itemQuantities[item.id],
    0
  );

  return (
    <>
      <OrderHeader />
      <OrderBody
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        lists={lists}
        itemQuantities={itemQuantities}
      />
      <OrderFooter
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default Order;
