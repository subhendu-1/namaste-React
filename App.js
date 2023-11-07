// const heading = React.createElement("h1",{id:"heading"},"Push React code by Subhendu");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

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

 const div = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"i am h1"),
        React.createElement("h1",{},"i am h1")]
    ),
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"i am h1"),
        React.createElement("h1",{},"i am h1")]
    )]
 )

 console.log(div);

 const root = ReactDOM.createRoot(document.getElementById(root));
 root.render(div);