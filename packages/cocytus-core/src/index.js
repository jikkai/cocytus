import { Store } from 'svelte/store.js'
import feather from 'feather-icons'
import App from './App.svelte'
import 'alius'

if (module.hot) {
  document.querySelector('#app').innerHTML = ''
}

const store = new Store({
  feather
})

// eslint-disable-next-line
new App({
  target: document.querySelector('#app'),
  store
})
