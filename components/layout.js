import Head from "next/head";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, children }) => {
  return (
    <Box bg={useColorModeValue("white", "gray.800")}>
      <Box maxW={"6xl"} mx={"auto"}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </Box>
  );
};

export default Layout;
