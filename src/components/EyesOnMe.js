// Code EyesOnMe Component Here
import React from "react";

function Button () {
    function blur() {
        console.log('Good!')
    }
    return (
        <button onFocus={blur} onBlur={() => console.log("Hey! Eyes on me!")}>Eyes on me</button>
    )
}

export default Button