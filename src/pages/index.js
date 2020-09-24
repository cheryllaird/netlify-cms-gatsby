import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "./app.css"

export default function Home() {
    return (
        <>
            <Header siteTitle="My test site" />
            <main role="main">
                <header className="splash-banner">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam urna, interdum et consectetur eu, dapibus nec nisl.</h1>
                </header>

                <section className="intro">
                    <h2>Class aptent taciti sociosqu ad litora torquent per conubia nostra</h2>

                    <p>Duis laoreet felis tellus, a vestibulum lectus auctor ut. Sed varius ornare felis non imperdiet. Suspendisse nulla leo, mattis imperdiet maximus ac, hendrerit sit amet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam iaculis nec nisi sed consequat. Sed fringilla eros vitae faucibus feugiat.</p>
                </section>

                <section className="drinks">
                    <div>
                        <h2>Duis orci metus</h2>

                        <p>Phasellus orci ligula, facilisis id maximus eu, euismod in purus. Sed congue condimentum efficitur. Duis dignissim, massa eu tristique venenatis, ante ligula scelerisque sem, cursus condimentum elit tellus et arcu. Morbi sed urna laoreet, volutpat risus vel, vulputate purus. Vestibulum porttitor gravida sapien in accumsan. Nunc orci enim, hendrerit porta bibendum nec, condimentum ac justo. Pellentesque ipsum ligula, pulvinar a purus eget, vestibulum mattis arcu. Pellentesque tincidunt libero id odio suscipit consectetur. Fusce eget elementum risus. Duis suscipit lectus nec rutrum efficitur. Mauris semper facilisis nisi sit amet ultrices. Praesent vel pellentesque elit.</p>

                        <p>Praesent dapibus libero quis risus sollicitudin interdum. Nam tristique mauris ac tincidunt suscipit. Curabitur vel venenatis sem, quis rhoncus urna. Aliquam enim tellus, venenatis a ante in, pulvinar lobortis ipsum. Mauris at libero ut lorem rhoncus auctor vitae in purus.</p>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}
