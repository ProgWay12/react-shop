import React from "react";
import {Routes, Route} from "react-router-dom";
import {Catalog} from "../pages/Catalog";

function RouterView() {
    return <Routes>
        <Route path="/" element={<Catalog />}></Route>
    </Routes>
}

export default RouterView