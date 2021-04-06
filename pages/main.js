import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Main.module.sass'
import Link from 'next/link'
import Video from './components/video'
import Up from './components/up'
import {getMainVideo} from '../apiTwitch' 


const Main = () => {
  const [chanel, setChanel] = useState([])
  useEffect(async ()=> {
      setChanel(await getMainVideo())
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Chanel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className='conteiner'> 
          <div className={styles.header_conteiner}> 
            <div className={styles.header_conteiner_title}>Категория Избранное </div>
            <div className={styles.header_conteiner_btnBackSearch}><Link href='/'>Вернуться на страницу поиска</Link></div>
          </div>
        </div>
      </header>
        {chanel.length === 0? <div className='message'>Список пуст</div>:
        <div className='conteiner content'> {chanel.map((i)=> {
            return <Video 
                          key={i.id}
                          id ={i.id}
                          title ={i.title}
                          imgUrl ={i.imgUrl}
                          url ={i.url}
                          main= {true}
                          setChanel={setChanel}/>
        })}</div>}
        <div className='up'>
              <Up/>
        </div>
    </div>
  )
}


export default Main