import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Header() {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query HeaderQuery {
              allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/meta/" } }) {
                nodes {
                  frontmatter {
                    name
                  }
                }
              }
            }
        `
    );

    const { name } = allMarkdownRemark.nodes[0].frontmatter;

    return (
        <header>
            <Link to="/" className="brand-logo">{name}</Link>
            <nav>
                <Link to="/food">Food</Link>
                <Link to="/drinks">Drinks</Link>
                <Link to="/">Events</Link>
                <Link to="/">Contact</Link>
            </nav>
        </header>
    )
}
