import React from "react";
import {
  Card,
  CardContent,
  CardImage,
  CardInfoWrapper,
  CardTitle,
  CardPrice,
  CardDescription,
  CardButton,
} from "./style";
import Image from "next/image";
import { TProduct } from "@/app/types";

const CardComponent = ({
  item,
  addToCart,
}: {
  item: TProduct;
  addToCart: (product: TProduct) => void;
}) => {
  return (
    <Card>
      <CardContent>
        <CardImage alt="" width={0} height={0} unoptimized src={item.photo} />
        <CardInfoWrapper>
          <CardTitle>
            {item.brand} {item.name}
          </CardTitle>
          <CardPrice>$ {item.price}</CardPrice>
        </CardInfoWrapper>
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
      <CardButton onClick={() => addToCart(item)}>
        <Image
          src="/icons/shopping-bag.svg"
          alt="cart"
          width={13}
          height={13}
        />
        Comprar
      </CardButton>
    </Card>
  );
};

export default CardComponent;
