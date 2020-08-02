import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


const PrivateRoute = () => {

}

const AuthRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Switch>
                <PrivateRoute/>
                <PrivateRoute/>
                <PrivateRoute/>
                <PrivateRoute/>

                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />

            </Switch>
            </BrowserRouter>


            Hell Routing
        </>
    )
}