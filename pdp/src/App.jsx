import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import PdpContent from "./PdpContent";
import SafeComponent from "./SafeComponent";
const Header = React.lazy(() => import("hp/Header"));
const Footer = React.lazy(() => import("hp/Footer"));
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    // <PdpContent />
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <SafeComponent>
          <Suspense fallback={<div>Loading</div>}>
            <Header />
            <div className="app my-10">
              <Routes>
                <Route path="products/:id" element={<PdpContent />} />
              </Routes>
            </div>
            <Footer />
          </Suspense>
        </SafeComponent>
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
