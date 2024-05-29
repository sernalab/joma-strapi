import { useState, useEffect } from "react";

import { getVideos } from "../services/api";
import YoutubeCarousel from "../components/YoutubeCarousel";

function VideosPage() {
  const [videosByCategory, setVideosByCategory] = useState({});

  useEffect(() => {
    async function fetchVideos() {
      const videos = await getVideos();
      const categorizedVideos = videos.reduce((acc, video) => {
        const category = video.attributes.category || "Uncategorized";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push({
          id: video.id,
          title: video.attributes.title,
          link: video.attributes.link,
        });
        return acc;
      }, {});
      setVideosByCategory(categorizedVideos);
    }
    fetchVideos();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 ">
        {Object.keys(videosByCategory).map((category) => (
          <div key={category}>
            <h4 className="text-2xl mt-10 mb-10">{`Vídeos de ${category}`}</h4>
            <YoutubeCarousel videos={videosByCategory[category]} />
          </div>
        ))}
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
