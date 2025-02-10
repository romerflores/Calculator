import Footer from "./templates/footer/footer";
import Header from "./templates/header/Header";
import Calculator from "./pages/calculator/Calculator"

import { Route, Routes } from "react-router-dom";


import "./App.css"
import NotFound from "./templates/notFound/NotFound";
import TODO from "./components/TODO/TODO";
import Home from "./pages/home/Home";

function App() {

    return <>

        <Header></Header>

        <section className="content-container">
            <Routes>
                <Route path="/calculadora" element={<Calculator/>} />
                <Route path="/primos" element={<TODO></TODO>} />
                <Route path="/criptografia" element={<TODO></TODO>} />
                <Route path="/aprende" element={<TODO></TODO>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
                
            </Routes>
        </section>

        <Footer></Footer>
    </>
}

export default App;