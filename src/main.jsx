import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Usercard } from './components/Usercard.jsx'
import { Qrcode } from './components/Qrcode.jsx'
import { Refrm } from './components/Refrm.jsx'
 import './Qrcode.css' 
import './reg.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Usercard/> */}

    <Qrcode />

    {/* <Refrm/> */}


  </React.StrictMode>,
)
