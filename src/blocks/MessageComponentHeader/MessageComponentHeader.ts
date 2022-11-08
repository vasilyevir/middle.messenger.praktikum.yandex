import Block from '../../core/Block';

import './message-component-header.scss';

interface MessageComponentHeaderProps {
    src: string;
    altImage: string;
    username: string;
}

export class MessageComponentHeader extends Block {
    constructor({src, username, altImage}: MessageComponentHeaderProps) {
        super({src, username, altImage});
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="chat-header">
                <div class="chat-header__user-info">
                    <img class="chat-header__avatar-user" src="{{src}}" alt="{{altImage}}">
                    <p class="chat-header__username">{{username}}</p>
                </div>
                <button class="chat-header__button chat-header__button_checked">
                    <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.5" cy="2" r="1.5" fill="#3369F3"/>
                        <circle cx="1.5" cy="8" r="1.5" fill="#3369F3"/>
                        <circle cx="1.5" cy="14" r="1.5" fill="#3369F3"/>
                    </svg>
                </button>
            </div>
    `
    }
}
