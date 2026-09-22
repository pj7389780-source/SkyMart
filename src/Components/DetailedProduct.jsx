import React, { useContext } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Package,
  Tag,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { MyStore } from "../Context/MyStore";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const {cart,setCart} = useContext(MyStore)
    const navigate = useNavigate()
    const {apiData} = useContext(MyStore)
   const {id} = useParams()
   let product = apiData.find((elem)=>{
    return elem.id == Number(id)
   })
   let related = apiData.filter((elem)=>{
    return elem.category === product.category
   })
     const isInCart = cart.some((item) => item.product.id === product.id);
  return (
    <main className="min-h-screen mt-18 bg-[#080909] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* ================= PRODUCT ================= */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="rounded-3xl border border-white/5 bg-[#101212] p-6">
            <div className="flex h-[500px] items-center justify-center rounded-2xl bg-[#151717]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-12"
              />
            </div>

            {/* Images */}
            <div className="mt-5 flex gap-3">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  className="h-20 w-20 rounded-xl border border-white/10 bg-[#151717] p-2"
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold leading-tight">
              {product.title}
            </h1>

            {/* Brand */}
            <p className="mt-3 text-sm text-zinc-500">
              Brand:{" "}
              <span className="text-zinc-300">{product.brand || "N/A"}</span>
            </p>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={17}
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="font-semibold">{product.rating}</span>
              </div>

              <span className="text-zinc-700">•</span>

              <span className="text-sm text-zinc-500">
                {product.reviews?.length || 0} Reviews
              </span>

              <span className="text-zinc-700">•</span>

              <span className="text-sm text-green-400">
                {product.availabilityStatus}
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 border-y border-white/5 py-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">${product.price}</span>

                <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Description
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {product.description}
              </p>
            </div>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  if (isInCart) return;

                  const cartItem = {
                    product,
                    quantity: 1,
                  };

                  setCart((prev) => [...prev, cartItem]);
                  navigate("/navbar/checkout");
                }}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 font-semibold text-black h-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
                  isInCart
                    ? "bg-zinc-700 text-lime-400"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {isInCart ? "Added" : <ShoppingCart size={16} />}
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Heart size={19} />
              </button>
            </div>

            {/* Stock */}
            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
              <Package size={16} className="text-lime-400" />
              {product.stock} units available
            </div>
          </div>
        </div>
        <section className="mx-auto max-w-7xl border-t border-white/5 py-10">
          <div className="flex items-center justify-between">
            {/* Previous */}
            {product.id > 1 ? (
              <button
                onClick={() => navigate(`/navbar/product/${Number(id) - 1}`)}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 transition hover:border-lime-400/30"
              >
                <span className="text-xl text-zinc-500 transition group-hover:text-lime-400">
                  ←
                </span>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Previous Product
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    Previous Product
                  </p>
                </div>
              </button>
            ) : (
              <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 transition hover:border-lime-400/30">
                <span className="text-xl text-zinc-500 transition group-hover:text-lime-400">
                  ←
                </span>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Previous Product
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    Previous Product
                  </p>
                </div>
              </button>
            )}

            {/* Next */}
            {product.id == 100 ? (
              <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 transition hover:border-lime-400/30">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Next Product
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    Next Product
                  </p>
                </div>

                <span className="text-xl text-zinc-500 transition group-hover:text-lime-400">
                  →
                </span>
              </button>
            ) : (
              <button
                onClick={() => navigate(`/navbar/product/${Number(id) + 1}`)}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 transition hover:border-lime-400/30"
              >
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Next Product
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    Next Product
                  </p>
                </div>

                <span className="text-xl text-zinc-500 transition group-hover:text-lime-400">
                  →
                </span>
              </button>
            )}
          </div>
        </section>
        {/* ================= SERVICE INFO ================= */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#101212] p-6">
            <Truck size={22} className="text-lime-400" />

            <h3 className="mt-4 font-semibold">Shipping</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {product.shippingInformation}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#101212] p-6">
            <ShieldCheck size={22} className="text-lime-400" />

            <h3 className="mt-4 font-semibold">Warranty</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {product.warrantyInformation}
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#101212] p-6">
            <RotateCcw size={22} className="text-lime-400" />

            <h3 className="mt-4 font-semibold">Return Policy</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {product.returnPolicy}
            </p>
          </div>
        </div>

        {/* ================= PRODUCT INFORMATION ================= */}
        <section className="mt-12 rounded-3xl border border-white/5 bg-[#101212] p-7 sm:p-10">
          <div className="flex items-center gap-3">
            <Tag size={20} className="text-lime-400" />

            <h2 className="text-xl font-semibold">Product Information</h2>
          </div>

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs text-zinc-600">Product ID</p>
              <p className="mt-1 text-sm text-zinc-300">#{product.id}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600">SKU</p>
              <p className="mt-1 text-sm text-zinc-300">{product.sku}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600">Brand</p>
              <p className="mt-1 text-sm text-zinc-300">
                {product.brand || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-zinc-600">Weight</p>
              <p className="mt-1 text-sm text-zinc-300">{product.weight}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600">Minimum Order</p>
              <p className="mt-1 text-sm text-zinc-300">
                {product.minimumOrderQuantity} units
              </p>
            </div>

            <div>
              <p className="text-xs text-zinc-600">Availability</p>
              <p className="mt-1 text-sm text-green-400">
                {product.availabilityStatus}
              </p>
            </div>
          </div>

          {/* Dimensions */}
          {product.dimensions && (
            <div className="mt-8 border-t border-white/5 pt-7">
              <p className="text-xs text-zinc-600">Dimensions</p>

              <div className="mt-3 flex flex-wrap gap-3">
                <span className="rounded-lg bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                  Width: {product.dimensions.width}
                </span>

                <span className="rounded-lg bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                  Height: {product.dimensions.height}
                </span>

                <span className="rounded-lg bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                  Depth: {product.dimensions.depth}
                </span>
              </div>
            </div>
          )}
        </section>

        {/* ================= REVIEWS ================= */}
        <section className="mt-12 pb-16">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.reviews?.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-[#101212] p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{review.reviewerName}</p>

                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={13} fill="currentColor" />

                    <span className="text-xs">{review.rating}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {review.comment}
                </p>

                <p className="mt-4 text-xs text-zinc-700">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-7xl pb-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              You May Also Like
            </p>

            <h2 className="mt-2 text-2xl font-bold">Related Products</h2>
          </div>

          <p className="hidden text-sm text-zinc-600 sm:block">
            More products you might like
          </p>
        </div>

        {/* Related Product Grid */}
        <div className="mt-7 flex flex-wrap gap-7">
          {related.map((elem) => {
            return <ProductCard product={elem} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
