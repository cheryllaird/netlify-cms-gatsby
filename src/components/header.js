import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
    return (
        <header>
            <Link to="/" className="brand-logo">{siteTitle}</Link>
            <nav>
                <Link to="/">Food</Link>
                <Link to="/">Beers</Link>
                <Link to="/">Events</Link>
                <Link to="/">Contact</Link>
            </nav>
        </header>
    )
}
