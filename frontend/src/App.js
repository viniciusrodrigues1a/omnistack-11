import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Routes from './routes';
import './styles/toastStyles.css';
import GlobalStyles from './styles/globalStyles';

toast.configure({
  autoClose: 4000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
