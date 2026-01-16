import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Kpi from "./components/Kpi";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />

        {/* KPI Page */}
        <Route
          path="/kpi"
          element={
            <>
              <Kpi />
              
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
