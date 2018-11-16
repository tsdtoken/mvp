import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

// the main app component, will render all routes here
const App = props => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <div>
        {props.routes.map((route, i) =>
          route.routes.map((childRoute, j) => (
            <route.layout key={childRoute.path} {...childRoute} />
          ))
        )}
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
