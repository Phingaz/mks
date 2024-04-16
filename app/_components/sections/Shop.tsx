import React from "react";
import CardComponent from "../card/Card";
import { Container, ItemsWrapper } from "@/app/_components/sections/style";
import { TProduct } from "@/app/types";
import Main from "@/app/context/Main";
import CardLoadingComponent from "../card/Card.Loading";

const Shop = () => {
  const { products, addToCart } = React.useContext(Main);
  const items = products?.data?.products as TProduct[];

  if (products.isError) return <div>Something went wrong</div>;

  return (
    <Container>
      <ItemsWrapper>
        {products.isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <CardLoadingComponent key={index} />
            ))
          : items?.map((item, index) => (
              <CardComponent key={index} item={item} addToCart={addToCart} />
            ))}
      </ItemsWrapper>
    </Container>
  );
};

export default Shop;
