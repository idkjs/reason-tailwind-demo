[%bs.raw {|require("./App.css")|}];
let component = ReasonReact.statelessComponent("App");

let logo = [%bs.raw {|require("./logo.svg")|}];
let s = ReasonReact.string;
let make = (_children) => {
  ...component,
  render: (_self) =>  <div className="content-center">
        <header className="min-h-screen flex flex-col items-center justify-center text-2xl">
          <img
            src={logo}
            className="h-48 pointer-events-none App-logo"
            alt="logo"
          />
          <p>
            "Edit"->s <code>"src/App.js"->s</code>" and save to reload."->s
          </p>
        </header>
      </div>
};

let default =
ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));

