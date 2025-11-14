import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./Css/index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Route";
import AOS from "aos";
import "aos/dist/aos.css";

function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
