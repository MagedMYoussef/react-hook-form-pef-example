import type { ReactElement } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

interface ConnectFormProps<TFieldValues extends FieldValues> {
  children(children: UseFormReturn<TFieldValues>): ReactElement;
}

export const ConnectForm = <TFieldValues extends FieldValues>({
  children,
}: ConnectFormProps<TFieldValues>) => {
  const methods = useFormContext<TFieldValues>();

  return children({ ...methods });
};
