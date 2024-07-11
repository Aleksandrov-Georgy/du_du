import React from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { getAvailablePizzaSizes } from '../lib/get-available-pizza-sizes';
import { ProductItem } from '@prisma/client';
import { Variant } from '../components/shared/group-variants';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (size: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
}

/**
 * Пользовательский хук для управления опциями пиццы.
 *
 * @param {ProductItem[]} items - Список доступных элементов пиццы.
 * @return {ReturnProps} Объект, содержащий текущий размер, тип и выбранные ингредиенты пиццы, а также функции для их обновления.
 */
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const availableSizes = getAvailablePizzaSizes(type, items);

  React.useEffect(() => {
    const isAvailableSize = availableSizes.find((item) => Number(item.value) === size && !item.disabled);
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return { size, type, setSize, setType, selectedIngredients, addIngredient, availableSizes };
};
