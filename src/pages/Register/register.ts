import Block from '../../core/Block';
import '../../index';
import './register.scss';

export class RegisterPage extends Block {
    constructor() {
        super();

        this.setProps({
            errors: '',
            onFocus: (e: FocusEvent): void => {
                const inputEl = e.target as HTMLInputElement;
                const inputName = inputEl.name;

                // @ts-ignore
                this.refs[inputName].refs.errorRef.setProps({
                    text: '',
                })
            },
            onSubmit: (e: SubmitEvent): void => {
                e.preventDefault();
                e.stopPropagation();
                // @ts-ignore
                const email = this.refs.email.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const login = this.refs.login.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const name = this.refs.name.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const secondName = this.refs.secondName.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const phone = this.refs.phone.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const password = this.refs.password.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const passwordAgain = this.refs.passwordAgain.refs.inputRef._element as HTMLInputElement;

                const form = {
                    email: email.value,
                    login: login.value,
                    name: name.value,
                    secondName: secondName.value,
                    phone: phone.value,
                    password: password.value,
                    passwordAgain: passwordAgain.value
                }

                console.log(form);
            },
        })
    }
    protected render(): string {
        // language=hbs
        return `
            <main class="auth-container">
                {{#Card 
                    header="Login"
                    buttonText="Зарегистрироваться"
                    linkText="Войти"
                    onSubmit=onSubmit
                    authLink="./login.html"
                }}
                
                    {{{ContainerInputAuth
                            type="email"
                            placeholder="Почта"
                            name="email"
                            onFocus=onFocus
                            ref="email"
                            id="email"
                    }}}
                    
                    {{{ContainerInputAuth
                        type="text"
                        placeholder="Логин"
                        name="login"
                        onFocus=onFocus
                        ref="login"
                        id="login"
                    }}}
                
                    {{{ContainerInputAuth
                            type="name"
                            placeholder="Имя"
                            name="name"
                            onFocus=onFocus
                            ref="name"
                            id="name"
                    }}}
                
                    {{{ContainerInputAuth
                            type="text"
                            placeholder="Фамилия"
                            name="name"
                            onFocus=onFocus
                            ref="secondName"
                            id="secondName"
                    }}}
                
                    {{{ContainerInputAuth
                            type="phone"
                            placeholder="Телефон"
                            name="phone"
                            onFocus=onFocus
                            ref="phone"
                            id="phone"
                    }}}
                
                    {{{ContainerInputAuth
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        onFocus=onFocus
                        ref="password"
                        id="password"
                    }}}
                    
                    {{{ContainerInputAuth
                            type="password"
                            placeholder="Пароль (ещё раз)"
                            name="password"
                            onFocus=onFocus
                            ref="passwordAgain"
                            id="passwordAgain"
                    }}}
                {{/Card}}
            </main>
    `
    }
}