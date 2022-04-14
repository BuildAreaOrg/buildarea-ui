import { createTheme, globalCss } from "@buildarea-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'sans-serif' },
});

const theme = createTheme({
  colors: {
    primary: '#001E6C',
    secondary: '#035397'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {globalStyles()}
    <div className={theme}>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
