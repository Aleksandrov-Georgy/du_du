import React from 'react';
import { WhiteBlock } from '../white-block';
import { getCartItemsDetails } from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { CheckoutItem } from '../checkout-item';

import { CartStateItem } from '@/shared/store';

interface Props {
  items: CartStateItem[];
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({ className, items, onClickCountButton, removeCartItem }) => {
  return (
    <WhiteBlock
      title="1. Корзина"
      className={className}
    >
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            details={getCartItemsDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            disabled={item.disabled}
            onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
            onClickRemove={() => removeCartItem(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};
