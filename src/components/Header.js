import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https:links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap  text-white">
          <div className="link">
            <p>Hello Pankaj Kicker</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link">
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;
