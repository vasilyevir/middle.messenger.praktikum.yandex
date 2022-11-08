import Block from "../../core/Block";

interface FormElementProps {
    onSubmit: () => void;
}

export class FormElement extends Block {
    constructor({onSubmit, ...props}: FormElementProps) {
        super({...props, events: {submit: onSubmit}});
    }

    protected render(): string {
        return `
            <form class="profile__container">
                <div class="profile__container profile__container_form" data-layout=1></div>
            </form>
        `
    }
}