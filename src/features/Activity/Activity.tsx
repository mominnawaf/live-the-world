import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { CircularProgress } from "@mui/material";
import Swiper from "./Swipper";
import styles from "./Activity.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUser } from "../User/userSlice";
import {
  selectActivity,
  getActivityBySlug,
  getNearByActivities,
  selectNearBYActivities
} from "./activitySlice";
import MapBox from "./MapBox";
import NearbyActivities from "./NearbyActivities";

function Activity() {
  const { slugActivity } = useParams<{ slugActivity: string }>();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const activity = useAppSelector(selectActivity);
  const nearByActivities = useAppSelector(selectNearBYActivities)
  useEffect(() => {
    dispatch(getActivityBySlug(slugActivity!.toString()));
  }, [user, slugActivity, dispatch]);
  useEffect(() => {
    if (activity.id) { // check if id is undefined
      dispatch(getNearByActivities(activity.id));
    }
  }, [activity, dispatch]);
  return (
    <>
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
            <NearbyActivities near={nearByActivities} />
          </>
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    </>
  );
}

export default Activity;
