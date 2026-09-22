import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../Context/MyStore";

const CartProduct = ({ cartItem }) => {
  const { product, quantity } = cartItem;
  const { removefromcart,setCart} = useContext(MyStore);
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };
  return (
    <div className="flex gap-3 border-b border-white/5 py-4">
      {/* Image */}
      <div className="h-20 w-20 shrink-0 rounded-xl bg-[#151717] p-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-lime-400">
              {product.category}
            </p>

            <h3 className="mt-1 truncate text-sm font-medium text-zinc-200">
              {product.title}
            </h3>
          </div>

          <button
            onClick={() => removefromcart(product.id)}
            className="shrink-0 text-zinc-600 hover:text-red-400"
          >
            <Trash2 size={15} />
          </button>
        </div>

        {/* Bottom */}
        <div className="mt-3 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-lg border border-white/10">
            <button
              onClick={() => quantity>=2 && decreaseQuantity(product.id)}
              className="flex cursor-pointer h-7 w-7 items-center justify-center text-zinc-500 hover:bg-white/5 hover:text-white"
            >
              <Minus size={12} />
            </button>

            <span className="flex h-7 w-8 items-center justify-center text-xs text-white">
              {quantity}
            </span>

            <button
              onClick={() => increaseQuantity(product.id)}
              className="flex h-7 w-7 items-center justify-center text-zinc-500 hover:bg-white/5 hover:text-white"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Price */}
          <span className="text-sm font-semibold text-white">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
