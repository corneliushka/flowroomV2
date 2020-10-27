import React from "react"
import { Route, Redirect, Link, Switch } from "react-router-dom";
import CurvedLine from "../components/graphs/CurvedLine"

const D3Graphs = () => {
    return (
        <>
            <nav>
                <ul>
                    <p>
                        <Link to="/work/d3graphs/curvedline">CurvedLine</Link>
                    </p>
                </ul>
            </nav>


            <Switch>
            <Route path="/work/d3graphs/curvedline">
                <CurvedLine />
            </Route>
            
            </Switch>
        </>
    )
}

export default D3Graphs;