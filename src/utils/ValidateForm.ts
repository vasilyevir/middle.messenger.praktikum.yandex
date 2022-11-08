type RegExpInfo = {
    pattern: string;
    message: string;
}

const Regexp: Record<string, RegExpInfo> = {
    login: {
        pattern: '^[a-z]{1}[a-z0-9_-]{2,19}$',
        message: 'Логин не должен состоять только из цифр, также не должен содержать спецсимволы (допустимы дефис и нижнее подчёркивание).'
    },
    password: {
        pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,40}',
        message: 'Обязательно хотя бы одна заглавная буква и цифра'
    },
    phone: {
        pattern: '\\+?[0-9]{10,15}',
        message: 'Cостоит из цифр, может начинается с плюса. От 10 до 15 символов',
    },
    name: {
        pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я_\-]*$',
        message: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис или нижнее подчеркивание',
    },
    email: {
        pattern: '^[-a-z0-9_.]+@[a-z0-9]{2,}(.[a-z0-9]{2,})+',
        message: 'Введите корректный e-mail',
    },
}

export const ValidateForm = (nameInput: string, input: HTMLInputElement): string => {
    const regExp: RegExp = new RegExp(Regexp[nameInput].pattern);
    const inputValue = input.value;
    const isValid = !regExp.test(inputValue)

    if (nameInput === 'login') {
        if (inputValue.length < 3 || inputValue.length > 20) {
            return 'Логин должен быть от 3 до 20 символов';
        }

        if (isValid) {
            return Regexp.login.message;
        }
    }

    if (nameInput === 'password') {
        if (inputValue.length < 8 || inputValue.length > 40) {
            return 'Пароль должен быть от 8 до 40 символов'
        }

        if (isValid) {
            return Regexp.password.message;
        }
    }

    if (nameInput === 'phone') {
        if (inputValue.length < 10 || inputValue.length > 15) {
            return 'Телефон должен содержать от 10 до 15 символов'
        }

        if (isValid) {
            return Regexp.phone.message;
        }
    }

    if (nameInput === 'email' && isValid) {
        if (isValid) {
            return Regexp.email.message;
        }
    }

    if (nameInput === 'name' && isValid) {
        return Regexp.name.message;
    }

    return ''
}