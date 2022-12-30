import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { reducers } from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "animate.css";

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-200">
        <NavBar />
        <div className="mt-2" style={{ minHeight: "calc(100vh - 250px)" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
