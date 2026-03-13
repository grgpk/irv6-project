import { createElement } from "react";

export default function App() {
  return createElement(
    "div",
    null,
    createElement("h1", null, "Hello Frontend Masters"),
    createElement("p", null, "This is SSG"),
  );
}
