import React from 'react';
const ScrollToUp = () => {
    const scrollUp = (e) => {
        e.preventDefault()
        window.scrollTo(0,0)
    }
    return (
        <div onClick = {e => scrollUp(e)}>
            Подняться вверх
        </div>
    )
}

export default ScrollToUp