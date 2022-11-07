import Block from '../../core/Block';

import './message-component.scss';

interface MessageComponentProps {}

export class MessageComponent extends Block {
    constructor(props: MessageComponentProps) {
        super(props);

        this.setProps({
            messages: [
                {
                    text: 'Вау! Какой крутой и толстый кот!',
                    isUserMessage: true,
                    isNotReading: true,
                    time: '11.53'
                },
                {
                    image: 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1',
                    isUserMessage: false,
                    time: '11.52',
                    text: '',
                }
            ],
            user: {
                src: 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1',
                username: 'Илья Ильич',
                altImage: 'Avatar'
            },
            message: '',
            messageIsDisabled: true,
            messageType: "text",
            messagePlaceholder: "Введите ваше сообщение",
            messageName: "message",
            onSubmit: () => {
                // @ts-ignore
                const inputEl = this.refs.messageRow.refs.message._element as HTMLInputElement;
                const value = inputEl.value;
                inputEl.blur();

                if (value.length !== 0) {
                    this.setProps({
                        messages: [
                            {
                                text: value,
                                isUserMessage: true,
                                isNotReading: true,
                                time: '11.54'
                            },
                            ...this.props.messages
                        ],
                        message: ''
                    });

                    console.log(value);
                }
            },
            onBlur: (e: FocusEvent) => {
                const inputEl = e.target as HTMLInputElement;
                const val = inputEl.value;

                this.setProps({message: val});
                if (val.length > 0) {
                    this.setProps({messageIsDisabled: false});
                }
            },
        })
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="communication-container">
                {{#with user}}
                    {{{
                        MessageComponentHeader
                            src=src
                            username=username
                            altImage=altImage
                    }}}
                {{/with}}
                <div class="message-container">
                    {{#each messages}}
                        {{#with this}}
                            {{{
                                MessageUser
                                    isUserMessage=isUserMessage
                                    isNotReading=isNotReading
                                    text="{{text}}"
                                    time="{{time}}"
                                    image="{{image}}"
                            }}}
                        {{/with}}
                    {{/each}}
                </div>
                {{{
                    MessageRow
                        messageIsDisabled="${this.props.messageIsDisabled}"
                        type="${this.props.messageType}"
                        placeholder="${this.props.messagePlaceholder}"
                        name="${this.props.messageName}"
                        value="${this.props.message}"
                        onBlur=onBlur
                        onSubmit=onSubmit
                        ref="messageRow"
                }}}
            </div>
    `
    }
}
