import Block from '../../core/Block';
import {ValidateForm} from "../../utils/ValidateForm";

import './container-input-auth.scss';

interface InputProps {
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email';
    id: string;
    placeholder?: string;
    value?: string;
    error?: string;
    name: string;
}

export class ContainerInputAuth extends Block {
    constructor(props: InputProps) {
        super({
            ...props,
            onBlur: (e: FocusEvent) => {
                const inputEl = e.target as HTMLInputElement;
                const errorMessage: string =  ValidateForm(this.props.name, inputEl);

                this.refs.errorRef.setProps({
                    text: errorMessage,
                })
            },
        });
    }

    protected render(): string {
        // language=hbs
        return `
      <div class="auth-input">
        <div class="auth-input__container">
          {{{InputAuth
              placeholder="${this.props.placeholder}"
              name="${this.props.name}"
              type="${this.props.type}"
              id="${this.props.id}"
              onFocus=onFocus
              onBlur=onBlur
              ref="inputRef"
          }}}
          <label for="${this.props.id}" class="auth-input__placeholder">${this.props.placeholder}</label>
        </div>
        {{{ErrorComponent ref="errorRef" text=error}}}
      </div>
    `
    }
}
