import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

export default function Food({ data }) {
    const { html } = data.allMarkdownRemark.nodes[0];
    const { title, intro, image } = data.allMarkdownRemark.nodes[0].frontmatter;

    return (
        <Layout>
            <SEO title="Food" />
            <section className="intro">
                <h1>{title}</h1>
                <p>{intro}</p>
            </section>
            <section className="food image-right">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                <img src={image} alt="" />
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
query FoodPageQuery {
  allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/food/" } }) {
    nodes {
      html,
      frontmatter {
        title
        intro
        image
      }
    }
  }
}
`
