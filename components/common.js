import { Text } from "@chakra-ui/react";
import Link from "next/link";
export const Logo = () => (
  <Link href={"/"} passHref>
    <Text fontSize={"lg"} color={"pink.400"} cursor={"pointer"}>
      runfree - broccoli
    </Text>
  </Link>
);
