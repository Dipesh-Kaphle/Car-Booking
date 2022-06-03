import "antd/dist/antd.css"
import { ConnectedRouter } from "connected-react-router"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { AuthProvider } from "./components/Context/AuthContext"
import App from "./pages/App/index"
import reportWebVitals from "./reportWebVitals"
import "./sass/App.scss"
import configureStore from "./store/configureStore"
import history from "./utils/history"

const mountNode = document.getElementById("root")
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </ConnectedRouter>
  </Provider>,
  mountNode
)

reportWebVitals()
