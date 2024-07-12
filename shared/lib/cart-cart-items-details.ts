import { Ingredient } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Вычисляет подробности товаров в корзине на основе типа пиццы, размера и ингредиентов.
 *
 * @param {PizzaType} pizzaType - Тип пиццы
 * @param {PizzaSize} pizzaSize - Размер пиццы
 * @param {Ingredient[]} ingredients - Список ингредиентов
 * @return {string} Подробности товаров в корзине в виде строки
 */
export const getCartItemsDetails = (pizzaType: PizzaType, pizzaSize: PizzaSize, ingredients: Ingredient[]): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
