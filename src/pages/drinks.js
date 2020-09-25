import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "./app.css"

export default function Drinks({ data }) {
    const { html } = data.allMarkdownRemark.nodes[0];
    const { title, intro, image } = data.allMarkdownRemark.nodes[0].frontmatter;

    return (
        <>
            <Header siteTitle="My test site" />
            <main role="main">
                <section className="intro">
                    <h1>{title}</h1>
                    <p>{intro}</p>
                </section>
                <section className="drinks image-right">
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    <img src={image} alt="" />
                </section>
            </main>
            <Footer />
        </>
    )
}

export const pageQuery = graphql`
query DrinksPageQuery {
  allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/drinks/" } }) {
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
