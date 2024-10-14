function coustomRender(reactElemet, mainContainer){
    let domElement = document.createElement(reactElemet.type);
    for (const prop in reactElemet.props) {
        if(prop=='childern')continue;
        domElement.setAttribute(prop,reactElemet[prop]);
    }
    domElement.innerHTML = reactElemet.children;
    mainContainer.appendChild(domElement);
}


const reactElemet = {
    type: "h1",
    props: {
        class: "div1",
        id: "d1"
    },
    children: "This is our own React . All set."
}
const mainContainer = document.getElementById("root");
coustomRender(reactElemet, mainContainer);
