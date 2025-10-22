import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading> kale kiri </Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "kiiiir  bokhor  yummy yummy"
            : "kiiiiir"}{" "}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
