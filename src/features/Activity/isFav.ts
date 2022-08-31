import {
    TripActivityType
} from '../User/user.types'

export const isFav=(activityId : number,trips : TripActivityType ) =>{
    if(activityId && trips[0]){
    const trip = trips.filter(trip => trip.id === activityId)
    if(trip[0]) return true 
    else return false
    }
  }