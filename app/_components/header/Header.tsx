"use client";
import Main from "@/app/context/Main";
import Image from "next/image";
import React from "react";
import { Header } from "./style";
import Checkout from "./Checkout";

const HeaderComponent = () => {
  const { cart, showCart, setShowCart } = React.useContext(Main);

  return (
    <React.Fragment>
      <Header data-testid="header">
        <span>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </span>
        <button
          onClick={() => setShowCart(!showCart)}
          style={{ background: showCart ? "var(--primary-color)" : "#fff" }}
        >
          <Image src="/icons/cart.svg" alt="cart" width={20} height={20} />{" "}
          {cart.length}
        </button>
      </Header>
      <Checkout />
    </React.Fragment>
  );
};

export default HeaderComponent;
