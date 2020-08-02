
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

export default function AdminRouter () {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/admin/dashboard"/>
                <Route path="/admin/users"/>
                <Route path="/admin/"/>


            </Switch>
        </React.Fragment>
    )
}