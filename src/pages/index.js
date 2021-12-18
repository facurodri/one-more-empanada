import { graphql } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";

import About from "../components/about";
import Contact from "../components/contact";
import Layout from "../components/Layout";
import '../css/main.css';

const IndexPage = ({ location }) => {
  const { t } = useTranslation();

  return (
    <Layout location={location}>
      <main>
        <title>Home Page</title>
        <h1>One More Empanada</h1>
        <p>{t("INDEX.WELCOME")}</p>
        <About />
        <Contact />

      </main>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
