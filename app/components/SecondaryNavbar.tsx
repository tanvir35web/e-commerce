import Link from "next/link";
import {
  FacebookIcon,
  HumbergerIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons/icons";

const SecondaryNavbar = () => {
  return (
    <nav className="bg-[#0E3B3E]">
      <div className=" max-w-[1220px] w-full mx-auto h-[49px]  text-white flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <HumbergerIcon />
            <p className="text-[17px]">Browse By Category</p>
          </div>
          <div>
            <ul className="flex items-center gap-8 justify-center text-[13px]">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Easy Monthly Installments</Link>
              </li>
              <li>
                <Link href={"/"}>Shop by Brands</Link>
              </li>
              <li>
                <Link href={"/"}>Become a Vendor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <FacebookIcon />
          </Link>
          <Link href={"/"}>
            <TwitterIcon />
          </Link>
          <Link href={"/"}>
            <LinkedInIcon />
          </Link>
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
