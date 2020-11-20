
import React, {useState, useEffect, useRef} from "react"

export const useResizeObserver = ref => {

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