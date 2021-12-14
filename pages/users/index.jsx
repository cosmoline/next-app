import Image from 'next/image'
import Head from 'next/head'
import arrUsers from './arrUsers.json'
import styles from './users.module.scss'
import photo1 from '../../public/user1.jpg'
import photo2 from '../../public/user2.jpg'
import photo3 from '../../public/user3.jpg'
import photo4 from '../../public/user4.jpg'


export default function Users() {


        //fetch('https://fakestoreapi.com/products')
        //<Image src={nextImgSrc} alt="siemens img" width='500' height='500' placeholder='blur'/>


        return (
            <div>
                <Head>
                <title>Users page</title> 
                </Head>
                <p>main users page</p> 

                <div className={styles.box}>
                {arrUsers.map((user) => (
                    <div className={styles.tile} key={user.login}>
                        <p>{user.name}</p>
                        <p>{user.photo}</p>
                        <Image src={photo1} width='500' height='500'/>
                        
                    </div>
                ))}
                </div>            

            </div>
        )

}

