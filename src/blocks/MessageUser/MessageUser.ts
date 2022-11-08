import Block from '../../core/Block';

import './message-user.scss';

interface MessageUserProps {
    isUserMessage: boolean;
    text: string;
    isNotReading: boolean;
    time: string;
    image: string;
}

export class MessageUser extends Block {
    constructor(props: MessageUserProps) {
        super(props);
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="message-row {{#if ${this.props.isUserMessage}}}message-row_user{{else}}message-row_another-user{{/if}}">
                <div class="message {{#if ${this.props.isUserMessage}}}message_user{{else}}message_another-user{{/if}}">
                    {{#if ${this.props.text !== '{{text}}'}}}
                        <p class="message__text">
                            ${this.props.text}
                            <span class="message__time message__time_text">
                                {{#if ${this.props.isNotReading}}}
                                    <span class="message__status-reading {{#if ${this.props.isNotReading}}}message__status-reading_unread{{/if}}">
                                        <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>
                                        </svg>
                                    </span>
                                {{/if}}
                                ${this.props.time}
                            </span>
                        </p>
                    {{/if}}
                    {{#if ${this.props.image !== '{{image}}'}}}
                        <img class="message__image" src="${this.props.image}">
                        <p class="message__time message__time_image">
                            {{#if ${this.props.isNotReading}}}
                                <span class="message__status-reading {{#if ${this.props.isNotReading}}}message__status-reading_unread{{/if}}">
                                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                                        <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                                        <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>
                                    </svg>
                                </span>
                            {{/if}}
                            ${this.props.time}
                        </p>
                    {{/if}}
                </div>
            </div>
    `
    }
}
