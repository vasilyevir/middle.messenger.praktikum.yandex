import Block from '../../core/Block';
import './Card.scss';

interface CardProps {
    onSubmit: () => void;
    buttonText: string;
    linkText: string;
    authLink: () => Block;
}

export class Card extends Block {
    constructor({onSubmit, ...props}: CardProps) {
        super({...props, events: {submit: onSubmit}});
    }

    protected render(): string {
        // language=hbs
        return `
            <form class="card">
                <div class="card__info-block">
                    <h1 class="card__header">{{header}}</h1>
                    <div class="card__input-container" data-layout=1></div>
                </div>
                <div class="card__button-container">
                    {{{ButtonRadius
                            text="${this.props.buttonText}"
                    }}}
                    {{{LinkAuth
                            text="${this.props.linkText}"
                            link="${this.props.authLink}"
                    }}}
                </div>
            </form>
        `
    }
}