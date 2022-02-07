import {
  Text,
  Link,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Tag,
  Button,
} from "@chakra-ui/react";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <>
      {/* <Text fontWeight={"bold"} align={"center"}>
          Student List
        </Text> */}
      <Box align={"center"}>
        {/* <Text fontWeight={"bold"} marginBottom={10}>
          register လုပ်နည်း
        </Text>

        <Text>
          list ထဲမပါသေးရင်{" "}
          <Link href="https://t.me/rf_b_bot" color={"blue.400"} isExternal>
            t.me/rf_b_bot
          </Link>{" "}
          ကို သွားပြီး /register လို့ပို့ပြီး စာရင်းသွင်းပါ
        </Text> */}
      </Box>
      <Table size="sm" maxW={"lg"} mx={"auto"} my={10}>
        <Thead>
          <Tr>
            <Th>added by</Th>
            <Th>name</Th>
            <Th>description</Th>
            <Th>type</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project, idx) => (
            <Tr
              key={project._id}
              id={`b13-${project.id}`}
              // color={idx % 2 === 0 ? "blue.400" : "red.400"}
            >
              <Td>{project.first_name}</Td>
              <Td>{project.name}</Td>
              <Td>{project.desc}</Td>
              <Td>
                <Tag
                  colorScheme={
                    project.type === "assigned"
                      ? "red"
                      : project.type === "suggested"
                      ? "green"
                      : "orange"
                  }
                >
                  {project.type}
                </Tag>
              </Td>
              <Td>
                <Button size={"sm"}>edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th>{projects.length}</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </>
  );
};

export default Projects;
