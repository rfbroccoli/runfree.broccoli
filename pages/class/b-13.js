import { Text, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import Head from "next/head";
import dbConnect from "../../lib/dbConnect";
import B13Student from "../../models/student";

// const students = [
//   {
//     student_id: 1,
//     first_name: "yoon",
//   },
//   {
//     student_id: 2,
//     first_name: "broccoli",
//   },
//   {
//     student_id: 3,
//     first_name: "mhn",
//   },
// ];

const B13 = ({ students }) => {
  return (
    <>
      <Head>
        <title>IX3005 learn to code</title>
      </Head>
      <Text
        fontWeight={"bold"}
        color={"pink.400"}
        align={"center"}
        marginTop={10}
      >
        IX3005 learn to code
      </Text>
      <Text fontWeight={"bold"} align={"center"} marginTop={10}>
        Student List
      </Text>
      <Table size="sm" maxW={"lg"} mx={"auto"} my={10}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>First Name</Th>
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

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await B13Student.find({});
  const students = result.map((doc) => {
    const student = doc.toObject();
    student._id = student._id.toString();
    return student;
  });

  return { props: { students } };
}

export default B13;
