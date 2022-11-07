import { RegisterPage } from './register'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new RegisterPage();
    renderDOM(App);
});