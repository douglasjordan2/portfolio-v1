import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { phone: 0 },
  { default: 576 }
])

ReactDOM.render(<App />, document.getElementById('root'));
