
import { createApp } from 'vue'
import AwayPage from './AwayPage.vue';

 export function load() {
  const selector = 'away-page';

  // Is the custom Vue root element in the DOM?

  if (!document.querySelector(selector)) {
    console.log("NO")
    return;
  }

  // Create a nepw Vue app with the imported Home component
  createApp(AwayPage, 
    {
    props: {...window[selector],}
    }
    ).mount(selector)
}

