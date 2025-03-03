import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes.js"; // ✅ ตรวจสอบว่าใช้ `.js` ที่ท้ายไฟล์

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
