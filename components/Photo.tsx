import Image from "next/image";
import Link from "next/link";

export default function Photo(props) {
  const { data } = props;

  const { width, height, alt_description, urls, user } = data;
  const { name, profile_image, links } = user;

  return (
    <div className="group relative">
      <Image
        src={urls.regular}
        unoptimized
        height={height}
        width={width}
        alt={alt_description}
        className="rounded-lg"
      />

      <div className="absolute  bottom-[6px] left-0 flex w-full items-center gap-2 rounded-b-lg p-4 opacity-0 transition duration-200 ease-in-out group-hover:bg-zinc-800/60 group-hover:opacity-100">
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
            className="text-zinc-50 hover:underline"
          >
            {name}
          </a>
        </Link>
        <button className="text-red-200 hover:text-red-500" title="Save">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
