import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Alert, AlertIcon, AlertTitle, AlertDescription, Text } from "@chakra-ui/react";

const AlertSubmit = ({ alertSubmit, propertyId }) => {
  const history = useHistory();

  const onDown = () => {
    history.push("/");
  };
 /*  const onTest = async () => {
    history.push("/PaymentOk");
  }; */
  /*  const handleDestacar = () => {
    
    let res = axios.post("http://localhost:3001/sell/premium", {});
    console.log('soy',res)
  }; */

  return (
    <Alert
      position={"absolute"}
      display={!alertSubmit[0] ? "none" : "flex"}
      status={!alertSubmit[1] ? "error" : "success"}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="15rem"
      top={"10rem"}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {!alertSubmit[1]
          ? "La publicación no se pudo borrar, lo sentimos mucho!"
          : "La publicación se borro correctamente"}
      </AlertTitle>
      <AlertDescription maxWidth="sm">Muchas gracias por utilizar nuestra web!</AlertDescription>
      <Button onClick={onDown}>Volver al inicio</Button>
      {/* <Button onClick={onTest}>test mp</Button> */}
      {/* <Button onClick={handleDestacar}>Destacar Publicación</Button> */}
    </Alert>
  );
};

export default AlertSubmit;
