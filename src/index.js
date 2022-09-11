import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
  <main>
    <h1>react</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </main>
)

// ReactDOM.render(navbar, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
