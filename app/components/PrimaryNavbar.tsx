import Image from "next/image";
import WinstoreLogo from "../../public/images/nav-images/winstore-logo.png";
import {
  CartIcon,
  HeadPhoneIcon,
  LoveIcon,
  SearchIcon,
  UserIcon,
} from "../icons/icons";

const PrimaryNavbar = () => {
  return (
    <nav className="bg-[#03484D]">
      <div className=" max-w-[1220px] w-full mx-auto h-17  text-white flex items-center justify-evenly">
        <div className="w-[132px] h-[48px]">
          <Image
            src={WinstoreLogo}
            alt="Winstore Logo"
            width={132}
            height={48}
            className="w-full h-full"
          />
        </div>

        {/* Category select and search bar */}
        <div className="w-[534px] h-[39px] bg-white rounded-md overflow-hidden relative">
          <div className="w-[43px] h-full flex items-center justify-center bg-[#B6B6B6] absolute right-0 ">
            <SearchIcon />
          </div>
          <select
            name="Search-select"
            id=""
            className="bg-white text-[#ABA3A3] w-[130px] px-3 h-full text-[13px] font-normal outline-none focus:outline-none"
          >
            <option value="">All categories</option>
            <option value="">Electronics</option>
            <option value="">Fashion</option>
            <option value="">Appliances</option>
            <option value="">Babies Store</option>
            <option value="">Accessories</option>
          </select>
          <input
            type="text"
            placeholder="Search for products"
            className="bg-white text-[#ABA3A3] w-[300px] px-4 h-full text-[13px] font-normal border-l border-[#B6B6B6] ml-3 outline-none focus:outline-none placeholder:text-[#ABA3A3] "
          />
        </div>

        <div className="w-[134px] h-full"></div>

        {/* Call Us Now */}
        <div className="flex flex-col items-start gap-1">
          <p className="text-[9px]">Call Us Now</p>
          <div className="flex items-center gap-1">
            <HeadPhoneIcon />
            <p className="text-[13px]">+011 5827918</p>
          </div>
          <p className="text-[13px]">Sign In</p>
        </div>

        {/* icons and cart  */}
        <div className="flex items-center gap-6">
          <UserIcon />
          <LoveIcon />
          <div className="flex items-center gap-1">
            <CartIcon />
            <p className="text-[15px]">Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default PrimaryNavbar;
