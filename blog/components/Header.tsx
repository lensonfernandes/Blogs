import Image from "next/image";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center  justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      {/* <div></div> */}
    </header>
  );
};

export default Header;
