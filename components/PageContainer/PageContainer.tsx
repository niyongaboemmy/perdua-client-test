import { Inter } from "@next/font/google";
import Head from "next/head";
import React, { Component, ReactNode } from "react";
import {
  MAIN_PAGE_DESCRIPTION,
  MAIN_PAGE_LOGO_ICON_PATH,
  MAIN_PAGE_TITLE,
} from "../../utils/api";

// const inter = Inter({ subsets: ["latin"] });

interface PageContainerProps {
  page_title?: string;
  page_description?: string;
  logo?: any;
  children: ReactNode;
  className?: string;
}
interface PageContainerState {}

export class PageContainer extends Component<
  PageContainerProps,
  PageContainerState
> {
  render() {
    return (
      <>
        <Head>
          <title>
            {this.props.page_title === undefined || this.props.page_title === ""
              ? MAIN_PAGE_TITLE
              : this.props.page_title}
          </title>
          <meta
            name="description"
            content={
              this.props.page_description === undefined ||
              this.props.page_description === ""
                ? MAIN_PAGE_DESCRIPTION
                : this.props.page_description
            }
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href={
              this.props.logo === undefined || this.props.logo === ""
                ? MAIN_PAGE_LOGO_ICON_PATH
                : this.props.logo
            }
          />
        </Head>
        <main
          className={`${
            this.props.className !== undefined && this.props.className !== ""
              ? this.props.className
              : ""
          }`}
        >
          {this.props.children}
        </main>
      </>
    );
  }
}

export default PageContainer;
