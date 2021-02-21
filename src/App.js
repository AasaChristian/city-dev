import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          height: "15%",
        }}
      >
        <h1>Header</h1>
      </header>
      <div style={{ height: "80%" }}>
        <section
          style={{
            display: "flex",
            backgroundColor: "red",
            height: "8%",
            borderRadius: "3%",
          }}
        >
          {" "}
          <div>
            <h1>BOX 1</h1>
          </div>
        </section>

        <section
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
        </section>

        <section
          style={{ display: "flex", backgroundColor: "blue", height: "100%" }}
        >
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <h1>Main</h1>

            <section
              style={{
                display: "flex",
                width: "99.5%",
                border: "solid black 5px",
                height: "70%",
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
        <section>
          <h1>Footer</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
