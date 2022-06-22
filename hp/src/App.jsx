import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePageContent from "./HomePageContent";
import "remixicon/fonts/remixicon.css";

import "./index.scss";

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <Header />
    <HomePageContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
