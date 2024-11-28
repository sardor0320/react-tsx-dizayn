import React from "react";
import Navbar from "./components/header";
import Saction from "./components/saction";
import Main from "./components/main";
import Footer from "./components/footer";
import Imgs from "./components/img";
import "./App.css"
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Saction/>
      <Imgs />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
