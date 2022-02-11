import {
  Box,
  List,
  ListItem,
  Tooltip,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import outline from "../constants/outline-checklist.json";

const RecursiveListItem = ({ list }) => (
  <UnorderedList>
    {list.map((listItem, idx) => (
      <Box paddingLeft={10} key={`${listItem.title}-${idx}`}>
        <ListItem
          fontWeight={listItem.bold ? "bold" : ""}
          color={listItem.done ? "green.400" : ""}
          fontSize={"lg"}
          textDecoration={listItem.desc ? "underline" : ""}
        >
          <Tooltip
            hasArrow
            label={listItem.desc}
            placement={"top"}
            bg={useColorModeValue("teal.400")}
          >
            {listItem.title}
          </Tooltip>
        </ListItem>

        {listItem.subtitles && <RecursiveListItem list={listItem.subtitles} />}
      </Box>
    ))}
  </UnorderedList>
);

const CourseOutline = () => {
  return (
    <Box maxW={"xl"} mx={"auto"} lineHeight={2.5}>
      <RecursiveListItem list={outline} />
      {/* <UnorderedList>
        {outline.map((item, idx) => (
          <>
            <ListItem fontWeight={item.bold ? "bold" : ""}>
              {item.title}
            </ListItem>
            {item.subtitles && (
              <UnorderedList>
                {item.subtitles.map((subItem, idx) => (
                  <>
                    <ListItem fontWeight={subItem.bold ? "bold" : ""}>
                      {subItem.title}
                    </ListItem>
                    <UnorderedList>
                      {subItem.subtitles &&
                        subItem.subtitles.map((subSubItem, idx) => (
                          <ListItem fontWeight={subSubItem.bold ? "bold" : ""}>
                            {subSubItem.title}
                          </ListItem>
                        ))}
                    </UnorderedList>
                  </>
                ))}
              </UnorderedList>
            )}
          </>
        ))}
      </UnorderedList> */}
    </Box>
  );
};

export default CourseOutline;
