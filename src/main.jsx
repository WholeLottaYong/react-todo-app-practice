import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// id = "root"인 태그를 찾아 거기에 Root를 그리겠다
// <App /> : 우리가 실질적으로 작업할 Root 컴포넌트, 보통 작업은 Root 컴포넌트에서 함
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
