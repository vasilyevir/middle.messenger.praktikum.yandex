import Block from '../../core/Block';
import '../../index';
import './button-profile.scss';

interface IProfileButton {
    isColorRed: boolean,
    link: string,
    title: string
}

export class ProfileButton extends Block {
    constructor(props: IProfileButton) {
        super(props);
    }

    protected render(): string {
        // language=hbs
        return `
                <a class="profile__button {{#if ${this.props.isColorRed}}}profile__button_red{{/if}}" href="${this.props.link}">${this.props.title}</a>
        `
    }
}