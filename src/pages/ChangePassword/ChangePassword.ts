import Block from "../../core/Block";
import '../../index';
import avatar from "../../assets/avatar.jpg";

export class ChangePasswordPage extends Block {
    constructor() {
        super();

        this.setProps({
            avatar: avatar,

            onSubmit: (e: SubmitEvent) => {
                e.preventDefault();
                // @ts-ignore
                const oldPasswordEl = this.refs.oldPassword.refs.input._element as HTMLInputElement;
                // @ts-ignore
                const newPasswordEl = this.refs.newPassword.refs.input._element as HTMLInputElement;
                // @ts-ignore
                const newPasswordAgainEl = this.refs.newPasswordAgain.refs.input._element as HTMLInputElement;

                console.log({
                    oldPassword: oldPasswordEl.value,
                    newPassword: newPasswordEl.value,
                    newPasswordAgain: newPasswordAgainEl.value
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
                            type="password"
                            name="password"
                            title="Старый пароль"
                            placeholder='********'
                            ref="oldPassword"
                    }}}
                    {{{
                        ProfileRow
                            type="password"
                            title="Новый пароль"
                            name="password"
                            placeholder='**********'
                            ref="newPassword"
                    }}}

                    {{{
                        ProfileRow
                            type="password"
                            name="Повторите новый пароль"
                            name="password"
                            placeholder='**********'
                            ref="newPasswordAgain"
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