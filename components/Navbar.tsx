import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import MobileMenu from "./MobileMenu";

function NavItem({ href, text }) {
  const router = useRouter();
  let isActive;
  if (href == "/") {
    isActive = router.asPath === href
  } else {
    isActive = router.asPath.split("/").includes("pics")
  }
  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800"
            : "font-normal text-gray-600",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200  transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

function Accounts() {

    function handleClick(e) {
        
    }
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="m-1 hover:bg-gray-200 p-1 sm:px-3 sm:py-2 rounded-lg">
        Account
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 mt-4 shadow bg-base-100 rounded-box w-52"
      >
         
        <li className="flex">
        <Link href={process.env.NEXT_PUBLIC_LOGOUT_URL!} > 
          <a onClick={handleClick}>  <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>Logout</a>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="container mx-auto px-32">
      <nav className="flex justify-between mx-auto pt-8 text-gray-900">
        <a className="flex text-teal-500">
          <span className="self-center md:text-2xl text-md ">Kuny Utils</span>
        </a>

        <div className="ml-[-0.60rem]">
          <MobileMenu />
          <NavItem href="/" text="Todo" />
          <NavItem href="/pics" text="Pics" />
          <Accounts />
        </div>
      </nav>
    </div>
  );
}
