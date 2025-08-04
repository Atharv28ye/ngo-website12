import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import VolunteerForm from "./components/VolunteerForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Hero />
                <About />
                <Projects />
                <Testimonials />
                <VolunteerForm />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Testimonials />
              </>
            }
          />
          <Route
            path="/volunteer"
            element={<VolunteerForm />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
