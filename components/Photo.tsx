import Image from "next/image";
import Link from "next/link";

export default function Photo(props) {
  const { data } = props;

  const { width, height, alt_description, urls, user } = data;
  const { name, profile_image, links } = user;

  return (
    <div className="group relative block">
      <Image
        src={urls.regular}
        unoptimized
        width={width}
        height={height}
        alt={alt_description}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={urls.thumb}
        loading="lazy"
      />
     <div className="invisible group-hover:visible ">
     <div className="absolute flex top-2 right-2 p-2 rounded-md bg-gray-50/80
      items-center justify-center text-black/75  hover:text-black hover:bg-gray-50
      ">
      <button
        title="Like"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      </div>

      <div
        className="absolute bottom-[6px] left-0 flex w-full items-center
       gap-2 rounded-b-lg p-4 
       transition duration-200 ease-in-out 
       group-hover:bg-zinc-800/50
       "
      >
        <Image
          className="rounded-full"
          unoptimized
          src={profile_image.medium}
          width={32}
          height={32}
          alt={name}
        />
        <Link
          href={`${links?.html}?utm_source=image-gallery&utm_medium=referral`}
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="text-zinc-200 hover:underline hover:text-zinc-50 "
          >
            {name}
          </a>
        </Link>
      </div>
     </div>
    </div>
  );
}
