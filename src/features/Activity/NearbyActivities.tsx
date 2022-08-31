import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Activity.module.css";
import { NearByActivitiesType } from "./activity.type";
import {useNavigate,useLocation, NavigateFunction} from 'react-router-dom'
import { Button } from "@mui/material";

function NearbyActivities({ near }: { near: NearByActivitiesType }) {
    const nav : NavigateFunction= useNavigate()
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }, [location]);
    return (
        <div>
            <span className={styles.nearByActivityTitle}>Recommended Activities Nearby</span>
            {near.length ? (
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    style={{marginTop: 25}}
                >
                    {near.map((n) => {
                        return (
                            <SwiperSlide 
                            key={n.id} 
                            className={styles.bottomSwiperSlide} 
                            onClick={()=> nav(`/Activity/${n.slug}`)}>
                                <img
                                    className={styles.swiperImage}
                                    src={n.images[0].small}
                                    alt={n.name}
                                />
                                <span className={styles.nearByActivityName}>{n.name}</span>
                                <div className={styles.nearByActivityDescription}>
                                    {n.description_short}..
                                    <Button variant="text" className={styles.readMoreBtn}>Read More</Button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            ) : null}
        </div>
    );
}

export default NearbyActivities;
