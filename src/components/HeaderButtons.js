import React, { useState } from "react";

function HeaderButtons(props){
const {buttonTitle, flipPop} = props

const onClick = (e) => {
  flipPop()
}

    return(
        <div onClick={onClick} style={{border: 'solid black 2px', display:'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: "15%",}}>
        <h1
        
        > {buttonTitle} </h1>
      </div>
    )

} export default HeaderButtons