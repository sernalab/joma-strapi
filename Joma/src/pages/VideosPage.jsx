import YoutubeCarousel from "../components/YoutubeCarousel";

import { carouselTop, carouselMiddle } from "../data/videosData";

function VideosPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 ">
        <h4 className="text-2xl mb-10">Vídeos de XXXXXXXXXX</h4>
        <YoutubeCarousel videos={carouselTop} />

        <h4 className="text-2xl mt-10 mb-10">Vídeos de XXXXXXXXXX</h4>
        <YoutubeCarousel videos={carouselMiddle} />

        <p className="mt-10">
          Puedes encontrar más videos en nuestro canal de{" "}
          <a
            className="font-bold"
            href="https://www.youtube.com/@jomaimport-exports.l.4635/videos"
            target="_blank"
          >
            YouTube
          </a>
          .
        </p>
      </section>
    </>
  );
}

export default VideosPage;
