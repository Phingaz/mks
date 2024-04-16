"use client";
import HeaderComponent from "./_components/header/Header";
import FooterComponent from "./_components/footer/Footer";
import Shop from "./_components/sections/Shop";

export default function Home() {
  return (
    <main className="main">
      <HeaderComponent />
      <Shop />
      <FooterComponent />
    </main>
  );
}
