import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your Redux store
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

// Create the root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with the Provider and the store passed in
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Optional: Report web vitals
reportWebVitals();
