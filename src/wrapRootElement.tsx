import * as React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = createStore();

export default ({ element }: { element: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
);
