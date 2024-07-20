let renderElement = function (reactElement, container) {
  let domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.content;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("type", reactElement.props.type);
  container.appendChild(domElement);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    type: "_blank",
  },
  content: "Click here to search page",
};

let mainContainer = document.querySelector("#root");

renderElement(reactElement, mainContainer);
