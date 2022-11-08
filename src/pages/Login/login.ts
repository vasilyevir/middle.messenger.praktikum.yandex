import Block from '../../core/Block';
import '../../index';
import './login.scss';

export class LoginPage extends Block {
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
                const login = this.refs.login.refs.inputRef._element as HTMLInputElement;
                // @ts-ignore
                const password = this.refs.password.refs.inputRef._element as HTMLInputElement;

                const form = {
                    login: login.value,
                    password: password.value,
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
                    buttonText="Авторизоваться"
                    linkText="Нет аккаунта?"
                    onSubmit=onSubmit
                    authLink="/register.html"
                }}
                    {{{ContainerInputAuth
                        type="text"
                        placeholder="Логин"
                        name="login"
                        onFocus=onFocus
                        ref="login"
                        id="login"
                    }}}
        
                    {{{ContainerInputAuth
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        onFocus=onFocus
                        ref="password"
                        id="password"
                    }}}
                {{/Card}}
              <a href="/">К главной странице</a>
          </main>
    `
    }
}