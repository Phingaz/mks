import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import { TCartDiv, TRemove } from "@/app/types";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: var(--primary-color);
  color: #fff;
  padding: 0 65px;

  @media (max-width: 790px) {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    height: 50px;
  }

  span {
    display: flex;
    gap: 10px;
    font-weight: 300;
    font-size: 20px;
    align-items: baseline;
    position: relative;

    h1 {
      font-size: 40px;
      font-weight: 600px;
    }

    p {
      font-size: 20px;
      position: absolute;
      bottom: 10px;
      right: -100px;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #fff;
    color: black;
    border: none;
    font-size: 20px;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 10px 25px 10px 15px;
    font-weight: 700;
    font-size: 18px;

    @media (max-width: 600px) {
      padding: 5px 15px 5px 10px;
    }
  }
`;

export const Cart = styled(motion.div)<TCartDiv>`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100svh;
  background: var(--primary-color);
  gap: 10px;
  z-index: 100;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  flex-direction: column;

  display: ${(props) => (props.showCart ? "flex" : "hidden")};

  @media (max-width: 600px) {
    width: 87%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #fff;
  margin-bottom: 50px;
`;

export const CartHeading = styled.h1`
  font-size: 23px;
  font-weight: 700;
`;

export const CloseCart = styled.span<TRemove>`
  font-size: 20px;
  cursor: pointer;
  background: black;
  width: 35px;
  height: 35px;
  display: grid;
  place-content: center;
  border-radius: 9999px;
  color: #fff;
  font-weight: 400;
  line-height: 15px;
  font-size: 23px;
  z-index: 101;

  @media (max-width: 600px) {
    color: var(--primary-color);
  }

  ${(props) =>
    props.remove &&
    `
    font-size: 13px;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;

    @media (max-width: 600px) {
      top: 10px;
      right: 10px;
      background: transparent;
      color: black;
      font-size: 30px;
    }
  `}
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  padding: 40px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const CartItemContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const CartItem = styled(motion.li)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  min-height: 100px;
  background: #fff;
  border-radius: var(--border-radius);
  color: black;
  position: relative;

  @media (max-width: 600px) {
    min-height: 200px;
    flex-direction: column;
  }
`;

export const CartItemImg = styled(Image)`
  width: 50px;
  height: auto;
  margin-right: 10px;
  object-fit: contain;
  border-radius: var(--border-radius);

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

export const CartItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CartItemTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 1px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const CartPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 1px;
  margin-left: 40px;

  @media (max-width: 600px) {
    background: var(--alt-black);
    color: white;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    margin-left: 0;
  }
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const CartTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 40px;
  width: 100%;
`;

export const CartTotal = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

export const CheckoutButton = styled.button`
  background: black;
  color: #fff;
  border: none;
  padding: 30px 0px;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
`;
