import logo from "./logo.svg";
import "./App.css";

function App() {
    const name = "리액트";

    return (
        <div
            style={{
                backgroundColor: "black",
                color: "blue",
                fontSize: "50px",
            }}
        >
            {name}
        </div>
    );
}

export default App;
