import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as ServiceWorkerRegister from "../src/ServiceWorkerRegister";

ReactDOM.render(<App />, document.getElementById("root"));

ServiceWorkerRegister.register();