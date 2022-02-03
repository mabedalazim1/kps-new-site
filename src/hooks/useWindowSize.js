import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [ windowSize, setWindowSize ] = useState({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize();

        window.addEventListener('resize', handleResize)
        const clean =() => {
             console.log('windowSize Change')
       
        }
       
        return clean
    }, [])
    return windowSize;
}

export default useWindowSize;

