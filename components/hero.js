/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Link from "next/link";
import { ButtonWithArrow } from "./common";

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"} minH={"2xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            lineHeight={"110%"}
          >
            Welcome to <br />
            <Text as={"span"} color={"pink.400"}>
              runfree - broccoli
            </Text>
          </Heading>

          <ButtonWithArrow
            arrowText={"let's go to the class"}
            buttonText={"IX3005 learn to code"}
            href={"/class/b-13"}
          />
          <ButtonWithArrow
            arrowText={"let's go to the lab"}
            buttonText={"LightBulbs"}
            href={"/lab/lightbulbs"}
          />
        </Stack>
      </Container>
    </>
  );
}
