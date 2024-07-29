'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormTextarea } from '../form-components';
import { AddressInput } from '../address-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';

interface Props {
  className?: string;
}

/**
 * Рендерит компонент формы для оформления заказа с адресом доставки.
 *
 * @param {Props} props - Свойства компонента.
 * @param {string} props.className - Опциональное имя класса CSS для компонента.
 * @return {ReactElement} Рендеренный компонент формы для оформления заказа с адресом доставки.
 */
export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Комментарии к заказу"
        />
      </div>
    </WhiteBlock>
  );
};
