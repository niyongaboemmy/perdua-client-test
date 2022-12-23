import React, { Component } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import PageContainer from "../components/PageContainer/PageContainer";

interface AppPageProps {}
interface AppPageState {}

class AppPage extends Component<AppPageProps, AppPageState> {
  render() {
    return (
      <PageContainer>
        <div className="px-5 py-10 font-bold text-green-800 text-6xl text-center">
          Welcome to Next Js Template
        </div>
      </PageContainer>
    );
  }
}

export default AppPage;
