function HeaderButtons(props){
const {buttonTitle} = props

    return(
        <div style={{border: 'solid black 2px', display:'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: "15%",}}>
        <h1> {buttonTitle} </h1>
      </div>
    )

} export default HeaderButtons