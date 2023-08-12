import "./App.scss";
import { Home } from "./components/pages/home/Home";
import React, { useEffect, useState } from "react";
import { Loading } from "./components/pages/loading/Loading";
import { Header } from "./components/essentials/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { News } from "./components/pages/news/News";
import { Music } from "./components/pages/music/Music";
import { Contact } from "./components/pages/contact/Contact";
import { Footer } from "./components/essentials/footer/Footer";

function App() {
  const [hasClickedButton, setHasClickedButton] = useState(false);

  return (
    <div className="App">
      {!hasClickedButton ? (
        <Loading setHasClickedState={setHasClickedButton} />
      ) : (
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
              {/*<Route component={Notfound} />*/}
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
