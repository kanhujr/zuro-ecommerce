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
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {services.map((item, index) => (
            <div key={index}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em] text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
