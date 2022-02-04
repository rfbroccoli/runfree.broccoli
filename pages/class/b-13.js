import { Text, Link, Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import StudentList from "../../components/student_list";
import dbConnect from "../../lib/dbConnect";
import B13Student from "../../models/student";

export default function B13Class({ students }) {
  const [showStudentList, setShowStudentList] = useState(true);
  return (
    <>
      <Head>
        <title>IX3005 learn to code</title>
      </Head>
      <Text fontWeight={"bold"} color={"pink.400"} align={"center"} my={10}>
        IX3005 learn to code
      </Text>
      <Box align={"center"}>
        <Text fontWeight={"bold"} marginBottom={10}>
          Register လုပ်နည်း
        </Text>

        <Text>
          List ထဲမပါသေးရင်{" "}
          <Link href="https://t.me/rf_b_bot" color={"blue.400"} isExternal>
            t.me/rf_b_bot
          </Link>{" "}
          ကို သွားပြီး /register လို့ပို့ပြီး စာရင်းသွင်းပါ
        </Text>
      </Box>
      <Box>
        <Box my={10} align={"center"}>
          <Button
            onClick={() => setShowStudentList((prevVal) => !prevVal)}
            variant={"outline"}
            size={"sm"}
          >
            {showStudentList ? "Hide Student List" : "Show Student List"}
          </Button>
        </Box>
        {showStudentList && <StudentList students={students} />}
      </Box>
    </>
  );
}

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
