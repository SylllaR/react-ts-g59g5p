import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducers';
import rootSaga from './sagas';

const store = createStore(rootReducer);

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  //storage.removeItem('persist:root');
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
