import logo from "./logo.svg";
import "./App.css";
import desert from './img/desert.jpg'
import mist from './img/mist.jpg'
import volcano from './img/volcano.jpg'
import city from './img/city.jpg'
import HeaderButtons from './components/HeaderButtons'



function App() {
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#AAC0AA",
          height: "15%",
        }}
      >
        <h1>Header</h1>
      </header>
      <div style={{ height: "80%" }}>
        <section
          style={{
            display: "flex",
            justifyContent: 'space-evenly',
            height: "8%",
            borderRadius: "3%",
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

        {/* <section
          style={{
            display: "flex",
            backgroundColor: "white",
            height: "8%",
            borderRadius: "3%",
          }}
        >
          <div>
            <h1>BOX 2</h1>
          </div>
        </section> */}

        <section
          style={{ display: "flex", backgroundColor: "#AAC0AA", height: "100%" }}
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
        <section style={{backgroundColor: "#AAC0AA"}}>
          <h1>Footer</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
