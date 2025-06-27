import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function render(Component: React.ReactNode) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>{Component}</StrictMode>
  );
}
