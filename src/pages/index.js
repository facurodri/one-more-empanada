import { graphql } from "gatsby";
import * as React from "react";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";
//import styles from '../pages/css/home.module.css';

const IndexPage = ({ location, children }) => {
  const { t } = useTranslation();

  return (
    <Layout location={location} children={children} >
      <section>
        <h2>{t("INDEX.WELCOME")}</h2>  
        <h1>This is the space after the navbar</h1>      
      </section>
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
