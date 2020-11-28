import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import { Routes } from "./routes";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.users.isAuth);

  return (
    <div className="App">
      {isAuth && <Header />}
      <Routes />
      <Footer />
      <Messages />
    </div>
  );
};

export default App;
