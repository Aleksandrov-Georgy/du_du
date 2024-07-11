import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';
import { CalcTotalPizzaPrice } from './calc-total-pizza-price';

/**
 * Рассчитывает общую стоимость пиццы и генерирует текстовые детали на основе типа, размера, пунктов, ингредиентов и выбранных ингредиентов.
 *
 * @param {PizzaType} type - Тип пиццы
 * @param {PizzaSize} size - Размер пиццы
 * @param {ProductItem[]} items - Список пунктов продукции
 * @param {Ingredient[]} ingredients - Список ингредиентов
 * @param {Set<number>} selectedIngredients - Набор выбранных идентификаторов ингредиентов
 * @return {Object} Объект, содержащий totalPrice и textDetails
 *
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = CalcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetaills };
};
