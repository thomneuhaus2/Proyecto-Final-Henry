import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import style from "./Card.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import imgNotAvailable from "../../Image/Image_not_available.png";

export default function CardPerfil(id, img, precio, ciudad, premium) {
  const handleDestacar = () => {};
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignContent="stretch"
      w="400px"
      h="200px"
      className={style.container}
      zIndex={"80"}
    >
      <Image h="100px" w="150" src={img[0] ? img[0].url : imgNotAvailable} alt="Img not found" />
      {/* <Link to={"/details/" + id}> */}
      <Box className={style.container2}>
        <Text as="b" textTransform={"uppercase"} fontSize="l" textAlign={"center"}>
          {ciudad}
        </Text>
        <Text as="samp" fontSize="xl">
          $ {precio}
        </Text>
        {premium === true ? (
          <FontAwesomeIcon className={style.containerIcon} icon={faStar} />
        ) : (
          <></>
        )}
      </Box>
      <Button onClick={handleDestacar}>Destacar publicación</Button>
      {/* </Link> */}
    </Box>
  );
}
