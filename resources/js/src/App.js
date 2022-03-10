import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Dashboard from "./pages/admin/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
