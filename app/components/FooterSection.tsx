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
      <div className="max-w-[1220px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 -mr-48">
          {/* Logo and Contact Section */}
          <div>
            <div className="w-[132px] h-[48px] mb-3">
              <Image
                src={WinstoreLogo}
                alt="Winstore Logo"
                width={132}
                height={48}
                className="w-full h-full"
              />
            </div>

            <div className="mb-4">
              <p className="text-[#00CAD7] text-sm mb-2">
                Got questions? Call us 24/7!
              </p>
              <p className="text-sm">03 111 656 144</p>
              <p className="text-sm">0317 1777015</p>
            </div>

            <div className="mb-4">
              <p className="text-[#00CAD7] text-sm mb-1">Contact info</p>
              <p className="text-sm">info@winstore.pk</p>
            </div>

            <div className="flex gap-4 items-center">
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
              <h3 className="text-[#00CAD7] font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
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
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <Image src={VisaImage} alt="Visa" width={97} height={58} />
            <Image src={MasterImage} alt="Master" width={97} height={58} />
            <Image src={CashImage} alt="Cash" width={97} height={58} />
            <Image src={EasyImage} alt="Easy" width={97} height={58} />
          </div>
        </div>
      </div>

      <div className="bg-[#161616] text-white w-full text-lg">
        <p className="max-w-[1220px] mx-auto py-5">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
