import {
  Text,
  Link,
  Box,
  Button,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
// import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { SectionInClass } from "../../components/common";
import CourseOutline from "../../components/course_outline";
import Links from "../../components/links";
import Projects from "../../components/projects";
import StudentList from "../../components/student_list";
import dbConnect from "../../lib/dbConnect";
import Student from "../../models/student";
import Project from "../../models/project";

export default function B13Class({ students, projects }) {
  // const [showStudentList, setShowStudentList] = useState(true);
  // const [showProjects, setShowProjects] = useState(false);
  // const [showLinks, setShowLinks] = useState(false);
  // const [showOutline, setShowOutline] = useState(false);

  return (
    <>
      <Head>
        <title>IX3005 learn to code</title>
      </Head>
      <Text fontWeight={"bold"} color={"pink.400"} align={"center"} my={10}>
        IX3005 learn to code
      </Text>

      <Tabs isLazy variant={"soft-rounded"} colorScheme={"pink"}>
        <TabList>
          <Tab>students</Tab>
          <Tab>course outline</Tab>
          <Tab>links</Tab>
          <Tab>projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StudentList students={students} />
          </TabPanel>
          <TabPanel>
            <CourseOutline />
          </TabPanel>
          <TabPanel>
            <Links />
          </TabPanel>
          <TabPanel>
            <Projects projects={projects} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <SectionInClass
        item={<CourseOutline />}
        itemName={"course outline"}
        display={showOutline}
        setState={setShowOutline}
      />
      <SectionInClass
        item={<Projects projects={projects} />}
        itemName={"projects"}
        display={showProjects}
        setState={setShowProjects}
      />
      <SectionInClass
        item={<StudentList students={students} />}
        itemName={"students list"}
        display={showStudentList}
        setState={setShowStudentList}
      />
      <SectionInClass
        item={<Links />}
        itemName={"links"}
        display={showLinks}
        setState={setShowLinks}
      /> */}
    </>
  );
}

// export async function getServerSideProps() {
//   const getStudents = await axios.get("/api/students");
//   const getProjects = await axios.get("api/projects");
//   return {
//     props: {
//       students: getStudents.data || [],
//       projects: getProjects.data || [],
//     },
//   };
// }
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const studentDocs = await Student.find({ username: { $ne: "pwhbdev" } });
  const students = studentDocs.map((doc) => {
    const student = doc.toObject();
    student._id = student._id.toString();
    return student;
  });

  const projectDocs = await Project.find().populate("added_by");
  const projects = projectDocs.map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    project.updated_at = project.updated_at.toISOString();
    project.created_at = project.created_at.toISOString();
    project.secret_key = project.added_by._id.toString();
    project.added_by = project.added_by.first_name;
    return project;
  });

  return { props: { students, projects } };
}
