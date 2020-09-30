import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import "../pages/app.css";

export default function Layout({ children }) {
    return (
        <>
            <SEO />
            <Header />
            <main role="main">
                {children}
            </main>
            <Footer />
        </>
    )
}
