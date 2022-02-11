import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { useState } from "react";

const LightBulb = ({ on }) => (
  <Image
    src={on ? "/images/light-on.png" : "/images/light-off.png"}
    alt={on ? "light-on" : "light-off"}
  />
);
export default function LightBulbsLab() {
  const [num, setNum] = useState(8);
  const [lights, setLights] = useState(
    Array.from({ length: num }, (v, i) => false)
  );

  const inNumber = lights.reduce((prevVal, curVal, curIdx) => {
    if (curVal) {
      const result = curIdx === 0 ? 1 : prevVal + 2 ** curIdx;
      return result;
    }
    return prevVal;
  }, 0);

  const inBinary = lights.reduce((prevVal, curVal, curIdx) => {
    const newDigit = curVal ? "1" : "0";
    const result = newDigit + prevVal;
    return result;
  }, "");

  return (
    <>
      <Head>
        <title>LightBulbsLab</title>
      </Head>
      <Box minH={"xl"}>
        <Table variant="simple" size="lg" maxW={"lg"} mx={"auto"} my={10}>
          <Tbody>
            <Tr>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  In ASCII
                </Text>
              </Td>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  {String.fromCharCode(inNumber)}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  In Number
                </Text>
              </Td>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  {inNumber}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  In Binary
                </Text>
              </Td>
              <Td>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"semibold"}>
                  {inBinary}
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Box maxW={40} mx={"auto"} my={10}>
          <Text fontWeight={"semibold"} align={"center"}>
            Number of LightBulbs
          </Text>
          <NumberInput
            onChange={(val) => {
              setNum(parseInt(val));
              setLights(Array.from({ length: val }, (v, i) => false));
            }}
            value={num}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Flex wrap={"wrap"} direction={"row-reverse"}>
          {lights.map((light, idx) => (
            <Button
              key={idx}
              w={28}
              h={28}
              m={15}
              bg={"transparent"}
              onClick={() => {
                const newLights = [...lights];
                newLights[idx] = !lights[idx];
                setLights(newLights);
              }}
            >
              <Flex direction={"column"}>
                <LightBulb on={light} />

                <Text align={"center"} fontSize={"2xl"}>
                  {light ? "1" : "0"}
                </Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      </Box>
    </>
  );
}
