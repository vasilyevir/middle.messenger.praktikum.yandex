import Block from '../../core/Block';
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
                const inputEl = e.target;
                console.log(inputEl, 'submit');
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
        }}
            {{{ContainerInputAuth
                type="text"
                placeholder="Login"
                name="login"
                onFocus=onFocus
                ref="login"
                id="login"
            }}}

            {{{ContainerInputAuth
                type="password"
                placeholder="Password"
                name="password"
                onFocus=onFocus
                ref="password"
                id="password"
            }}}
        {{/Card}}
      </main>
    `
    }
}