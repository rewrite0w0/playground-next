import ReactPlayer from "react-player";

export default function Video() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iSlAIizlcb8?&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}