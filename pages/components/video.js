import {useState} from 'react'
import styles from '../../styles/Video.module.sass'
import {addVideo, deleteVideo, getMainVideo} from '../../apiTwitch'
const Video = ({id, title, imgUrl, url, main, setChanel}) => {
  const [addVideoToMain, setAddVideoToMain] = useState(main)
  const video = {
    id,
    title,
    imgUrl, 
    url
  }
  const addNewVideo = async(e, video) => {
    e.preventDefault()
    const res = await addVideo(video)
    setAddVideoToMain(true)
  }
  const deleteOldVideo = async (e, id) => {
    e.preventDefault()
    await deleteVideo(id)
    const newArrVideo = await getMainVideo()
    setChanel(newArrVideo)
  }
  return (
    <div key={id} className={styles.video}>
        <div className={styles.video_content}>
          <a href={url}>
            <div className={styles.video_content_title}>
              {title}
            </div>
            <div className={styles.video_content_img}>
              <img src={imgUrl} alt='video'/>
            </div>
          </a>
        </div>
        {main === false? <button className={styles.video_btn} disabled={addVideoToMain} onClick={(e)=> addNewVideo(e,video)}>Добавить в избранное</button>: <button className={styles.video_btn} onClick={(e)=> deleteOldVideo(e,id)}>Удалить из этого списка</button>}
    </div>
  )
}


export default Video