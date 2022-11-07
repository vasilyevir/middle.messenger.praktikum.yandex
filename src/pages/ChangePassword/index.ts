import { ChangePasswordPage } from './ChangePassword'
import renderDOM from "../../core/renderDom";


document.addEventListener("DOMContentLoaded", () => {
    const App = new ChangePasswordPage();
    renderDOM(App);
});