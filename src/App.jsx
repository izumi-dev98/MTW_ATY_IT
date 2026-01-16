import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Kpi from "./components/Kpi";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./createClient";
import { useEffect, useState } from "react";

function App() {


  const [kpi, setKpi] = useState([]);
  console.log(kpi);

  useEffect(() => {
    kpidata()
  }, [])

  async function kpidata() {

    const { data } = await supabase.from('kpi').select('*')
    setKpi(data)

  }

  async function addkpi(newKpi) {

    console.log(newKpi);
    

   await supabase.from('kpi').insert([newKpi]).select("*")

    

   
    
  }


  



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
              <Kpi kpi={kpi} addkpi={addkpi}/>

            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
