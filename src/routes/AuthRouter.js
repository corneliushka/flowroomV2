import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";


const PrivateRoute = () => {}

const AuthRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {/* <PrivateRoute/> */}
                    <Route exact path="/home" component={MainLayout} />

                    <Redirect from="/" to="/home"/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AuthRouter;