import React, { Fragment } from "react";
import Header from "./Header";
import "./header.css";

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <div style={{ marginLeft: "20%" }}>
                <p>Hello WOrld</p>
            </div>
        </Fragment>
    );
};

export default Dashboard;
