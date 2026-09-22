import  { useContext, useState } from "react";
import { ShoppingBag, Camera, Heart  } from "lucide-react";
import { MyStore } from "../Context/MyStore";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate()
  const { cart,setCart } = useContext(MyStore);
  let subtotal = 0
  cart.forEach((elem)=>{
    subtotal  +=elem.product.price*elem.quantity
  })
  let shipping = (subtotal>30?0:10)
let total = subtotal + shipping
const [checkout, setcheckout] = useState(true)
  if (!cart || cart.length === 0) {
    return (
      <div className=" min-h-screen mt-10 bg-[#080909] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0d0f0e] px-6 py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
            <ShoppingBag size={28} className="text-zinc-400" />
          </div>

          <h1 className="mt-6 text-2xl font-semibold">Your cart is empty</h1>

          <p className="mt-2 text-sm text-zinc-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            onClick={() => navigate("/navbar/store")}
            className="mt-6 rounded-xl bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
          >
            Continue Shopping
          </button>
        </div>
        {checkout ? (
          <div className="flex hidden transition-all duration-300 ease-out bottom-[-50px] right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <Camera className="h-4 w-4 shrink-0" />
            <Heart className="h-4 w-4 shrink-0" />
            <span>Thanks for Shopping...</span>
          </div>
        ) : (
          <div className="flex absolute transition-all duration-300 ease-out bottom-[50px] right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <Camera className="h-4 w-4 shrink-0" />
            <Heart className="h-4 w-4 shrink-0" />
            <span>Thanks for Shopping...</span>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="min-h-screen mt-18 bg-[#080909] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          <p className="mt-1 text-sm text-zinc-500">
            {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((elem) => {
              return <CartProduct cartItem={elem} key={elem.id} />;
            })
            }
          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl border border-white/5 bg-[#0d0f0e] p-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-zinc-500">
                <span>Shipping</span>
                {shipping ? <span>${shipping}</span> : <span>Free</span>}
              </div>

              <div className="border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold text-lime-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
            onClick={()=>{
              setCart([])
              setcheckout(false)
              setTimeout(()=>{setcheckout(true)},4000)
            }}
             className="mt-6 w-full rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
