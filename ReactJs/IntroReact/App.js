// I have to create this structure in react...
{
  /* <div className="parent">
  <div className="child-1">
    <h1>Hello, I'm from h1 child-1</h1>
    <h2>Hello, I'm from h2 child-1</h2>
  </div>
  <div className="child-2">
    <h1>Hello, I'm from h1 child-2</h1>
  </div>
</div> */
}

const element = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child-1" }, [
    React.createElement(
      "h1",
      { className: "child-1" },
      "Hello, I'm from h1 child-1"
    ),
    React.createElement(
      "h2",
      { className: "child-1" },
      "Hello, I'm from h2 child-1"
    ),
  ]),
  React.createElement(
    "div",
    { className: "child-2" },
    React.createElement(
      "h2",
      { className: "child-1" },
      "Hello, I'm from h1 child-2"
    )
  ),
]);

console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
