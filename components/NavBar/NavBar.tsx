import React, { Component, ReactNode } from "react";
import Container from "../Container/Container";
import ActiveLink from "./ActiveLink";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface NavBarProps {}
interface NavBarState {
  loading: boolean;
}

const NavigationComponent = (props: {
  path: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <ActiveLink
      activeClassName="bg-gray-100 font-semibold text-gray-700 animate__animated animate__bounceIn"
      className={`bg-white px-6 py-3 hover:bg-primary-800 hover:text-white rounded-full ${
        props.className !== undefined ? props.className : ""
      }`}
      href={props.path}
    >
      {props.children}
    </ActiveLink>
  );
};

export class NavBar extends Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);

    this.state = {
      loading: false,
    };
  }
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ zIndex: 9 }}>
        <Container className="bg-white py-2">
          <div className="flex flex-row items-center justify-between gap-2">
            {/* Left icon */}
            <div className="flex flex-row items-center justify-center">
              <Image src={Logo} alt="Perdua" className="h-14 w-auto" />
              <div className="text-xl font-bold flex flex-row items-center gap-1">
                <div className="text-green-600">Perdua</div>
                <div className="text-lg text-gray-800">Publishers Ltd</div>
              </div>
            </div>
            {/* Right nav */}
            <div className="hidden md:flex flex-row items-center justify-end gap-3">
              <NavigationComponent path="/">Home</NavigationComponent>
              <NavigationComponent path="/about">About Us</NavigationComponent>
              <NavigationComponent
                path="/store"
                className="flex flex-row items-center justify-center w-amx gap-2"
              >
                <div>
                  <AiOutlineShoppingCart className="text-xl" />
                </div>
                <span>Store</span>
              </NavigationComponent>
            </div>
          </div>
        </Container>
      </nav>
    );
  }
}

export default NavBar;
