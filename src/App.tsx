import Footer from "./templates/footer/footer";
import Header from "./templates/header/Header";
import Calculator from "./pages/calculator/Calculator"

import { Route, Routes } from "react-router-dom";


import "./App.css"
import NotFound from "./templates/notFound/NotFound";
// import TODO from "./components/TODO/TODO";
import Home from "./pages/home/Home";
import Primes from "./pages/primes/Primes";
import Bits from "./pages/bits/Bits";
import Aprende from "./pages/aprende/Aprende";
import Cripto from "./pages/cripto/Cripto";

function App() {

    return <>

        <Header></Header>

        <section className="content-container">
            <Routes>
                <Route path="/calculadora" element={<Calculator/>} />
                <Route path="/primos" element={<Primes></Primes>} />
                <Route path="/criptografia" element={<Cripto></Cripto>} />
                <Route path="/aprende" element={<Aprende></Aprende>} />
                <Route path="/bits" element={<Bits/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
                
            </Routes>
        </section>

        <Footer></Footer>
    </>
}

export default App;