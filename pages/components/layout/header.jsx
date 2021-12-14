import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './header.module.scss'

export default function Header() {

    const router = useRouter()

    const handleClick = () => {
        console.log(router);
        router.push('/users/user1')
    }



    return (
        <header className={styles.header}>
            <Link href="/"> 
                <a>Домой</a>
            </Link>
             &nbsp;|&nbsp;  
             <Link href="/users">
                <a>Пользователи</a>
            </Link> 
            &nbsp;|&nbsp;  
             <Link href="profile">
                <a>Профиль пользователя</a>
            </Link> 
            &nbsp;|&nbsp;
            <Link href="signin">
                <a>Вход</a>
            </Link>                                 
            &nbsp;|&nbsp;
            <Link href="registration">
                <a>Регистрация</a>
            </Link>                    
            &nbsp;&nbsp;            
            <button onClick={handleClick}>
                Go to user 1
            </button>

            
        </header>
    )
}
