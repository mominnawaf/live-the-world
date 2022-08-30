import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectUser} from '../User/userSlice'
import {selectActivity, getActivityBySlug} from './activitySlice'


function Activity() {
    const { slugActivity } = useParams<{slugActivity: string}>();
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const activity = useAppSelector(selectActivity)
    useEffect(()=>{
      dispatch(getActivityBySlug(slugActivity!.toString()))
    },[user, dispatch, slugActivity])
  return (
    <div>Activity</div>
  )
}

export default Activity