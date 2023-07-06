import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { render } from 'react-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = document.getElementById('root');
render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  root
);

reportWebVitals();