import { CartItemDTO } from '../services/dto/cart.dto';

/**
 * Вычисляет общую стоимость позиции в корзине на основе ингредиентов, цены продукта и количества.
 *
 * @param {CartItemDTO} item - Позиция в корзине, для которой необходимо вычислить общую стоимость
 * @return {number} Общая стоимость позиции в корзине
 */
export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
