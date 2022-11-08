import { ProfileEditPage } from './ProfileEditPage'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new ProfileEditPage();
    renderDOM(App);
});