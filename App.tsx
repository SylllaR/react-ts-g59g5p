import * as React from 'react';
import './style.scss';
import './i18n';
import { Provider } from 'react-redux';
import { initStore } from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react';

import InitApp from './initApp.index';

const App: React.FC = () => {
  const store = React.useMemo(() => {
    return initStore().store;
  }, []);
  const persistor = React.useMemo(() => {
    return initStore().persistor;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
