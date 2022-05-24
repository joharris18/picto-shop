import React from "react"
import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
)
