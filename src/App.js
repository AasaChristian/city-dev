
import "./App.css";
import city from './img/city.jpg'
import HeaderButtons from './components/HeaderButtons'
import { useState } from "react";
import PopUpBox from "./components/PopUpBox";



function App() {
  const [showPop, setShowPop] = useState(false)
  const flipPop = () => {
    setShowPop(!showPop)
  }
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          backgroundColor: "white",
          border: "solid #45425A 10px",
          height: "15%",
        }}
      >
        <h1 style={{height: '20px'}}>Aasa Christian & City Web Developement presents</h1>
        <h1 style={{ height: '20px'}}>Ace City</h1>

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
flipPop={flipPop}
buttonTitle='About Me'
/>

<HeaderButtons
flipPop={flipPop}
buttonTitle='Solo Projects'
/>

<HeaderButtons
flipPop={flipPop}
buttonTitle='Group Projects'
/>

<HeaderButtons
flipPop={flipPop}
buttonTitle='Resume'
/>
        </section>

<PopUpBox 
showPop={showPop}
/>

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
