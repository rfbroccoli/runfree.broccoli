import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ButtonWithoutArrow } from "./common";
import links from "../constants/links.json";

const Links = ({ students }) => {
  console.log(links);
  return (
    <Box id="links" maxW="3xl" mx="auto">
      <Flex flexWrap={"wrap"} justify={"center"}>
        {links.map((link, idx) => {
          return (
            <Box
              key={idx}
              maxW={"sm"}
              m={5}
              rounded={"lg"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={5}
            >
              <Text fontSize={"3xl"} fontWeight={"semibold"} marginBottom={3}>
                <Avatar src={link.svg} p={1} bg /> {link.title}
              </Text>{" "}
              <Tag m={2}>{link.desc}</Tag>
              <Tag
                m={2}
                colorScheme={
                  link.type === "must-have"
                    ? "red"
                    : link.type === "recommended"
                    ? "green"
                    : "orange"
                }
              >
                {link.type}
              </Tag>
              <br></br>
              <Link href={link.href} color={"blue.400"} isExternal>
                {link.href}
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Links;
