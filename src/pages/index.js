import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "./app.css"

export default function Home({ data }) {
    const { intro } = data.contentJson;

    return (
        <>
            <Header siteTitle="My test site" />
            <main role="main">
                <header className="splash-banner">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam urna, interdum et consectetur eu, dapibus nec nisl.</h1>
                </header>

                <section className="intro">
                    {intro}
                </section>


            </main>
            <Footer />
        </>
    )
}

export const pageQuery = graphql`
query MyQuery {
  contentJson {
    intro
  }
}
`
