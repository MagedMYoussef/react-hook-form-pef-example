import { ConnectForm } from './react-hook-form.utils';
import { Controller } from 'react-hook-form';

export const SampleFieldTwo = () => {
  console.log('render SampleFieldTwo');

  return (
    <ConnectForm>
      {({ control }) => {
        return (
          <Controller
            name="sampleFieldTwo"
            control={control}
            render={({ field }) => (
              <input
                onChange={(e) => {
                  console.log('onChange SampleFieldTwo');
                  field.onChange(e);
                }}
                placeholder="Description"
              />
            )}
          />
        );
      }}
    </ConnectForm>
  );
};
