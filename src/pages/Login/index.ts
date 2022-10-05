import { LoginPage } from './login'
import {renderDOM} from "../../core";


document.addEventListener("DOMContentLoaded", () => {
    const App = new LoginPage();
    renderDOM(App);
});