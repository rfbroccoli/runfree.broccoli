import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tag,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Link,
  Select,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouterRefresh } from "../lib/hooks";
import { useRouter } from "next/router";

// const MY_SECRET_KEY = process.env.MY_SECRET_KEY
const MY_SECRET_KEY = "6204dde22c1303d7ffb70dac";

const projectTypes = {
  suggestion: "suggestion",
  lab: "lab",
  exercise: "exercise",
  assignment: "assignment",
  project: "project",
};

const projectStatus = {
  finished: "finished",
  abandoned: "abandoned",
  unstarted: "unstarted",
  ongoing: "ongoing",
};

const Projects = ({ projects }) => {
  return (
    <>
      <Text align={"center"}>
        secret id မသိရင်{" "}
        <Link href="https://t.me/rf_b_bot" color={"blue.400"} isExternal>
          t.me/rf_b_bot
        </Link>{" "}
        ကို သွားပြီး /my_id လို့မေးပါ
      </Text>
      <Table size="sm" maxW={"4xl"} mx={"auto"} my={10}>
        <Thead>
          <Tr>
            <Th>added by</Th>
            <Th>name</Th>
            <Th>description</Th>
            <Th>type</Th>
            <Th>status</Th>
            <Th>
              <ProjectPopover />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project, idx) => (
            <Tr key={project._id}>
              <Td>{project.added_by}</Td>
              <Td>
                <Link isExternal href={project.url}>
                  {project.name}
                </Link>
              </Td>
              <Td>{project.desc}</Td>
              <Td>
                <Tag
                  colorScheme={
                    project.type === projectTypes.assignment
                      ? "red"
                      : project.type === projectTypes.exercise
                      ? "green"
                      : project.type === projectTypes.suggestion
                      ? "teal"
                      : "yellow"
                  }
                >
                  {project.type}
                </Tag>
              </Td>
              <Td>
                <Tag
                  colorScheme={
                    project.status === projectStatus.abandoned
                      ? "red"
                      : project.status === projectStatus.finished
                      ? "green"
                      : project.status === projectStatus.ongoing
                      ? "teal"
                      : "yellow"
                  }
                >
                  {project.status}
                </Tag>
              </Td>
              <Td>
                <ProjectPopover oldProject={project} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

const ProjectPopover = ({ oldProject }) => {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();
  const { asPath, replace } = useRouter();
  const [showSecret, setShowSecret] = useState(false);
  const [error, setError] = useState(false);
  const [projectForm, setProjectForm] = useState({
    name: oldProject ? oldProject.name : "",
    desc: oldProject ? oldProject.desc : "",
    added_by: "",
    type: oldProject ? oldProject.type : "suggestion",
    status: oldProject ? oldProject.status : projectStatus.unstarted,
    url: oldProject ? oldProject.url : "",
  });
  const onSubmit = async () => {
    try {
      if (oldProject) {
        await axios.patch(`/api/projects/${oldProject._id}`, projectForm);
        replace(asPath);
      } else {
        await axios.post("/api/projects", projectForm);
        replace(asPath);
      }
      setError(false);
      setProjectForm({
        name: oldProject ? oldProject.name : "",
        desc: oldProject ? oldProject.desc : "",
        added_by: "",
        type: oldProject ? oldProject.type : projectTypes.suggestion,
        status: oldProject ? oldProject.status : projectStatus.unstarted,
      });
      onToggle();
    } catch (e) {
      // console.log(e);
      setError(true);
    }
  };

  const onDelete = async (e) => {
    await axios.delete(`/api/projects/${oldProject._id}`);
    replace(asPath);
    onToggle();
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      placement={"bottom"}
    >
      <PopoverTrigger>
        <Button size={"sm"}>{oldProject ? "edit" : "add"}</Button>
      </PopoverTrigger>
      <PopoverContent as={"form"} onSubmit={onSubmit}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontWeight={"bold"}>
            {oldProject ? "EDIT YOUR PROJECT" : "ADD A PROJECT"}
          </Text>
        </PopoverHeader>
        <PopoverBody>
          <Stack p={1}>
            <Input
              placeholder="project name"
              bg={useColorModeValue("gray.100", "gray.800")}
              value={projectForm.name}
              onChange={(e) =>
                setProjectForm({ ...projectForm, name: e.target.value })
              }
            />

            <Input
              placeholder="project description"
              bg={useColorModeValue("gray.100", "gray.800")}
              value={projectForm.desc}
              onChange={(e) =>
                setProjectForm({ ...projectForm, desc: e.target.value })
              }
            />
            {/* <Input
              placeholder="project type"
              bg={useColorModeValue("gray.100", "gray.800")}
              disabled={projectForm.added_by !== MY_SECRET_KEY}
              value={projectForm.type}
              onChange={(e) =>
                setProjectForm({ ...projectForm, type: e.target.value })
              }
            /> */}
            <Select
              bg={useColorModeValue("gray.100", "gray.800")}
              // disabled={projectForm.added_by !== MY_SECRET_KEY}
              value={projectForm.type}
              onChange={(e) =>
                setProjectForm({ ...projectForm, type: e.target.value })
              }
            >
              <option value="suggestion">{projectTypes.suggestion}</option>
              <option value="lab">{projectTypes.lab}</option>
              {projectForm.added_by === MY_SECRET_KEY && (
                <option value="project">{projectTypes.project}</option>
              )}
              {projectForm.added_by === MY_SECRET_KEY && (
                <option value="exercise">{projectTypes.exercise}</option>
              )}
              {projectForm.added_by === MY_SECRET_KEY && (
                <option value="assignment">{projectTypes.assignment}</option>
              )}
            </Select>
            <Select
              bg={useColorModeValue("gray.100", "gray.800")}
              disabled={projectForm.added_by !== MY_SECRET_KEY}
              value={projectForm.status}
              onChange={(e) =>
                setProjectForm({ ...projectForm, status: e.target.value })
              }
            >
              {/* <option value="suggestion">{projectTypes.suggestion}</option>
              <option value="exercise">{projectTypes.exercise}</option>
              <option value="assignment">{projectTypes.assignment}</option>
              <option value="project">{projectTypes.project}</option> */}
              {Object.keys(projectStatus).map((status) => (
                <option value={status} key={status}>
                  {projectStatus[status]}
                </option>
              ))}
            </Select>
            <InputGroup>
              <Input
                placeholder="secret id"
                bg={useColorModeValue("gray.100", "gray.800")}
                type={showSecret ? "text" : "password"}
                value={projectForm.added_by}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, added_by: e.target.value })
                }
                isInvalid={error}
                pr="4.5rem"
              />
              <InputRightElement>
                <Button
                  size="xs"
                  variant={"outline"}
                  onClick={() => setShowSecret((prevVal) => !prevVal)}
                >
                  {showSecret ? "hide" : "show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {error && (
              <Text color={"red.400"} align={"center"}>
                invalid secret id
              </Text>
            )}
            <Input
              placeholder="github repo url"
              bg={useColorModeValue("gray.100", "gray.800")}
              value={projectForm.url}
              onChange={(e) =>
                setProjectForm({ ...projectForm, url: e.target.value })
              }
            />
            <Button
              colorScheme={"green"}
              onClick={onSubmit}
              disabled={
                (oldProject &&
                  oldProject.secret_key !== projectForm.added_by) ||
                projectForm.added_by === ""
              }
            >
              {oldProject ? "submit" : "add"}
            </Button>
            {oldProject && (
              <Button
                colorScheme={"red"}
                onClick={onDelete}
                disabled={oldProject.secret_key !== projectForm.added_by}
              >
                delete
              </Button>
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Projects;
