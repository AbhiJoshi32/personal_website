import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import WebFont from "webfontloader"

import App from "./App"
import * as serviceWorker from "./serviceWorker"
import theme from "./theme"
import "./index.css"
import Firebase, { FirebaseContext } from "./Components/Firebase"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register()
WebFont.load({
  google: {
    families: ["Roboto", "Berkshire Swash", "sans-serif"],
  },
})
