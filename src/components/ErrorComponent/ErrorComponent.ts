import Block from '../../core/Block';

import './error-component.scss';

interface ErrorComponentProps {
    text?: string;
}
export class ErrorComponent extends Block<ErrorComponentProps> {
    protected render(): string {
        // language=hbs
        return `
            <label class="auth-input__error-message">{{#if text}}{{text}}{{/if}}</label>
        `
    }
}
