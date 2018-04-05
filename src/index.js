import "core-js/es6/map";
import "core-js/es6/set";
import "core-js/library/fn/reflect/apply";

import "core-js/fn/reflect/apply";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "./i18n";
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
