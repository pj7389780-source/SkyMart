import React, { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyStore";
import { set } from "react-hook-form";

const ProductCard = ({ product }) => {
  const {cart,setCart} = useContext(MyStore)
  const isInCart = cart.some((item) => item.product.id === product.id);
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-2xl bg-[#151717]">
      {/* Image */}
      <div className="h-56 bg-[#191b1b] p-5">
        <img
          onClick={() => navigate(`/navbar/product/${product.id}`)}
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="border-t border-white/5 p-4">
        {/* Category */}
        <p className="text-xs capitalize text-zinc-600">{product?.category}</p>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 text-sm font-semibold text-zinc-200">
          {product?.title}
        </h2>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1">
          <Star size={13} fill="currentColor" className="text-yellow-400" />

          <span className="text-xs text-zinc-400">{product?.rating}</span>

          <span className="text-xs text-zinc-700">
            ({product?.reviews?.length || 0})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-white">${product?.price}</p>

            <p className="text-xs text-zinc-600">
              {product?.availabilityStatus}
            </p>
          </div>

          {/* Cart */}
          <button
            onClick={() => {
              if (isInCart) return;

              const cartItem = {
                product,
                quantity: 1,
              };

              setCart((prev) => [...prev, cartItem]);
              navigate("/navbar/checkout")
            }}
            className={`flex h-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
              isInCart
                ? "bg-zinc-700 text-lime-400"
                : "bg-lime-400 text-black hover:bg-lime-300"
            }`}
          >
            {isInCart ? "Added" : <ShoppingCart size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;