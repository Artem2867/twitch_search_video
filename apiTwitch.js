
export const getUserChanel = async (name) => {
    const response = await fetch(`https://api.twitch.tv/kraken/users?login=${name}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': '6cbyizs4lc5ym8i9489ittms7cgry4'
    }
    })
    const chanel = await response.json()
    return chanel
  }
export const getChanelVideo = async (Id,num ) => {
    const res = await  fetch(`https://api.twitch.tv/kraken/channels/${Id}/videos?limit=9;offset=${num}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': '6cbyizs4lc5ym8i9489ittms7cgry4'
        }
      })
      const videos = await res.json()
      return videos
}
export  const addVideo = (video) => {
  fetch('/api/test', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      video
    })
  }).then((res) => {
    return res.ok
  })
}
export const deleteVideo = (id) => {
  fetch('/api/test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id
    })
  }).then((res) => {
    return res.ok
  })
}
export const getMainVideo = async () => {
      const response = await fetch(`/api/test`)
      const chanel = await response.json()
      return chanel
}