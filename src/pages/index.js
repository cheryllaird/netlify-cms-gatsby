import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function Home({ data }) {
    const { html } = data.allMarkdownRemark.nodes[0];
    const { title, banner } = data.allMarkdownRemark.nodes[0].frontmatter;

    return (
        <Layout>
            <header className="splash-banner" style={{"--background-image": `url(${banner})` }}>
                <h1>{title}</h1>
            </header>

            <section dangerouslySetInnerHTML={{ __html: html }}></section>
        </Layout>
    )
}

export const pageQuery = graphql`
query HomePageQuery {
  allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
    nodes {
      html,
      frontmatter {
        banner
        title
      }
    }
  }
}
`
