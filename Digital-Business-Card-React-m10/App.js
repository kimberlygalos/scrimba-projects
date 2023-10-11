import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return(
        <div className="container">
            <Info/>
            <div className="main-content">
                 <About/>
                <Interest/>
            </div>
            <Footer/>
       </div>
    )
}