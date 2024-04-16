import React from "react";
import {
  Cart,
  CartItem,
  CartItemContainer,
  CartItemImg,
  CartItemInfo,
  CartItemTitle,
  CartPrice,
  CartSection,
  CartTotal,
  CartTotalWrapper,
  CloseCart,
  CartContent,
  CartHeader,
  CartHeading,
  CheckoutButton,
} from "./style";
import Main from "@/app/context/Main";
import AdjustQuantity from "../utils/AdjustQuantity";

const Checkout = () => {
  const { cart, showCart, handleQuantity, setShowCart, removeFromCart } =
    React.useContext(Main);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const total = cart.reduce((acc, item) => {
    return acc + parseFloat(item.product.price) * item.quantity;
  }, 0);

  return (
    <Cart
      showCart={showCart}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: showCart ? 0 : 500, opacity: showCart ? 1 : 0 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 30,
        duration: 0.1,
      }}
    >
      <CartContent>
        <CartHeader>
          <CartHeading>
            Carrinho <br /> de compras
          </CartHeading>
          <CloseCart onClick={() => setShowCart(!showCart)}>
            <p>x</p>
          </CloseCart>
        </CartHeader>
        <CartItemContainer variants={container} initial="hidden" animate="show">
          {cart.map((item) => (
            <CartItem key={item.product.id} variants={staggerItem}>
              <CloseCart remove onClick={() => removeFromCart(item.product)}>
                <p>x</p>
              </CloseCart>
              <CartItemImg
                unoptimized
                src={item.product.photo}
                alt={item.product.name}
                width={0}
                height={0}
              />
              <CartItemInfo>
                <CartItemTitle>
                  {item.product.brand} {item.product.name}
                </CartItemTitle>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <AdjustQuantity item={item} handleQuantity={handleQuantity} />
                  <CartPrice>R${item.product.price.split(".")[0]}</CartPrice>
                </div>
              </CartItemInfo>
            </CartItem>
          ))}
        </CartItemContainer>
      </CartContent>
      <CartSection>
        <CartTotalWrapper>
          <CartTotal>Total: </CartTotal>
          <CartTotal>R${total}</CartTotal>
        </CartTotalWrapper>
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </CartSection>
    </Cart>
  );
};

export default Checkout;
