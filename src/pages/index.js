import * as React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Layout from "../components/Layout";
import '../css/main.css';

// markup
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <main>
        <title>Home Page</title>
        <h1>
          One more Empanada

        </h1>
        <About />
        <Contact />
      </main>
    </Layout>
  )
}

export default IndexPage
