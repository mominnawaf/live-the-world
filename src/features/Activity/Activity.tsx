import {useParams} from 'react-router-dom'
function Activity() {
    const {slugActivity} = useParams()
    console.log(slugActivity)
  return (
    <div>Activity</div>
  )
}

export default Activity