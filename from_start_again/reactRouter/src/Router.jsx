import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import {Home,About,Product} from "./pages/index.js"



const  Router = createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/about",element:<About/>},
    {path:"/product",element:<Product/>}
])

export default Router