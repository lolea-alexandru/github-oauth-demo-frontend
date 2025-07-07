// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  //! Strict mode is rendering the components 2 times (on dev not on prod)
  //? This will interfere with our one-time access code we receive from GitHub

  // <StrictMode>
  <App />
  // </StrictMode>
);
