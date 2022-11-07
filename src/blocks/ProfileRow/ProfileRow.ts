import Block from '../../core/Block';
import {ValidateForm} from "../../utils/ValidateForm";

interface IProfileRowProps {
    value: string;
    title: string;
    type: string;
    notDisabled: boolean;
    name: string;
    onFocus: () => void;
    errorMessage: string;
}

export class ProfileRow extends Block {
    constructor({onFocus, ...props}: IProfileRowProps) {
        super({...props});

        this.setProps({
            onBlur: (e: FocusEvent) => {
                const inputEl = e.target as HTMLInputElement
                const errorMessage: string =  ValidateForm(this.props.name, inputEl)
                this.refs.errorRef.setProps({
                    text: errorMessage,
                })
            },
            onFocus: (e: FocusEvent) => {
                e.preventDefault();
                // @ts-ignore
                this.refs.errorRef.setProps({
                    text: ''
                });
            },
        })
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="profile-input__container">
                <label class="profile-input">
                    ${this.props.title}
                    {{{
                        ProfileInput
                            onFocus=onFocus
                            type="${this.props.type}"
                            name="email"
                            onBlur=onBlur
                            notDisabled=notDisabled
                            placeholder="${this.props.value}"
                            onFocus=onFocus
                            ref="input"
                    }}}
                </label>
                {{{ErrorComponent ref="errorRef" text=error}}}
            </div>
        `
    }
}