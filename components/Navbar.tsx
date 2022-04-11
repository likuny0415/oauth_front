import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import MobileMenu from "./MobileMenu";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;
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

export default function Nav() {
  return (
    <div className="container mx-auto px-32 bg-red-50">
      <nav className="flex justify-between mx-auto bg-red-300 pt-8 text-gray-900">
        <a className="flex text-teal-500">
          <span className="self-center md:text-2xl text-md ">Kuny Utils</span>
        </a>

        <div className="ml-[-0.60rem]">
          <MobileMenu />
          <NavItem href="/" text="Todo" />
          <NavItem href="/bookmarks" text="Bookmarks" />
          <NavItem href="#" text="Accounts" />
          
        </div>
      </nav>
    </div>
  );
}
