import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes.js"; // ✅ ตรวจสอบว่าใช้ `.js` ที่ท้ายไฟล์
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppRoutes />
  </Router>
);
