import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Activity.module.css";
import { Image } from "./activity.type";

function Swipper({ images }: { images: Image[] }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.topSwiper}
      lazy={true} // Enable lazy loading
      preloadImages = {false} // Disable preloading of all images
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.id} className={styles.swiperSlide}>
            <img
              src={image.small}
              alt={image.name}
              className={styles.img}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Swipper;
