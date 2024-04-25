import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

const YoutubeCarousel = ({ videos }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: true,
      pagination: { type: "bullets", clickable: true },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {videos.map((video, index) => (
        <swiper-slide key={index}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
            width="100%"
            height="315"
          ></iframe>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default YoutubeCarousel;
