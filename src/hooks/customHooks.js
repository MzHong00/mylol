import { useRef, useState } from "react";

export const useDrag = () => {
    
    /* how to use?
    import { useDrag } from "";

    const rotationDrag = useDrag();
    <div {...rotationDrag}></div> */

    const [isClick, setIsClick] = useState(false);
    const [clientX, setClientX] = useState();
    const [currentX, setCurrentX] = useState(0);
    const [diffX, setDiffX] = useState();
    const ref = useRef();

    const onMouseDown = (e) => {
        setIsClick(true);
        setClientX(e.clientX);
    }

    const onMouseMove = (e) => {
        if (isClick) {
            setDiffX(clientX - e.clientX + currentX);
            ref.current.style.transform = `translateX(${-diffX}px)`;
        }
    }

    const onMouseUp = () => {
        setIsClick(false);
        setCurrentX(diffX);
    }

    const onMouseLeave = () => {
        setIsClick(false);
        setCurrentX(diffX);
    }

    return { onMouseDown, onMouseMove, onMouseUp, onMouseLeave, ref };
}