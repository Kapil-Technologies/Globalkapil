import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga4";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactGA.initialize("G-62KEVNGNVQ");
root.render(
  <Router>
    <App />
  </Router>
);

// ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.event({ category: "Button", action: "Click", label: "Contact Us" });

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "Kapil Technologies India",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics);
