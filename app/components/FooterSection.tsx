import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons/icons";
import WinstoreLogo from "../../public/images/nav-images/winstore-logo.png";
import VisaImage from "../../public/images/footer-images/visa.png";
import MasterImage from "../../public/images/footer-images/master-card.png";
import CashImage from "../../public/images/footer-images/cash.png";
import EasyImage from "../../public/images/footer-images/installment.png";

const footerData = {
  trending: [
    { label: "Installments", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Grocery", href: "#" },
    { label: "Health & Beauty", href: "#" },
    { label: "Home Appliances", href: "#" },
    { label: "Mobile Accessories", href: "#" },
  ],
  information: [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping & Return", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  customerCare: [
    { label: "My Account", href: "#" },
    { label: "Track Your Order", href: "#" },
    { label: "Recently Viewed", href: "#" },
    { label: "Wishlist", href: "#" },
    { label: "Compare", href: "#" },
    { label: "Become a Vendor", href: "#" },
  ],
};

const socialLinks = [
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: TwitterIcon, href: "#", label: "Twitter" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

const footerSections = [
  { title: "Trending", items: footerData.trending },
  { title: "Information", items: footerData.information },
  { title: "Customer Care", items: footerData.customerCare },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#393939] text-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 lg:-mr-48">
          {/* Logo and Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-[110px] sm:w-[120px] lg:w-[132px] h-[40px] sm:h-[44px] lg:h-[48px] mb-4 lg:mb-3">
              <Image
                src={WinstoreLogo}
                alt="Winstore Logo"
                width={132}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mb-4">
              <p className="text-[#00CAD7] text-xs sm:text-sm mb-2">
                Got questions? Call us 24/7!
              </p>
              <p className="text-xs sm:text-sm">03 111 656 144</p>
              <p className="text-xs sm:text-sm">0317 1777015</p>
            </div>

            <div className="mb-4">
              <p className="text-[#00CAD7] text-xs sm:text-sm mb-1">Contact info</p>
              <p className="text-xs sm:text-sm break-words">info@winstore.pk</p>
            </div>

            <div className="flex gap-3 sm:gap-4 items-center">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-[#00CAD7] transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-[#00CAD7] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-600 lg:border-t-0 lg:mt-8 lg:pt-8">
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-3">
            <Image
              src={VisaImage}
              alt="Visa"
              width={97}
              height={58}
              className="w-[70px] sm:w-[85px] lg:w-[97px] h-auto"
            />
            <Image
              src={MasterImage}
              alt="Master"
              width={97}
              height={58}
              className="w-[70px] sm:w-[85px] lg:w-[97px] h-auto"
            />
            <Image
              src={CashImage}
              alt="Cash"
              width={97}
              height={58}
              className="w-[70px] sm:w-[85px] lg:w-[97px] h-auto"
            />
            <Image
              src={EasyImage}
              alt="Easy"
              width={97}
              height={58}
              className="w-[70px] sm:w-[85px] lg:w-[97px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#161616] text-white w-full">
        <p className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-0 py-4 sm:py-5 text-sm sm:text-base lg:text-lg text-center lg:text-left">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
