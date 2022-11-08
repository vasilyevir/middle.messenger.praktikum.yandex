import { ProfilePage } from './ProfilePage'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new ProfilePage();
    renderDOM(App);
});