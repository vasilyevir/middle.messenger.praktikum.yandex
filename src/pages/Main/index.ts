import { MainPage } from './Main'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new MainPage();
    renderDOM(App);
});