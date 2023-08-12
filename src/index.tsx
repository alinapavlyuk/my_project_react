import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);

reportWebVitals();
