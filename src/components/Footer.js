import React from "react"
import { Link } from "gatsby"

export default function Footer() {
    return (
        <footer>
            <nav>
                <Link to="/food">Food</Link>
                <Link to="/drinks">Drinks</Link>
                <Link to="/">Events</Link>
                <Link to="/">Contact</Link>
            </nav>
        </footer>
    )
}
