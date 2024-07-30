import { ConnectForm } from './react-hook-form.utils';

export const SampleFieldOne = () => {
  console.log('render SampleFieldOne');
  return (
    <ConnectForm>
      {({ control, watch, trigger, formState, register }) => {
        return <input {...register('fieldTwo')} placeholder="Field Two" />;
      }}
    </ConnectForm>
  );
};
