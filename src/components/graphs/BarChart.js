import React, { useRef, useEffect, useState } from "react"

import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

//import {useResizeObserver} from "../../js/utils/customHooks"

const useResizeObserver = ref => {

    const [dimensions, setDimensions] = useState(null);

    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                setDimensions(entry.contentRect)
            })
        })
        resizeObserver.observe(observeTarget)
        return () => {
            resizeObserver.unobserved(observeTarget);
        }
    }, [ref]);

    return dimensions;
}

const BarChart = () => {
    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current)

        console.log(dimensions)

        if(!dimensions) return; 

        const xScale = scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, dimensions.width]) // to change
            .padding(0.5);


        const yScale = scaleLinear()
            .domain([0, 150]) // to do 
            .range([dimensions.height, 0]) // to change


        const colorScale = scaleLinear()
            .domain([75, 100, 150])
            .range(["green", "orange", "red"])
            .clamp(true)

        const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index);
        svg
            .select(".x-axis")
            .style("transform", `translateY(${dimensions.height}px)`)
            .call(xAxis);

        const yAxis = axisRight(yScale)
        svg
            .select(".y-axis")
            .style("transform", `translateX(${dimensions.width}px)`)
            .call(yAxis);


        svg.selectAll(".bar")
            .data(data)
            .join("rect") // creating a rect for every piece of data
            .attr("class", "bar")
            .style("transform", "scale(1, -1)")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -dimensions.height)
            .attr("width", xScale.bandwidth())
            .on("mouseenter", function (event, value) {
                // events have changed in d3 v6:
                // https://observablehq.com/@d3/d3v6-migration-guide#events
                const index = svg.selectAll(".bar").nodes().indexOf(this)
                svg
                    .selectAll(".tooltip")
                    .data([value])
                    .join(enter => enter.append("text").attr("y", yScale(value) - 4))
                    .attr("class", "tooltip")
                    .text(value)
                    .attr("x", xScale(index) + xScale.bandwidth() / 2)
                    .attr("text-anchor", "middle")
                    .transition()

                    .attr("y", yScale(value) - 12)
                    .attr("opacity", 0.7)
            })

            .on("mouseleave", () => svg.select(".tooltip").remove())

            .transition()
            .attr("fill", colorScale)
            .attr("height", value => dimensions.height - yScale(value)) // 
        

    }, [data, dimensions]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 50px", justifyContent: "center", height: "100vh", marginTop: "100px" }}>

            <div ref={wrapperRef}>
                <svg style={{ background: "#e0e1e2", overflow: "visible", display: "block", width: "100%" }} ref={svgRef}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                </svg>
            </div>

            <div style={{ display: "flex", marginTop: "16px", flexDirection: "column" }}>
                <button style={{ width: "100px", marginTop: "8px" }} onClick={() => setData(data.map(value => value + 5))}>Update</button>
                <button style={{ width: "100px", marginTop: "8px" }} onClick={() => setData(data.filter(value => value <= 70))}>Filter</button>
                <button style={{ width: "100px", marginTop: "8px" }} onClick={() => setData([...data, Math.round(Math.random() * 100)])}>Add data</button>
            </div>

        </div>
    )

}

export default BarChart;


        // svg
        //     .selectAll("circle")
        //     .data(data)
        //     .join("circle")
        //     .attr("r", value => value)
        //     .attr("cx", value => value * 2)
        //     .attr("cy", value => value * 2)
        //     .attr("stroke", "red");