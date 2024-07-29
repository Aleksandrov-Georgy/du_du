import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  title?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

/**
 * Рендерит компонент деталей позиции в корзине.
 *
 * @param {Props} props - Объект с пропсами, содержащий следующие свойства:
 *   - title: Заголовок позиции в корзине.
 *   - value: Значение позиции в корзине.
 *   - className: Дополнительные классы CSS для стилизации.
 * @return {JSX.Element} Отрендеренный компонент деталей позиции в корзине.
 */
export const CheckoutItemDetails: React.FC<Props> = ({ title, value, className }) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2 " />
      </span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  );
};
