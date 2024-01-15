"use client";

import React, { FC } from "react";
import * as ProductCardStyles from "./ProductCard.styles";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
};

const ProductCard: FC<ProductCardProps> = ({ title, description, price }) => {
  return (
    <ProductCardStyles.Container>
      <ProductCardStyles.Image
        src="https://via.placeholder.com/300"
        alt="Product"
      />
      <ProductCardStyles.Title>{title}</ProductCardStyles.Title>
      <ProductCardStyles.Description>
        {description}
      </ProductCardStyles.Description>
      <ProductCardStyles.Price>${price}</ProductCardStyles.Price>
    </ProductCardStyles.Container>
  );
};

export default ProductCard;
