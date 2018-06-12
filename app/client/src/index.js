import React from "react";
import ReactDOM from "react-dom";
import './styles/dist/reset.css';
import './bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import "./styles/sidebar.css";
import "./styles/google-button.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
