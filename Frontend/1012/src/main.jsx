import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes } from "react-router";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const HosokPage = lazy(() => import("./pages/Hosok.jsx"));
const UjHosPage = lazy(() => import("./pages/UjHos.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<HosokPage />} path="/hosok" />
        <Route element={<UjHosPage />} path="/ujhos" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
