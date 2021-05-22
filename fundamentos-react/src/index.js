import './index.css'; /* import de css */
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import App from './App';

const el = document.getElementById('root');
const tag = <strong>Olá React!!</strong>

//ReactDOM.render(<div>{tag}</div>, el);
ReactDOM.render(
    <App></App>
    , el);
