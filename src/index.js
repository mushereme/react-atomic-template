import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import * as serviceWorker from "./serviceWorker";

import App from "./pages/index";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...">
      <App />
    </Suspense> 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
