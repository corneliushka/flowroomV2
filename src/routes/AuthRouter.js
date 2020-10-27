import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";


import D3Graphs from "../pages/D3Graphs"
import Home from "../pages/Home"

const PrivateRoute = () => {}

const AuthRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {/* <PrivateRoute/> */}
                    <Route exact path="/work" component={MainLayout} />
                    <Route path="/work/home" component={Home} />
                    <Route path="/work/d3graphs" component={D3Graphs}/>

                    <Redirect exact from="/" to="/work"/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AuthRouter;