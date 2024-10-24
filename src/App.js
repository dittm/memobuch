import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure the path is correct
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MapPage from "./pages/MapPage";

export default function App() {
    return (
        <Router>
            <Navbar /> {/* Include the Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/map" element={<MapPage />} />
            </Routes>
        </Router>
    );
}
