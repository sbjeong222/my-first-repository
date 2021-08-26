import logo from "./logo.svg";
import "./App.css";
//import "./Welcome.js";

function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}

function App() {
    return (
        <div className="App">
            <Welcome name="jaeyoon" /> 
        </div>
    );
}

export default App;
/*왜 컴포넌트 받아왓는데 안되는거지?*/