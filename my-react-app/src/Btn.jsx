import React from 'react'

function Btn() {

    const clicked = () => {
        console.log("clicked")
    }

  return (
    <button onClick={clicked}>The button</button>
)
}

export default Btn