import Block from '../../core/Block';
import '../../index';
import './Main.scss';

export class MainPage extends Block {
    constructor() {
        super();

        this.setProps({
            linkToProfile: './profile.html',
            chats: [
                {
                    link: "./active-chat.hbs",
                    avatar: "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1",
                    altImage: "Аватар",
                    username: "Андрей",
                    lastMessage: "Hello, World!",
                    time: "10.59",
                    amountUnreadMessage: 3
                },
                {
                    link: "./active-chat.hbs",
                    avatar: "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1",
                    altImage: "Аватар",
                    username: "Андрей",
                    lastMessage: "Hello, World!",
                    time: "10.59",
                }
            ],
        })
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="messenger-grid">
                <header>
                    <div class="navbar">
                        {{{SearchHeader linkToProfile="${this.props.linkToProfile}"}}}
                        <div class="chat-container">
                            {{#each chats}}
                                {{#with this}}
                                    {{{
                                        Chat
                                            amountUnreadMessage=amountUnreadMessage
                                            link="{{link}}"
                                            avatar="{{avatar}}"
                                            altImage="{{altImage}}"
                                            username="{{username}}"
                                            lastMessage="{{lastMessage}}"
                                            time="{{time}}"
                                    }}}
                                {{/with}}
                            {{/each}}
                        </div>
                    </div>
                </header>
                <main>
                    <div class="active-chat">
                        {{{MessageComponent}}}
                    </div>
                </main>
            </div>
              
        `
    }
}

// {{> "search-header" this}}
