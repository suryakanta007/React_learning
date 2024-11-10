import { Home,About,Product } from "./pages";


function App() {
 let route = window.location.pathname
 let components ; 
  
switch (route) {
  case "/":
   components =  <Home/>
    break;

  case "/about":
   components =  <About/>
    break;
  case "/product":
    components = <Product/>
    break
}

  return (
    <>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/product">Product</a></li>
    </ul>
      {components}
    </>
  )
}

export default App
