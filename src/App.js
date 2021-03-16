
import "./App.css";
import city from './img/city.jpg'
import HeaderButtons from './components/HeaderButtons'
import { useState } from "react";



function App() {
  const [showPop, setShowPop] = useState(false)
  const flipPop = (e) => {
    e.preventDefault()
    setShowPop(!showPop)
  }
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          border: "solid #45425A 10px",
          height: "15%",
        }}
      >
        <h1 style={{borderBottom:'solid black 5px', height: '40px'}}>Header</h1>
      </header>
      <div style={{ height: "80%" }}>
        <section
          style={{
            display: "flex",
            justifyContent: 'space-evenly',
            height: "8%",
            borderRadius: "3%",
            border: "solid #45425A 5px"
          }}
        >
          {" "}

<HeaderButtons
buttonTitle='About Me'
/>

<HeaderButtons
buttonTitle='Solo Projects'
/>

<HeaderButtons
buttonTitle='Group Projects'
/>

<HeaderButtons
buttonTitle='Resume'
/>
        </section>
<section className="popUpBox" style={{position: 'absolute', height: "73%", width: '80%', marginLeft: '10%', backgroundColor: 'white', top: '5', marginTop: "4.5%", borderRadius: '3%', border: "solid black 10px"}}>
  <div>
    <h1>POP UP BOX</h1>
  </div>
</section>

        <section
          style={{ display: "flex", backgroundColor: "white", height: "100%", border: "solid #45425A 10px" }}
        >
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <h1>Hello! I'm Aasa Christian!</h1>

            <section
              style={{
                display: "flex",
                width: "99.5%",
                border: "solid black 5px",
                height: "90%",
                backgroundImage: `url(${city})`,
                backgroundSize: '100%',
                backgroundPosition: '1%'
              }}
            >
              <section
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div>
                  {" "}
                  <div>
                    <h1 style={{fontSize: '80px'}}>Welcome To </h1>
                  </div>
                  <div>
                    <h1 style={{fontSize: '100px'}}>Ace City </h1>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
        <section style={{backgroundColor: "white", border: "solid #45425A 10px"}}>
          <h1>Footer</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
