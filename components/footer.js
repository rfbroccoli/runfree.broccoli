import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";

import { Logo } from "./common";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
    //   bg={useColorModeValue("gray.50", "gray.900")}
    //   color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />

        <Stack direction={"row"} spacing={2}>
          <SocialButton label={"telegram"} href={"https://t.me/rf_b_bot"}>
            <FaTelegramPlane />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
