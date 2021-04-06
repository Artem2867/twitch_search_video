import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Search.module.sass'
import Video from './components/video'
import Up from './components/up'
import Link from 'next/link'
import {getUserChanel, getChanelVideo} from '../apiTwitch'


const Search = () => {
  const [video, setVideo] = useState([])
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [num, setNum] = useState(0)
  const [userId, setUserId] = useState('')
  const apiSearch = async (name) => {
    const chanel = await getUserChanel(name)
    setUserId(chanel.users[0]._id)
    getVideo(chanel.users[0]._id)
  }
  const getVideo = async (Id) => {
    if(userId != Id) {
      const chanelVideos = await getChanelVideo(Id, 0)
      setVideo(chanelVideos.videos.map((i) => i))
      setTotal(chanelVideos._total)
      setNum(9)
    } else {
      const chanelVideos = await getChanelVideo(Id, num)
      const newVideo = chanelVideos.videos.map((i) => i)
      setVideo([...video, ...newVideo])
      setTotal(chanelVideos._total)
      setNum(num+9)
    }
  }
  function clickHandel(e) {
    e.preventDefault()
    setNum(0)
    setTotal(0)
    setVideo([])
    apiSearch(name)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitch Search Chanel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className='conteiner'> 
          <div className={styles.header_conteiner}> 
            <div className={styles.header_conteiner_title}>Введите название канала</div>
            <form onSubmit={clickHandel} className={styles.header_conteiner_form}>
              <div className={styles.header_conteiner_input}><input placeholder='Name chanel' onChange={(e)=> {
                setName(e.target.value)
              }}/></div>
              <div className={styles.header_conteiner_btn}><button type='submit'>Search</button></div>
            </form>
            <div className={styles.header_conteiner_btnMain}>
              <Link href='/main'>Избранные</Link>
            </div>
          </div>
        </div>
      </header>
        {video.length === 0? 
            <div className='message'>Введите название канала, чтоб посмотреть его видео</div>:
            <div className='conteiner content'> {video.map((i)=> {
            return <Video 
                        key={i._id}
                        id ={i._id}
                        title ={i.title}
                        imgUrl ={i.preview.medium}
                        url ={i.url}
                        main= {false}/>
          })}</div>}
          {video.length < total? <div className={styles.wrapperBtn}><button className={styles.wrapperBtn_MoreVideo} onClick={() => getVideo(userId)}>Добавить еще видео</button></div>:null}
          <div className='up'>
              <Up/>
          </div>
      </div>
  )
}


export default Search