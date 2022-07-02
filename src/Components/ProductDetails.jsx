import React from "react";
import { getData } from "./redux/Products/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const products = useSelector((state) => state.products);

  // console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <Text>Product Details</Text>
    </div>
  );
}
