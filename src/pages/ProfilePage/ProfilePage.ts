import Block from '../../core/Block';
import '../../index';
import './Profile.scss';
// @ts-ignore
import avatar from "../../assets/avatar.jpg";

export class ProfilePage extends Block {
    constructor() {
        super()

        this.setProps({
            avatar: avatar,
            mail: 'vasiliy@mail.ru',
            login: 'ivanivanov',
            name: 'Иван',
            secondName: 'Иванов',
            nameInChat: 'Иван',
            phone: '+7 (911) 000 99 22',
            isEditable: true,

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
                {{#FormElement}}
                     {{{
                        ProfileRow
                            value="${this.props.mail}"
                            type="email"
                            title="Почта"
                            name="email"
                            notDisabled=isEditable
                            ref="mailRow"
                    }}}
                    {{{
                        ProfileRow
                            value="${this.props.login}"
                            type="string"
                            title="Логин"
                            name="login"
                            disabled=isEditable
                            notDisabled=onBlur
                    }}}
                    {{{
                        ProfileRow
                            value="${this.props.name}"
                            type="string"
                            title="Имя"
                            name="name"
                            onBlur=onBlur
                            notDisabled=isEditable
                    }}}
                    {{{
                        ProfileRow
                            value="${this.props.secondName}"
                            type="string"
                            title="Фамилия"
                            name="name"
                            onBlur=onBlur
                            notDisabled=isEditable
                    }}}
                    {{{
                        ProfileRow
                            value="${this.props.nameInChat}"
                            type="string"
                            title="Имя в чате"
                            name="name"
                            onBlur=onBlur
                            notDisabled=isEditable
                    }}}
                    {{{
                        ProfileRow
                            value="${this.props.phone}"
                            type="tel"
                            title="Телефон"
                            name="phone"
                            onBlur=onBlur
                            notDisabled=isEditable
                    }}}
                    {{{
                        ProfileButton
                            title="Изменить данные"
                            isColorRed="false"
                            link="./profile-edit.html"
                    }}}
                    
                    {{{
                        ProfileButton
                            title="Изменить пароль"
                            isColorRed="false"
                            link="./change-password.html"
                    }}}
                    
                    {{{
                        ProfileButton
                            title="Выйти"
                            isColorRed="true"
                            link="./login.html"
                    }}}
                    
                {{/FormElement}}
            {{/Profile}}
            
        `
    }
}
