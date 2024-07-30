import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

/**
 * Рендерит шаблон для оплаты заказа.
 *
 * @param {Props} props - Пропсы компонента.
 * @param {string} props.orderId - ID заказа.
 * @param {number} props.totalAmount - Общая сумма заказа.
 * @param {string} props.paymentUrl - URL для оплаты.
 * @return {ReactElement} Отрисованный шаблон.
 */
export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Заказ #{orderId}</h1>

    <p>
      Оплатите заказ на сумму: <b>{totalAmount} ₽</b>. Перейдите <a href={paymentUrl}>по ссылке</a> для оплаты.
    </p>
  </div>
);
