import { graphql } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

import Layout from "../components/Layout";
import '../css/main.css';

const IndexPage = ({ location }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
    <Layout location={location}>
      
      <main>
        <title>Home Page</title>
        <h1>One More Empanada</h1>
        <p>{t("INDEX.WELCOME")}</p>

      </main>
    </Layout>
    </div>
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
