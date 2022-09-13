import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./Context/ContextProvider.jsx";
ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
