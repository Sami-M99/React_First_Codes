import React from "react";
// فيه ReactDom لان هذا الملف هو الملف الاساسي لرياكت فنستدعي ال
// html لعمل حقن او اضافة (انجكت) للمكونات (كوموننت) داخل الروت بالملف الاساسي لل 
import ReactDom from "react-dom";
import App from "./components/App";
// React Router هذا تم اضافته للتنقل بين الصفحات بواسطة 
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <div>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </div>
  ,document.getElementById("root")
)