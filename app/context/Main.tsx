import React, { createContext } from "react";
import { useCycle } from "framer-motion";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCart, TMainCtx, TProduct } from "../types";
import { Bounce, toast } from "react-toastify";

const Main = createContext<TMainCtx>({
  mobileNav: false,
  definedGlobalWidth: 767,
  toggleMobileNav: () => {},
  //queries
  products: {} as UseQueryResult<any, unknown>,
  //cart
  cart: [],
  showCart: false,
  setShowCart: () => {},
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  handleQuantity: () => {},
});

export function MainCtxProvider({ children }: React.PropsWithChildren<{}>) {
  const definedGlobalWidth = 767;
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [cart, setCart] = React.useState([] as TCart);
  const [showCart, setShowCart] = React.useState(false);

  const getProducts = async () => {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC"
    );
    await new Promise((resolve) => setTimeout(resolve, 1000000));
    const data = await response.json();
    return data;
  };

  const products = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 0,
  });

  const addToCart = (product: TProduct) => {
    const productInCart = cart.find((item) => item.product.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
      setCart([...cart]);
      toast.warn("Produto já está no carrinho");
      return;
    }

    setCart([...cart, { product, quantity: 1 }]);
    toast.success("Adicionado ao carrinho");
  };

  const handleQuantity = (id: string, type: string) => {
    const newCart = cart.map((item) => {
      if (item.product.id === id) {
        if (type === "add") {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          if (item.quantity === 1) {
            return item;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(newCart);
  };

  const removeFromCart = (product: TProduct) => {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
  };

  const contextValue = {
    definedGlobalWidth,
    mobileNav,
    toggleMobileNav,
    //queries
    products,
    //cart
    cart,
    showCart,
    setShowCart,
    setCart,
    addToCart,
    removeFromCart,
    handleQuantity,
  };

  return <Main.Provider value={contextValue}>{children}</Main.Provider>;
}

export default Main;
