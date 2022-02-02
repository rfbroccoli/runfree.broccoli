import { Text, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import StudentList from "../../components/student_list";
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
  const [showStudentList, setShowStudentList] = useState(true);
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
      
      {showStudentList && (
        <StudentList
          setShowStudentList={setShowStudentList}
          students={students}
        />
      )}
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
