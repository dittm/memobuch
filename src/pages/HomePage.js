import React from "react";
import MiniMap from "../components/MiniMap"; // Adjust the import path as necessary

export default function HomePage() {
    return (
        <div className="container">
            {/* Hero Section */}
            <header className="my-4 text-center">
                <h1>Memobuch</h1>
                <p className="lead">Lorem ipsum</p>
                <a href="/map" className="btn btn-primary btn-lg">Zur Karte</a>
            </header>

            {/* Mini Map Section */}
            <section className="my-3">
                <h2 className="text-center">Kartenansicht</h2>
                <MiniMap />
            </section>

            {/* Main Content */}
            {/* ... other content as needed ... */}

            {/* Footer Section */}
            <footer className="text-center my-4">
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </footer>
        </div>
    );
}
