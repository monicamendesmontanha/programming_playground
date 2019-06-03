import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default (props) => (
  <Layout>
    <h1>{props.data.site.siteMetadata.title}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae commodi tenetur quo, distinctio exercitationem facilis quibusdam. Assumenda, iure eveniet similique voluptates veniam nemo obcaecati nisi, quasi quas officiis in!
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;