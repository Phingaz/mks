import { UseQueryResult } from "@tanstack/react-query";

export type TCardLoading = {
  image?: boolean;
  title?: boolean;
  desc?: boolean;
};

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type TCart = { product: TProduct; quantity: number }[];

export type TCartDiv = {
  showCart: boolean;
};

export type TRemove = {
  remove?: boolean;
};

export type TMainCtx = {
  definedGlobalWidth: number;
  mobileNav: boolean;
  toggleMobileNav: () => void;
  //queries
  products: UseQueryResult<any, unknown>;
  //cart
  cart: TCart;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<TCart>>;
  addToCart: (product: TProduct) => void;
  removeFromCart: (product: TProduct) => void;
  handleQuantity: (id: string, type: string) => void;
};
