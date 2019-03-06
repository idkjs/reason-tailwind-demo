'use strict';

var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

((require("./App.css")));

var component = ReasonReact.statelessComponent("App");

var logo = (require("./logo.svg"));

function s(prim) {
  return prim;
}

function make(_children) {
  return /* record */Block.record([
            "debugName",
            "reactClassInternal",
            "handedOffState",
            "willReceiveProps",
            "didMount",
            "didUpdate",
            "willUnmount",
            "willUpdate",
            "shouldUpdate",
            "render",
            "initialState",
            "retainedProps",
            "reducer",
            "jsElementWrapped"
          ], [
            component[/* debugName */0],
            component[/* reactClassInternal */1],
            component[/* handedOffState */2],
            component[/* willReceiveProps */3],
            component[/* didMount */4],
            component[/* didUpdate */5],
            component[/* willUnmount */6],
            component[/* willUpdate */7],
            component[/* shouldUpdate */8],
            (function (_self) {
                return React.createElement("div", {
                            className: "content-center"
                          }, React.createElement("header", {
                                className: "min-h-screen flex flex-col items-center justify-center text-2xl"
                              }, React.createElement("img", {
                                    className: "h-48 pointer-events-none App-logo",
                                    alt: "logo",
                                    src: logo
                                  }), React.createElement("p", undefined, "Edit", React.createElement("code", undefined, "src/App.js"), " and save to reload.")));
              }),
            component[/* initialState */10],
            component[/* retainedProps */11],
            component[/* reducer */12],
            component[/* jsElementWrapped */13]
          ]);
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children);
      }));

exports.component = component;
exports.logo = logo;
exports.s = s;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/*  Not a pure module */
