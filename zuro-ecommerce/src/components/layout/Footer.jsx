import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import upi from "../../assets/payment/upi.svg";
import razorpay from "../../assets/payment/razorpay.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#F5F4F1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-[0.25em] text-black">
            ZURO
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            Premium streetwear crafted for people who create their own style.
          </p>

          <div className="flex gap-3 mt-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white cursor-pointer transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-white">
              <FaInstagram size={16} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white cursor-pointer transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-white">
              <FaFacebookF size={16} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white cursor-pointer transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-white">
              <FaYoutube size={16} />
            </div>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Shop
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              All Products
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Acid Wash
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Everyday Essential
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Hindu Divine
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Oversized
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Anime
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Help
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              FAQs
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Shipping Policy
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Return Policy
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Account
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              My Account
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Orders
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Wishlist
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">
              Addresses
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-black">
            Contact
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            <li>support@zuro.com</li>
            <li>+91 98765 43210</li>
            <li>Mon – Sat • 10 AM – 7 PM</li>
            <li>Bhubaneswar, Odisha</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-500">
            © 2026 ZURO. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
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
