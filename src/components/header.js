import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
    return (
        <header>
            <Link to="/" className="brand-logo">{siteTitle}</Link>
            <nav>
                <Link to="/food">Food</Link>
                <Link to="/drinks">Drinks</Link>
                <Link to="/">Events</Link>
                <Link to="/">Contact</Link>
            </nav>
        </header>
    )
}
