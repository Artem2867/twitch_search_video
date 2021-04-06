import db from '../../db'
let newArrayUsers = {
      ...db, 
      video: [...db.video]}
export default (req, res) => {
  const {body, method} = req
  switch(method) {
    case'GET':
            res.status(200).json(newArrayUsers.video)
            break
    case'PUT':
            const addNewUser = newArrayUsers.video.push(body.video)
            res.status(200).json(addNewUser)
            break
    case'DELETE':
            const deleteVideo = newArrayUsers.video.filter((i)=> i.id != body.id)
            newArrayUsers = {
                  ...newArrayUsers,
                  video: [...deleteVideo]
            }
            res.status(200).json(newArrayUsers)
            break
    default:
          res.setHeader('Allow', ['GET', 'PUT'])
          res.status(405).end(`Method ${method} Not Allowed`)
  }
}
