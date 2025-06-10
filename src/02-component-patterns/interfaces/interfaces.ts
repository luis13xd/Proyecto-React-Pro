import { JSX, ReactElement } from "react";

export interface ProuctCardsProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value:number) => void;
  product: Product;
}

export interface ProductCardHOC {
  ({ children, product }: ProuctCardsProps):JSX.Element,
    Title: ({ title }: { title?: string; }) => JSX.Element,
    Image: ({ img }: { img?: string | undefined; }) => JSX.Element,
    Buttons: () => JSX.Element
}