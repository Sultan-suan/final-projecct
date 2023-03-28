import React, {useEffect, useState} from 'react';
import s from './Login.module.css';

type LoginPropsType = {
    isAuth: boolean
    setIsAuth: (e: any) => void;
}

export const Login = (props: LoginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный емейл")
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 10) {
            setPasswordError('Пароль не должен быть меньше 5 и длиннее 10')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    const login = (event: any) => {
        event.preventDefault();
            props.setIsAuth(true)
            console.log(props.isAuth)
    }

    // useEffect(() => {
    //     axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/login", {email, password})
    //
    // }, [])

    return (
        <form className={s.form} onSubmit={login}>

            <h1>Authorization</h1>
            <h1>Sign In</h1>

            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}

            <input value={email}
                   onChange={e => emailHandler(e)}
                   onBlur={e => blurHandler(e)}
                   name='email'
                   type='text'
                   placeholder='Enter your email...'
            />

            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}

            <input value={password}
                   onChange={e => passwordHandler(e)}
                   onBlur={e => blurHandler(e)}
                   name='password'
                   type='password'
                   placeholder='Enter your password...'/>
            <a href={"about"}>Forgot password</a>
            <button type="submit">Log in</button>
        </form>
    );
};
