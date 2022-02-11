import { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";
import {GetStaticProps} from "next";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import { Date } from "../components/date";
const  Home = ({ allPostsData }):ReactElement=> {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi my name is Cristian Suárez. Software Engineer with three years of experience with ReactJs. Videogames and dog lover. Great learner</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
export const getStaticProps:GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};