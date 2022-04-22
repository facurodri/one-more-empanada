import { graphql } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";


import Layout from "../components/Layout";
import '../css/main.css';

const IndexPage = ({ location, children }) => {
  const { t } = useTranslation();

  return (
    <Layout location={location} children={children} >
      <main>
        <title>Home Page</title>
        <h1>One More Empanada</h1>
        <p>{t("INDEX.WELCOME")}</p>
        
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
