import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import upi from "../../assets/payment/upi.svg";
import razorpay from "../../assets/payment/razorpay.svg";

const shopLinks = [
  { label: "All Products", path: "/shop" },
  { label: "Acid Wash", path: "/category/acid-wash" },
  { label: "Everyday Essential", path: "/category/everyday-essential" },
  { label: "Hindu Divine", path: "/category/hindu-divine" },
  { label: "Oversized", path: "/category/oversized" },
  { label: "Anime", path: "/category/anime" },
];

const helpLinks = [
  { label: "Contact Us", path: "/contact" },
  { label: "FAQs", path: "/faq" },
  { label: "Shipping Policy", path: "/shipping-policy" },
  { label: "Return Policy", path: "/return-policy" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

const accountLinks = [
  { label: "My Account", path: "/account" },
  { label: "Orders", path: "/orders" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Addresses", path: "/addresses" },
];

const contactInfo = [
  "support@zuro.com",
  "+91 98765 43210",
  "Mon – Sat • 10 AM – 7 PM",
  "Bhubaneswar, Odisha",
];

const socialLinks = [
  { icon: FaInstagram, href: "#" },
  { icon: FaFacebookF, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const Footer = () => {
  return (
    <footer className=" bg-[#F5F4F1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] text-black">
            ZURO
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            Premium streetwear crafted for people who create their own style.
          </p>

          <div className="mt-8 flex justify-center sm:justify-start gap-3">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href + Icon.name}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="sm:text-left">
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Shop
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            {shopLinks.map((link) => (
              <li
                key={link.path}
                className="cursor-pointer transition-colors duration-300 hover:text-orange-500"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Help
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            {helpLinks.map((link) => (
              <li
                key={link.path}
                className="cursor-pointer transition-colors duration-300 hover:text-orange-500"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Account
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            {accountLinks.map((link) => (
              <li
                key={link.path}
                className="cursor-pointer transition-colors duration-300 hover:text-orange-500"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Contact
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            {contactInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-500">
            © 2026 ZURO. All Rights Reserved.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-3">
            {[upi, razorpay].map((logo, index) => (
              <div
                key={index}
                className="flex h-12 w-20 items-center justify-center rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500"
              >
                <img
                  src={logo}
                  alt="Payment"
                  className="max-h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
