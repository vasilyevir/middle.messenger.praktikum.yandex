import Block from '../../core/Block';
import '../../index';
import arrow from '../../assets/icons/arrow.svg';
import './Profile.scss';

export class Profile extends Block {
    constructor() {
        super();

        this.setProps({
            link: "/",
        })
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="messenger-grid messenger-grid_change-profile">
                <header class="navbar navbar_change-profile">
                        <a href="${this.props.link}" class="navbar__link">
                            <img src="${arrow}">
                        </a>
                </header>
                <main >
                    <div class="main" style="width: 100%" data-layout=1></div>
                </main>
            </div>
            
        `
    }
}