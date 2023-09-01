import ExternalLink from '@/public/images/ExternalLink';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  artist: string;
  title: string;
  imageUrl: string;
  album: string;
  releaseDate: string;
  youtubeUrl?: string;
  soundCloudUrl?: string;
  spotifyUUID?: string;
}
function InfoBox({
  album,
  artist,
  imageUrl,
  releaseDate,
  title,
  youtubeUrl,
  soundCloudUrl,
  spotifyUUID,
}: Props) {
  return (
    <div className="flex md:flex-col h-fit items-start gap-2 md:w-60 [grid-area:info] border border-white rounded p-4">
      <Image
        src={imageUrl}
        alt={`${title} album cover`}
        width={96}
        height={96}
        className="rounded-md w-[6rem] h-[6rem] md:w-full md:h-auto"
      />
      <div className="flex flex-col gap-1">
        <p className="text-gray">{`By: ${artist}`}</p>
        <p className="text-gray">{`Album: ${album}`}</p>
        <p className="text-gray">{`Released: ${releaseDate}`}</p>
        {spotifyUUID && (
          <Link
            className="flex gap-2 hover:underline pt-1 items-center"
            href={`spotify://track/${spotifyUUID}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/spotify.png"
              height={16}
              width={16}
              alt="Spotify logo"
            />
            <p className="text-gray">Spotify</p>
            <ExternalLink height={16} />
          </Link>
        )}
        {youtubeUrl && (
          <Link
            className="flex gap-2 hover:underline pt-1 items-center"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/youtube.png"
              height={16}
              width={16}
              alt="Youtube logo"
            />
            <p className="text-gray">Youtube</p>
            <ExternalLink height={16} />
          </Link>
        )}
        {soundCloudUrl && (
          <Link
            className="flex gap-2 hover:underline pt-1 items-center"
            href={soundCloudUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/soundcloud.png"
              height={16}
              width={16}
              alt="Sound cloud logo"
            />
            <p className="text-gray">Sound Cloud</p>
            <ExternalLink height={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
export default InfoBox;
