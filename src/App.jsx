import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Gallery from "./components/Gallery";
import Auth from "./components/Auth";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Gallery />
        <Auth />
      </main>
      <Footer />
    </div>
  );
};
export default App;
