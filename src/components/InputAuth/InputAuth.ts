import Block from '../../core/Block';
import './input-auth.scss';

interface InputProps {
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    value?: string;
    error?: string;
    isPlaceHolderBlack?: boolean;
}

export class InputAuth extends Block {
    constructor({onFocus, onBlur, ...props}: InputProps) {
        super({...props, events: {focus: onFocus, blur: onBlur}});
    }

    protected render(): string {
        // language=hbs
        return `
        <input class="${this.props.isPlaceHolderBlack ? 'auth-input__input auth-input__input_black' : 'auth-input__input'}" name="${this.props.name}" type="${this.props.type}" placeholder="${this.props.placeholder}"/>
    `
    }
}
