import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    return (
        <div>
            Home
            <button onClick={() => navigate("/admin")}>Go TO Admin</button>
        </div>
    );
};

export default Home;
