import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

const Navbar = () => {
    const navigate  =  useNavigate()
  return (
    <div >
      <nav className="fixed left-0 min-h-12 top-0 z-50 w-full border-b border-white/[0.04] bg-[#080909]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black">
              <Zap size={19} fill="currentColor" strokeWidth={2.5} />
            </div>

            <span className="text-lg font-semibold tracking-tight text-zinc-200">
              Sky<span className="text-lime-400">Mart</span>
            </span>
          </div>

          {/* Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            <span
              onClick={() => navigate("/navbar/home")}
              className="cursor-pointer text-sm font-medium text-zinc-500 transition hover:text-lime-600"
            >
              Home
            </span>

            <span
              onClick={() => navigate("/navbar/store")}
              className="cursor-pointer text-sm font-medium text-zinc-500 transition hover:text-lime-600"
            >
              Shop
            </span>

            <span
              onClick={() => navigate("/navbar/about")}
              className="cursor-pointer text-sm font-medium text-zinc-500 transition hover:text-lime-600 "
            >
              About
            </span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Cart */}
            <div
              onClick={() => navigate("/navbar/checkout")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.02] text-zinc-500 transition hover:border-lime-400/20 hover:bg-lime-400/[0.05] hover:text-lime-400"
            >
              <ShoppingCart size={18} />
            </div>

            {/* Logout */}
            <div
              onClick={() => navigate("/")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.02] text-zinc-500 transition hover:border-red-400/20 hover:bg-red-400/[0.05] hover:text-red-400"
            >
              <LogOut size={18} />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
