import Image from 'next/image'
import nextImgSrc from '../public/user1.jpg'
import Head from 'next/head'

export default function Profile() {
    return (
        <div>
            <Head>
               <title>Profile page</title> 
            </Head>
            <p>It is profile page</p> 
            <p>
                User profile page.
            </p>
              
            <Image src={nextImgSrc} alt="siemens img" width='300' height='300' placeholder='blur'/>
        </div>
    )
}