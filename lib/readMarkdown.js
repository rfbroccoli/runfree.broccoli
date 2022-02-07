import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

const markdownDirectory = path.join(process.cwd(), "markdown");

export const readMarkdown = async ({ fileName }) => {
  const fullPath = path.join(markdownDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    processedContent,
  };
};
