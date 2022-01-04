import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";

//함수형 컴포넌트.
// function App() {
//     const name = "리액트";

//     return <div className="react">{name}</div>;
// }

// export default App;

//클래스형 컴포넌트.
// class App extends Component {
//     render() {
//         const name = "react";
//         return <div className="react">{name}</div>;
//     }
// }

// export default App;
const App = () => {
    return <MyComponent />;
};

export default App;
