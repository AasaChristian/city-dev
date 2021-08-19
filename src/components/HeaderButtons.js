import React, { useState } from "react";

function HeaderButtons(props){
const {buttonTitle, flipPop} = props

const onClick = (e) => {
  flipPop()
}

    return(
        <div onClick={onClick} style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', }}>
        <h1
        
        > {buttonTitle} </h1>
      </div>
    )

} export default HeaderButtons