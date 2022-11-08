import Block from '../../core/Block';
import {ValidateForm} from "../../utils/ValidateForm";

import './search-header.scss';

interface SearchHeaderProps {
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'password' | 'email';
    id: string;
    placeholder?: string;
    value?: string;
    error?: string;
    linkToProfile: string;
    name: string;
}

export class SearchHeader extends Block {
    constructor(props: SearchHeaderProps) {
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
            <div class="search-header">
                <a class="search-header__link" href="${this.props.linkToProfile}">Профиль ></a>
                {{{
                    SearchInput
                        type="text"
                        id="searchInput"
                        ref="searchInput"
                        placeholder="Поиск"
                }}}
            </div>
    `
    }
}
