import './index.css'; /* import de css */
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro.js';

const el = document.getElementById('root');
const tag = <strong>Olá React!!</strong>

//ReactDOM.render(<div>{tag}</div>, el);
ReactDOM.render(<div><Primeiro></Primeiro></div>, el);
