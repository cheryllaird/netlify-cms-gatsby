import React from "react"
import { Link } from "gatsby"

export default function Footer() {
    return (
        <footer>
            <nav>
                <Link to="/">Food</Link>
                <Link to="/">Beers</Link>
                <Link to="/">Events</Link>
                <Link to="/">Contact</Link>
            </nav>
        </footer>
    )
}
