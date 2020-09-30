import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query SEOQuery {
              allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/meta/" } }) {
                nodes {
                  frontmatter {
                    name
                    description
                  }
                }
              }
            }
        `
    );

    const metaData = allMarkdownRemark.nodes[0].frontmatter;

    return (
        <Helmet defaultTitle={metaData.name} titleTemplate={`%s | ${metaData.name}`} htmlAttributes={{ lang: "en" }}>
            {title && <title>{title}</title>}
            <meta name="description" content={description || metaData.description} />
        </Helmet>

    )
}
