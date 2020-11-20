import React from "react"
import { Route, Redirect, Link, Switch } from "react-router-dom";
import BarChart from "../components/graphs/BarChart"
import TreeHierarchy from "../components/graphs/TreeHierarchy"

const D3Graphs = () => {
    return (
        <>
            <nav style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <p>
                        <Link to="/work/d3graphs/barchart">Bar Chart</Link>
                    </p>
                    <p>
                        <Link to="/work/d3graphs/treehierarchy">TreeHierarchy</Link>
                    </p>
            </nav>

            <Switch>
            <Route path="/work/d3graphs/barchart">
                <BarChart />
            </Route>
            <Route path="/work/d3graphs/treehierarchy">
                <TreeHierarchy/>
            </Route>
            
            </Switch>
        </>
    )
}

export default D3Graphs;