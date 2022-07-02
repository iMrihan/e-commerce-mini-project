import React from "react";
import { getData } from "../redux/Products/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridItem, Text } from "@chakra-ui/react";

import Filter from "../Filter";
import Product from "../Product";
export default function Shoppage() {
  const dispatch = useDispatch();

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
      <Text>Shop All</Text>
      <Filter />
      {loading ? (
        <h1>Entities loading...</h1>
      ) : error ? (
        <h1>Something went wrong, please try again letter</h1>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.length > 0 &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </Grid>
      )}
    </div>
  );
}
