import Image from 'next/image'
import nextImgSrc from '../public/user1.jpg'
import Head from 'next/head'

export default function Profile() {
    return (
        <div>
            <Head>
               <title>Profile page</title> 
            </Head>
            <p>It's profile page</p> 
            <p>
                Тут информация о пользователе. Фото с https://tools.seo-zona.ru/face.html
            </p>
              
            <Image src={nextImgSrc} alt="siemens img" width='300' height='300' placeholder='blur'/>
        </div>
    )
}