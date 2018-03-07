import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TodoActions from './data/TodoActions';

ReactDOM.render(<App />, document.getElementById('root'));


TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');
registerServiceWorker();
