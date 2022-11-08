import { Profile } from './Profile'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new Profile();
    renderDOM(App);
});