import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "./app.css"

export default function Home({ data }) {
    const { html } = data.allMarkdownRemark.nodes[0];
    const { title, banner } = data.allMarkdownRemark.nodes[0].frontmatter;

    return (
        <>
            <Header siteTitle="My test site" />
            <main role="main">
                <header className="splash-banner" style={{"--background-image": `url(${banner})` }}>
                    <h1>{title}</h1>
                </header>

                <section dangerouslySetInnerHTML={{ __html: html }}></section>
            </main>
            <Footer />
        </>
    )
}

export const pageQuery = graphql`
query MyQuery {
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
