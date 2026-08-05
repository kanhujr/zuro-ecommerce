const services = [
  {
    title: "FREE SHIPPING",
    desc: "Orders above ₹999.",
  },
  {
    title: "EASY RETURNS",
    desc: "7-day hassle-free returns.",
  },
  {
    title: "SECURE PAYMENT",
    desc: "Razorpay, UPI & COD.",
  },
  {
    title: "24/7 SUPPORT",
    desc: "WhatsApp us anytime.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F7F7F5] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-500 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
