import React from "react";
import "./App.scss";

import Nav from "./js/components/Nav";
import Main from "./js/components/Main";
import Footer from "./js/components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
