// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

// import './index.css'
// import App from './App'

// import './api/server'

import store from './store'

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// Log the initial state
console.log('Initial state: ', store.getState())

// Every time the state change, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// Stop listening to state updates
unsubscribe()

// Dispatch one more action to see what happens
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })
