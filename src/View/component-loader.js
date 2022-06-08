import  { load as loadHome } from '../View/Home/home-loader';
import  { load as loadAway } from '../View/Away/away-loader';

 function loadComponents() {
   loadHome()
   loadAway()
}
export default loadComponents