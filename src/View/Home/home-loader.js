import HomePage from './HomePage.vue';
import { createApp } from 'vue'

 export function load() {
  const selector = 'home-page';

  // Is the custom Vue root element in the DOM?

  if (!document.querySelector(selector)) {
    console.log("NO")
    return;
  }

  // Create a new Vue app with the imported Home component
  createApp(HomePage, 
    {
    props: {...window[selector],}
    }
    ).mount(selector)
}

