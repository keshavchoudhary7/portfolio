import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { useLenis } from './lib/smoothScroll'

function Root() {
  useLenis()
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)


