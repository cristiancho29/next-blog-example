import { render } from "react-dom";
import Head from "next/head";
import utilsStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import { Date } from "../../components/date";
export const Post = ({postData}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <arcticle>
        <h1 className={utilsStyles.headingXl}>
          {postData.title}
        </h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </arcticle>
    </Layout>
  );
  
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({params}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
};