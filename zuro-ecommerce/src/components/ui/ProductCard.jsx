import { useState } from "react";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      onMouseEnter={() => {
        if (product.images.length > 1) setCurrentImage(1);
      }}
      onMouseLeave={() => setCurrentImage(0)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300">
          <Heart size={20} />
        </button>

        {/* Discount */}
        {product.discount > 0 && (
          <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[11px] px-2.5 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full aspect-[5/6] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="font-semibold text-lg leading-6 min-h-12">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <Star size={16} fill="#facc15" stroke="#facc15" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-gray-400">(120)</span>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <span className="font-bold text-lg">₹{product.price}</span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
