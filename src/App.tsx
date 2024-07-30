import './App.css';

import { useForm, FormProvider } from 'react-hook-form';

import { SampleFieldOne } from './form/SampleFieldOne';
import { SampleFieldTwo } from './form/SampleFieldTwo';

function App() {
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  console.log('render form');

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
          <input {...methods.register('firstName')} placeholder="First Name" />

          <SampleFieldOne />
          <SampleFieldTwo />

          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
