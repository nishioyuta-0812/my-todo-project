import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { container } from "tsyringe";
import { TaskGateway } from "./lib/gateway/TaskGateway";
import { WeatherGateway } from './lib/gateway/WetherGateway';
container.register('TaskPort', {useClass: TaskGateway})
container.register('WeatherPort', {useClass: WeatherGateway})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
reportWebVitals();
