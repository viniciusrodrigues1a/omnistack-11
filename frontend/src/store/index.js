import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer({ key: 'bethehero', storage }, rootReducer),
  applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
