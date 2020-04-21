import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Routes from './routes';
import './styles/toastStyles.css';
import GlobalStyles from './styles/globalStyles';

import { store, persistor } from './store';
import history from './services/history';

toast.configure({
  autoClose: 4000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyles />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
