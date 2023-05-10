import Link from "next/link";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="mx-auto h-20 min-w-[1280px] max-w-[1500px] text-gray-900">
      <div className="flex items-center justify-between px-8 py-2.5">
        <div className="text-4xl tracking-wider">
          <Link href="/" className="">
            PARIX
          </Link>
        </div>
        <div className="flex cursor-pointer items-center gap-6 text-gray-400">
          <AiOutlineSearch className="h-6 w-6" />
          <CgProfile className="h-6 w-6" />
          <AiFillHeart className="h-6 w-6" />
          <div className="relative">
            <FaShoppingCart className="inline-block h-6 w-6" />
            <span className="absolute -right-1.5 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 p-2 text-sm text-white">
              7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
