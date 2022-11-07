import { LoginPage } from './login'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new LoginPage();
    renderDOM(App);
});