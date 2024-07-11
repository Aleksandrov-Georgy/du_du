import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * Рассчитывает общую стоимость пиццы на основе её типа, размера, товаров, ингредиентов и выбранных ингредиентов.
 * @example CalcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)
 * @param {PizzaType} type - Тип пиццы
 * @param {PizzaSize} size - Размер пиццы
 * @param {ProductItem[]} items - Список товаров
 * @param {Ingredient[]} ingredients - Список ингредиентов
 * @param {Set<number>} selectedIngredients - Набор выбранных идентификаторов ингредиентов
 * @return {number} Общая стоимость пиццы
 */
export const CalcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, item) => acc + item.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
