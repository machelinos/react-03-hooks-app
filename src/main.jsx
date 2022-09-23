import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { MultipleHooks } from './03-examples/MultipleHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
