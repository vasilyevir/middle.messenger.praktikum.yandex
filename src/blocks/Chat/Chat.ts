import Block from '../../core/Block';
import './chat.scss';

interface ChatProps {
    amountUnreadMessage: number;
    link: string;
    avatar: string;
    altImage: string;
    username: string;
    lastMessage: string;
    time: string;
    isYourMessage?: boolean;
    isChatSelected?: boolean;
}

export class Chat extends Block {
    constructor(props: ChatProps) {
        super(props);
    }

    protected render(): string {
        // language=hbs
        return `
            <a href="{{link}}" class="chat {{#if isChatSelected}}chat_selected{{/if}}">
                <div class="chat__info-container">
                    <img class="chat__avatar" src="{{avatar}}" alt="{{altImage}}" >
                    <div class="chat__info-user">
                        <h2 class="chat__username">{{username}}</h2>
                        <p class="chat__last-message">
                            {{#if isYourMessage}}<span class="chat__last-message_is-your">Вы:</span>{{/if}}
                            {{lastMessage}}
                        </p>
                    </div>
                </div>
                <div class="chat__message-info">
                    <p class="chat__time">{{time}}</p>
                    {{#if amountUnreadMessage}}<span class="chat__unread-message">${this.props.amountUnreadMessage}</span>{{/if}}
                </div>
            </a>
        `
    }
}