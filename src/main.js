import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/ `
  <div>
  <a href="https://vite.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>
  <div class="card">
  <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
  Click on the Vite logo to learn more
  </p>
  <!-- bootstrap div -->
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
