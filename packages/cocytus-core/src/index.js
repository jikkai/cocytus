import App from './App.svelte'
import 'alius'

if (module.hot) {
  document.querySelector('#app').innerHTML = ''
}

// eslint-disable-next-line
new App({
  target: document.querySelector('#app')
})
