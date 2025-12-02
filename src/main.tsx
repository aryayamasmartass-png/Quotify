import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (!convexUrl) {
  console.error("VITE_CONVEX_URL is missing");
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #111; color: #fff; font-family: sans-serif; text-align: center;">
      <div>
        <h1 style="color: #ff4444;">Configuration Error</h1>
        <p>VITE_CONVEX_URL environment variable is missing.</p>
        <p style="color: #888; font-size: 0.9em;">Please check your Cloudflare Pages settings and trigger a new deployment.</p>
      </div>
    </div>
  `;
} else {
  const convex = new ConvexReactClient(convexUrl);

  createRoot(document.getElementById("root")!).render(
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>,
  );
}
