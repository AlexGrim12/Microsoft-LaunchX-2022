//import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  let localtime = new Date();
  let UTC = localtime.getTime() + localtime.getTimezoneOffset();
  let horaUSAW = new Date(UTC + 3600000 * -2);
  let horaUSAE = new Date(UTC + 3600000);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  const element = (
    <div className="App">
      <header className="App-header">
        <h1>The time in:</h1>
        <h2>Mexico (Center): {new Date().toLocaleTimeString("es-Mx")}</h2>
        <h2>USA (West cost): {horaUSAW.toLocaleTimeString("es-Mx")}</h2>
        <h2>USA (East cost): {horaUSAE.toLocaleTimeString("es-Mx")}</h2>
      </header>
    </div>
  );

  root.render(element);
}

export default App;
