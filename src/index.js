import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <h1>Hello React</h1>
  <StrictMode>
    <App />
  </StrictMode>
);
