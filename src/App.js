import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { GlobalProvider } from "./Context/GlobalState";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <div>
        <GlobalProvider>
          <Header />
          <div>
            <Navigation />
          </div>
          <Footer />
        </GlobalProvider>
      </div>
    </Router>
  );
}

export default App;
