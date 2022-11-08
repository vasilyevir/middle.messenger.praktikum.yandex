import Block from '../../core/Block';
import '../../index';
import './Profile.scss';
// @ts-ignore
import avatar from "../../assets/avatar.jpg";

export class ProfileEditPage extends Block {
    constructor() {
        super()
        this.setProps({
            avatar: avatar,
            mail: 'vasiliy@mail.ru',
            login: 'ivanivanov',
            name: 'Иван',
            secondName: 'Иванов',
            nameInChat: 'Иван',
            phone: '+79110009922',
            isEditable: false,
            onSubmit: (e: SubmitEvent) => {
                e.preventDefault();
                const mailRowEl = this.refs.emailRow.refs.input._element as HTMLInputElement;
                const loginRowEl = this.refs.loginRow.refs.input._element as HTMLInputElement;
                const nameRowEl = this.refs.nameRow.refs.input._element as HTMLInputElement;
                const surnameRowEl = this.refs.surnameRow.refs.input._element as HTMLInputElement;
                const nameInChatRowEl = this.refs.nameInChatRow.refs.input._element as HTMLInputElement;
                const phoneRowEl = this.refs.phoneRow.refs.input._element as HTMLInputElement;

                console.log({
                    mail: mailRowEl.value || mailRowEl.placeholder,
                    login: loginRowEl.value || loginRowEl.placeholder,
                    name: nameRowEl.value || nameRowEl.placeholder,
                    surname: surnameRowEl.value || surnameRowEl.placeholder,
                    nameInChat: nameInChatRowEl.value || nameInChatRowEl.placeholder,
                    tel: phoneRowEl.value || phoneRowEl.placeholder
                })
            }
        })
    }

    protected render(): string {
        // language=hbs
        return `
            {{#Profile}}
                <div class="profile__avatar">
                    <img class="profile__avatar-image" src="${this.props.avatar}">
                    <div class="profile__avatar-hover">
                        <p class="profile__avatar-text">Поменять аватар</p>
                    </div>
                </div>
                {{#FormElement
                        onSubmit=onSubmit
                }}
                        {{{
                            ProfileRow
                                value="${this.props.mail}"
                                type="email"
                                title="Почта"
                                name="email"
                                onFocus=onFocus
                                notDisabled=isEditable
                                ref="emailRow"
                        }}}
                        {{{
                            ProfileRow
                                onFocus=onFocus
                                value="${this.props.login}"
                                type="string"
                                title="Логин"
                                name="login"
                                notDisabled=isEditable
                                ref="loginRow"
                        }}}
                        {{{
                            ProfileRow
                                value="${this.props.name}"
                                type="string"
                                title="Имя"
                                name="name"
                                notDisabled=isEditable
                                onFocus=onFocus
                                ref="nameRow"
                        }}}
                        {{{
                            ProfileRow
                                value="${this.props.secondName}"
                                onFocus=onFocus
                                type="string"
                                title="Фамилия"
                                name="name"
                                notDisabled=isEditable
                                ref="surnameRow"
                        }}}
                        {{{
                            ProfileRow
                                value="${this.props.nameInChat}"
                                type="string"
                                title="Имя в чате"
                                onFocus=onFocus
                                name="name"
                                notDisabled=isEditable
                                ref="nameInChatRow"
                        }}}
                        {{{
                            ProfileRow
                                value="${this.props.phone}"
                                type="tel"
                                title="Телефон"
                                name="phone"
                                onFocus=onFocus
                                notDisabled=isEditable
                                ref="phoneRow"
                        }}}
                        {{{
                            ButtonRadius
                                text="Сохранить"
                        }}}
                    {{/FormElement}}
            {{/Profile}}
        `
    }
}
