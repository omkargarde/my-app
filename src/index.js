import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss';
import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent";
function Page() {
  return (
    <div>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  )
}

// ReactDOM.render(navbar, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
