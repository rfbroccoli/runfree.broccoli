import { Text, Link, Box, Button } from "@chakra-ui/react";
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
  const [showStudentList, setShowStudentList] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  // const [showOutline, setShowOutline] = useState(false);

  return (
    <>
      <Head>
        <title>IX3005 learn to code</title>
      </Head>
      <Text fontWeight={"bold"} color={"pink.400"} align={"center"} my={10}>
        IX3005 learn to code
      </Text>

      {/* <SectionInClass
        item={<CourseOutline />}
        itemName={"course outline"}
        display={showOutline}
        setState={setShowOutline}
      /> */}
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
      />
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const studentDocs = await Student.find();
  const students = studentDocs.map((doc) => {
    const student = doc.toObject();
    student._id = student._id.toString();
    return student;
  });

  const projectDocs = await Project.find();
  console.log(projectDocs);
  const projects = projectDocs.map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    project.updated_at = project.updated_at.toISOString();
    return project;
  });

  console.log(projectDocs);
  return { props: { students, projects } };
}
