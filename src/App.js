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

        <section           style={{
            display: "flex",
            backgroundColor: "white",
            height: "8%",
            borderRadius: "3%",
          }}>
          <div>
            <h1>BOX 2</h1>
          </div>
        </section>

        <section
          style={{ display: "flex", backgroundColor: "blue", height: "100%" }}
        >
          <div style={{ width: "100%" }}>
            <h1>Main</h1>

            <section
              style={{
                display: "flex",
                width: "100%",
              }}
            >

              <div >
                <h1>Middle </h1>
              </div>

            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
