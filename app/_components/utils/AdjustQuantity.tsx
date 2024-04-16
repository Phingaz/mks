import { TCart } from "@/app/types";
import React from "react";
import styled from "styled-components";

type TBtn = {
  sub?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const Quantity = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid rgba(191, 191, 191, 1);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button<TBtn>`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  border-left: 1px solid rgba(191, 191, 191, 1);
  border-right: 1px solid rgba(191, 191, 191, 1);
  padding: 0 15px;
`;

const AdjustQuantity = ({
  item,
  handleQuantity,
}: {
  item: TCart[0];
  handleQuantity: (id: string, type: string) => void;
}) => {
  return (
    <Wrapper>
      <Quantity>Qtd:</Quantity>
      <Container>
        <Button onClick={() => handleQuantity(item.product.id, "sub")} sub>
          -
        </Button>
        <P>{item.quantity}</P>
        <Button onClick={() => handleQuantity(item.product.id, "add")}>
          +
        </Button>
      </Container>
    </Wrapper>
  );
};

export default AdjustQuantity;
