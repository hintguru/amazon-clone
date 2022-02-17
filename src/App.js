import React, { useEffect } from "react";
import Home from "./components/Home.jsx";
import Checkout from "./components/Checkout.jsx";
import Login from "./components/Login.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./components/StateProvider.js";
import { auth } from "./components/dataFirebase.js";

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
