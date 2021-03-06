import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import "./styles.css"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Photos} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </div>
    )
}

export default App