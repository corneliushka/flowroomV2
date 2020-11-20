import React, { useRef, useEffect, useState } from "react"

import { select, hierarchy } from "d3";


const data = {
    name: "firstNode",
    children: [ 
        {
            name: "secondNode A",
            children: [
                {
                    name: "thirdNode A"
                },
                {
                    name: "thirdNode B"
                },
                {   
                    name: "thirdNode C"
                }
            ]
        },
        {
            name: "secondeNode B",
        }
    ]
}


const TreeHierarchy = () => {

    const svgRef = useRef();



    useEffect(() => {
        const svg= select(svgRef.current)

        const root = hierarchy(data)

        //const treeLayout = tree().size([width, height])

        console.log("descendants", root.descendants()); // this array is used for rendering all the dots/rects/nodes of our tree chart
        console.log("links", root.links()); // represents all the direct connections in our data array
        //console.log("data", data)
        //console.log("root", root)
        
    }, [data])



    return (
        <div style={{display: "flex", flexDirection: "column", background: "grey", alignItems: "center", justifyContent: "center", marginTop: "200px"}}>
            <svg ref={svgRef}></svg>
        </div>

    )

}

export default TreeHierarchy;