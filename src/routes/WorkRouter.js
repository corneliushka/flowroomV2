
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout"

import D3Graphs from "../pages/D3Graphs"
import Home from "../pages/Home"

export default function WorkRouter () {
    return (
        <Switch>
            <Route path="/work/home" component={Home} />
            <Route path="/work/d3graphs" component={D3Graphs}/>

            {/* <Redirect exact from="/work" to="/work/home"/> */}
        </Switch>
    )
}