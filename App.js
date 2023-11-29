import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",{id:"heading"},"Push React code by Subhendu");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// JSX :- this is a javascript syntex.JSX is HTML like syntex
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElemnt(render)
// const jsxHeading = <h1 id="heading">Puhs React code by Subhendu</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// console.log(jsxHeading); //return Object

// console.log(heading); //return Object


// CREAT NESTED REACT 

{/* <div id="parent">
    <div id ="child">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
    <div id ="child">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
</div> */}

//  const parent = React.createElement("div",{id : "parent"},[
//     React.createElement("div",{id : "child"},[
//         React.createElement("h1",{},"i am h1"),
//         React.createElement("h2",{},"i am h2")]
//     ),
//     React.createElement("div",{id : "child"},[
//         React.createElement("h1",{},"i am h1"),
//         React.createElement("h2",{},"i am h2")]
//     )]
//  )

//  console.log(parent);

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);




// React Element

const navegation = (
    <h1>All navegation is Their</h1>
);



//React component:-
const Title = () => (
    <div>
        <h1 className="compnent">Push one component in another component</h1>
    </div>
);

const number = 10000;

const Navegation = () => (
// Three way to use this function component inside this function
    <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {console.log(number)}
    <h1>Funtion component </h1>
    </div>

);

//When you render this React component use angular brackets and backword slace
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navegation />);