import './profile-input.scss';
import Block from "../../core/Block";

interface IProfileInputProps {
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    value?: string;
    error?: string;
    notDisabled: boolean;
}

export class ProfileInput extends Block {
    constructor({onFocus, onBlur, ...props}: IProfileInputProps) {
        super({...props, events: {focus: onFocus, blur: onBlur}});
    }
    protected render(): string {
        // language=hbs
        return `
            <input
                    ${this.props.notDisabled ? 'disabled' : ''}
                    placeholder="${this.props.placeholder ? this.props.placeholder : ''}"
                    class="profile-input__input"
                    name="${this.props.name}"
                    type="${this.props.type}"
            />
        `
    }
}