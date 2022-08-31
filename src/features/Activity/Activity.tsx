import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button, CircularProgress } from "@mui/material";
import Swiper from "./Swipper";
import styles from "./Activity.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUser, addFav, removeFav, selectFavTrips } from "../User/userSlice";
import {
  selectActivity,
  getActivityBySlug,
  getNearByActivities,
  selectNearBYActivities
} from "./activitySlice";
import MapBox from "./MapBox";
import {isFav} from './isFav'
import NearbyActivities from "./NearbyActivities";

function Activity() {
  const { slugActivity } = useParams<{ slugActivity: string }>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const activity = useAppSelector(selectActivity);
  const nearByActivities = useAppSelector(selectNearBYActivities)
  const trips = useAppSelector(selectFavTrips)
  useEffect(() => {
    dispatch(getActivityBySlug(slugActivity!.toString()));
  }, [user, slugActivity, dispatch]);
  useEffect(() => {
    if (activity.id) { // check if id is undefined
      dispatch(getNearByActivities(activity.id));
    }
  }, [activity, dispatch]);

  const addActivityToFav = ()=>{
    dispatch(addFav(activity.id))
  }
  const removeActivityToFav = ()=>{
    dispatch(removeFav(activity.id))
  }

  return (
    <>
    {isFav(activity.id, trips) ?
    <Button className={styles.saveBtnTop} onClick={()=>removeActivityToFav()} >Saved</Button> : 
    <Button className={styles.saveBtnTop} onClick={()=>addActivityToFav()} >Save</Button>}
    
      {activity.images ? <Swiper images={activity.images} /> : null}
      <div style={{ padding: "25px 100px 0px" }}>
        {activity.images ? (
          <>
            <div className={styles.activityContainer}>
              <div className={styles.labelContainer}>
                {activity.labels.map((label) => {
                  return (
                    <div className={styles.label} key={label.id}>
                      {label.name}
                    </div>
                  );
                })}
              </div>
              <div className={styles.activityTitle}>{activity.name}</div>
              <ReactMarkdown className={styles.reactMarkDownShort}>
                {activity.description_short ? activity.description_short : ""}
              </ReactMarkdown>
              <ReactMarkdown className={styles.reactMarkDownLong}>
                {activity.description_long ? activity.description_long : ""}
              </ReactMarkdown>
            </div>
            <MapBox
              longitude={activity.latitude}
              latitude={activity.latitude}
            />
            <NearbyActivities near={nearByActivities} trips={trips} />
          </>
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    </>
  );
}

export default Activity;
