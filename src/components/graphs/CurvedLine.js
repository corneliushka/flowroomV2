import React, { useRef, useEffect, useState } from "react"

import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from "d3";

const CurvedLine = () => {
    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
    const svgRef = useRef();

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current)
        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 300]) // will be ( the max data length) * (the max of value)

        const yScale = scaleLinear()
            .domain([0, 150])
            .range([150, 0])

        const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);
        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = axisRight(yScale)
        svg
            .select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis);

        //xAxis(svg.selectAll(".x-axis"));

        // generates the "d" attriute of a path element
        const myLine = line()
            .x((value, index) => xScale(index)) // will scale the value by every 50 (pixels, for visual representation purpose)
            .y(yScale)
            .curve(curveCardinal);


        // renders pat element, and attaches the "d" attriute from line generator above
        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("class", "line") // will be selected
            .attr("d", myLine) // on va attacher es valeurs d à notre ligne (path element)
            .attr("fill", "none")
            .attr("stroke", "blue");
    }, [data]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <svg style={{ overflow: "visible", display: "block" }} ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
                {/* <path d="M0, 150 10, 100 150, 120" stroke="blue" fill="none" /> */}
            </svg>
            <br />

            <div style={{ marginTop: "16px" }}>
                <button onClick={() => setData(data.map(value => value + 5))}>Update</button>
                <button onClick={() => setData(data.filter(value => value <= 35))}>Filter</button>
            </div>
        </div>
    )

}

export default CurvedLine;


        // svg
        //     .selectAll("circle")
        //     .data(data)
        //     .join("circle")
        //     .attr("r", value => value)
        //     .attr("cx", value => value * 2)
        //     .attr("cy", value => value * 2)
        //     .attr("stroke", "red");