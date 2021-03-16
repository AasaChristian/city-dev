import React, { useState } from "react";

function PopUpBox(props){
    const {showPop} = props
return(
    <section className="popUpBox" style={ showPop === true? {position: 'absolute', height: "73%", width: '80%', marginLeft: '10%', backgroundColor: 'white', top: '5', marginTop: "4.5%", borderRadius: '3%', border: "solid black 10px"}: {display: 'none'}}>
  <div>
    <h1>POP UP BOX</h1>
  </div>
</section>
)
}export default PopUpBox
