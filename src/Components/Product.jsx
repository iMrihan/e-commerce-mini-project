import React, { useState } from "react";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, name, color, gender, original_price, final_price, images } =
    product;
  const navigate = useNavigate();

  const [img, SetImg] = useState(images[0]);
  const showImageOld = () => {
    SetImg(images[0]);
  };
  const showImageNew = () => {
    SetImg(images[1]);
  };
  return (
    <Box
      onMouseEnter={showImageOld}
      onMouseLeave={showImageNew}
      onClick={() => {
        navigate(`/collections/all/${id}`);
      }}
    >
      <Image src={img} alt={name + "shoes"} />
      <Text>{name + " | " + color + " | " + gender}</Text>
      <HStack justify="center">
        <Text>{final_price}</Text>
        <Text color="grey" as="s">
          {original_price}
        </Text>
      </HStack>
    </Box>
  );
}
