import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

function GalleryIcon() {
    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
      clipRule="evenodd"
    />
  </svg>
    )
}

function LikesIcon() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    )
}

function NavItem(props) {
    const { href, text, icon } = props
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href}>
        <a
          className={cn(
            isActive
              ? "opacity-100 border-b-2 border-indigo-600"
              : "opacity-30 border-b-2",
            "flex items-center p-2 hover:opacity-80"
          )}
        >
       {icon ? <GalleryIcon /> : <LikesIcon />}
        <span>{text}</span>
        </a>
      </Link>
    )
}


export default function PicsNav() {
  return (
    <>
     <div className="flex justify-center mt-4">
        <NavItem href={"/pics"} icon={true} text={"Gallery"}/>
        <NavItem href={"/pics/likes"} icon={false} text={"Loves"}/>
     </div>
    </>
  );
}