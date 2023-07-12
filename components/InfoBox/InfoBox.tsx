import ExternalLink from '@/public/images/ExternalLink';
import YoutubeLogo from '@/public/images/YoutubeLogo';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  artist: string;
  title: string;
  imageUrl: string;
  album: string;
  releaseDate: string;
  youtubeUrl?: string;
}
function InfoBox({
  album,
  artist,
  imageUrl,
  releaseDate,
  title,
  youtubeUrl,
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
        {youtubeUrl && (
          <Link
            className="flex gap-2 hover:underline"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeLogo height={16} />
            <ExternalLink height={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
export default InfoBox;
