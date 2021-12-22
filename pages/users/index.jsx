import Image from 'next/image'
import Head from 'next/head'
import arrUsers from './arrUsers.json'
import styles from './users.module.scss'
import photo1 from '../../public/user1.jpg'
import photo2 from '../../public/user2.jpg'
import photo3 from '../../public/user3.jpg'
import photo4 from '../../public/user4.jpg'


export default function Users({ users }) {

        return (
            <div>
                <Head>
                <title>Users page</title> 
                </Head>
                <p>main users page</p> 

                <div className={styles.box}>
                {users.map((user) => (
                    <div className={styles.tile} key={user.login.username}>
                        <p>{user.name.first} {user.name.last}</p>
                        {/* <Image src={user.picture.large} width='300' height='300' placeholder='blur'/> */}
                        <img src={user.picture.large}/>
                        
                    </div>
                ))}
                </div>            

            </div>
        )

}


// Эта функция вызывается во время сборки на стороне сервера.
// Она не будет вызываться на стороне клиента, поэтому в этой
// функции можно к примеру, напрямую обратиться к БД.
//export async function getStaticProps() {
export async function getServerSideProps() {
    const res = await fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
    const json = await res.json()
    const users = json.results
    console.log(users);
  
    // Эта функция возвращает объект c объектом props.
    // который в свою очередь будет передан в компонент Users(код которого описан выше)
    return {
      props: {
        users,
      },
    }
}