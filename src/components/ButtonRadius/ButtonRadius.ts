import Block from "../../core/Block";
import './button-radius.scss';

interface ButtonRadiusProps {
    text: string;
}

export class ButtonRadius extends Block {
    constructor(props: ButtonRadiusProps) {
        super(props);
    }

    protected render(): string {
        return `
            <button class="button-radius">${this.props.text || ''}</button>
        `
    }
}