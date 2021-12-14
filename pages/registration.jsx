import Image from 'next/image'
import Head from 'next/head'

export default function Registration() {

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
              username: event.currentTarget.login.value,
              password: event.currentTarget.password.value
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return (
        <div>
            <Head>
               <title>Registration page</title> 
            </Head>
            <p>It is Registration page</p> 

            <div>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <fieldset>
                    <legend>Введите регистрационные данные</legend>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value=""
                        />
                    </div>                    
                    <div>
                        <input
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value=""
                        />
                    </div>                    
                    <div>
                        <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value=""
                        />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}