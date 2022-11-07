import Block from '../../core/Block';
import './message.scss';

interface MessageProps {
    onBlur: (e: FocusEvent) => void;
    message: string;
    name: string;
    type: string;
    value: string;
    placeholder: string
}

export class Message extends Block {
    constructor({onBlur, ...props}: MessageProps) {
        super({...props, events: {blur: onBlur}});
    }

    protected render(): string {
        // language=hbs
        return `
                <input class="message-input__input" name="${this.props.name}" id="${this.props.name}" type="${this.props.type}" placeholder="${this.props.placeholder}" value="${this.props.value}">
        `
    }
}
