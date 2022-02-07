import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
// import { MDXProvider } from '@mdx-js/react'
export default function Post({ postData }) {
  console.log(postData.contentHtml);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="justify-center px-2"
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
