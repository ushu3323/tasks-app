import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import TasksProvider from './providers/TasksProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
);
