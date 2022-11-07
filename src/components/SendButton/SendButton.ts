import Block from '../../core/Block';
import arrowLogo from '../../assets/icons/arrow.svg';

import './send-component.scss';

export class SendButton extends Block {
    constructor() {
        super();
    }

    protected render(): string {
        // language=hbs
        return `
            <button class="message-input__button-send">
                <img src="${arrowLogo}" alt="logo send button">
            </button>
    `
    }
}
