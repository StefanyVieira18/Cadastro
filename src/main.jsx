import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import {transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
	transition: transitions.SCALE

}

ReactDOM.render(
  <React.StrictMode>
	
	<AlertProvider template={AlertTemplate} {...options}>
		<App/>
	</AlertProvider>
	
  </React.StrictMode>,
  document.getElementById('root')
)
