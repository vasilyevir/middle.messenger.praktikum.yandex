import Block from "../../core/Block";
import './link-auth.scss';

interface LinkAuthProps {
    text: string;
    link: () => Block;
}

export class LinkAuth extends Block {
    constructor(props: LinkAuthProps) {
        super(props);
    }

    protected render(): string {
        return `
            <a href="${this.props.link}" class="auth-link">${this.props.text || ''}</a>
        `
    }
}