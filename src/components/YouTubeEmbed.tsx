interface YouTubeEmbedProps {
    ytLink: string;
}

export default function YouTubeEmbed({ ytLink }: YouTubeEmbedProps) {
    console.log("Attempt to get video ID");
    let videoId = ytLink.split("watch?v=")[1] ?? "";
    console.log(videoId);
    videoId = videoId.split("&")[0] ?? "";
    console.log(videoId);

    if (!videoId) {
        return null;
    }

    return (
        <div className="flex w-full flex-col items-center">
            <h2 className="text-center text-base font-semibold leading-7">
                Video explainer
            </h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="mt-2"
            />
        </div>
    );
}
