import {
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
} from "@chakra-ui/react";

const StudentList = ({ students }) => {
  return (
    <>
      {/* <Text fontWeight={"bold"} align={"center"}>
        Student List
      </Text> */}

      <Table size="sm" maxW={"lg"} mx={"auto"} my={10}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>First Name</Th>
            <Th>Reason</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student, idx) => (
            <Tr
              key={student.student_id}
              id={`b13-${student.student_id}`}
              color={idx % 2 === 0 ? "blue.400" : "red.400"}
            >
              <Td>{student.student_id}</Td>
              <Td>{student.first_name}</Td>
              <Td>{student.reason_for_joining}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th>{students.length}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default StudentList;
