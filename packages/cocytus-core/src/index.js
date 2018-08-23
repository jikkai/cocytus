import { Store } from 'svelte/store.js'
import feather from 'feather-icons'
import marked from 'marked'
import App from './App'
import 'alius'

if (module.hot) {
  document.querySelector('#app').innerHTML = ''
}

const store = new Store({
  feather,
  marked
})

// eslint-disable-next-line
new App({
  target: document.querySelector('#app'),
  store
})
