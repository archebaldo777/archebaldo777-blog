import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app/app";

import "./index.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById(`root`)
);
