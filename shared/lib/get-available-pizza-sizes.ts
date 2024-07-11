import { ProductItem } from '@prisma/client';
import { pizzaSizes, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

/**
 * Получает доступные размеры пицц на основе указанного типа и элементов.
 *
 * @param {PizzaType} type - Тип пиццы для фильтрации
 * @param {ProductItem[]} items - Список элементов продукта для фильтрации
 * @return {Array<{ name: string, value: number, disabled: boolean }>} Доступные размеры пицц с именем, значением и статусом отключения
 *
 * @example
 * getAvailablePizzaSizes('Vegetarian', [
 *   { pizzaType: 'Vegetarian', size: 12 },
 *   { pizzaType: 'Pepperoni', size: 14 },
 *   { pizzaType: 'Vegetarian', size: 16 },
 * ]);
 */
export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
