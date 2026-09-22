import React, { useContext, useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, Zap,X } from "lucide-react";
import { useNavigate } from 'react-router';
import { MyStore } from '../Context/MyStore';

const Login = () => {
  const [invalid,setInvalid] = useState(false)
  let users = JSON.parse(localStorage.getItem("userData")) || []
  const { showPass, setShowPass, handleSubmit, register, error, showError } =
    useContext(MyStore);
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#080909] text-white flex overflow-hidden">
      {/* LEFT SIDE */}
      <section className="relative hidden lg:flex w-1/2 min-h-screen flex-col justify-between px-16 py-12 overflow-hidden border-r border-white/10">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-lime-400/5 blur-[100px]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-lime-400 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.25)]">
            <Zap size={22} className="text-black fill-black" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full border border-lime-400/20 bg-lime-400/5 text-lime-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            The future of shopping
          </div>

          <h2 className="text-6xl xl:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
            Shop the
            <br />
            <span className="text-lime-400">future.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-zinc-500">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-12 max-w-xl">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.03]">
              <p className="text-2xl font-bold text-lime-400">20K+</p>
              <p className="mt-1 text-xs text-zinc-600">Products</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.03]">
              <p className="text-2xl font-bold text-lime-400">50K+</p>
              <p className="mt-1 text-xs text-zinc-600">Users</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-lime-400/30 hover:bg-lime-400/[0.03]">
              <p className="text-2xl font-bold text-lime-400">4.9★</p>
              <p className="mt-1 text-xs text-zinc-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-xs text-zinc-700">
          © 2026 SkyMart. Everything you need, one place.
        </p>
      </section>

      {/* RIGHT SIDE */}
      <section className="relative flex-1 min-h-screen flex items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <div className="absolute top-8 left-8 flex lg:hidden items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-lime-400 flex items-center justify-center">
            <Zap size={18} className="text-black fill-black" />
          </div>

          <h1 className="text-xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Subtle glow */}
        <div className="absolute w-96 h-96 bg-lime-400/5 blur-[130px] rounded-full" />

        {/* Login Card */}
        <form
          onSubmit={handleSubmit((data) => {
            if (data.Email.trim() == "" || data.password.trim() === "") {
              showError();
            }else{
              setInvalid(true)
            }
            let auth = users.find((elem) => (elem.Email === data.Email));
            if (
              auth.Email === data.Email &&
              auth.Password === data.password
            ) {
              navigate("/navbar/home");
            } else {
              setInvalid(true);
            }
          })}
          className="relative w-full max-w-md"
        >
          <div className="mb-8">
            <p className="text-sm font-medium text-lime-400 mb-3">
              WELCOME BACK
            </p>

            <h2 className="text-4xl font-bold tracking-tight">Sign in</h2>

            <p className="mt-2 text-sm text-zinc-500">
              Enter your credentials to continue shopping.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d0f0f]/80 backdrop-blur-xl p-7 shadow-2xl">
            {invalid ? (
              <div className="text-red-400 w-full h-13 items-center p-4 mb-3 none flex border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                Email or Password is invalid
              </div>
            ) : (
              <div className="text-red-400 hidden w-full h-13 flex items-center p-4 mb-3 border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                Email or Password is invalid
              </div>
            )}
            {/* Email */}
            <div className="mb-5">
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                />

                <input
                  {...register("Email")}
                  onChange={()=>{setInvalid(false)}}
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full h-13
                    rounded-xl
                    border border-white/10
                    bg-white/[0.025]
                    pl-11 pr-4
                    text-sm text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition
                    focus:border-lime-400/60
                    focus:bg-lime-400/[0.02]
                    focus:ring-4
                    focus:ring-lime-400/5
                  "
                />
              </div>
            </div>

            {showPass ? (
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-zinc-400">
                    Password
                  </label>

                  <button className="text-xs text-lime-400 hover:text-lime-300 transition">
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="
                    w-full h-13
                    rounded-xl
                    border border-white/10
                    bg-white/[0.025]
                    pl-11 pr-12
                    text-sm text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition
                    focus:border-lime-400/60
                    focus:ring-4
                    focus:ring-lime-400/5
                  "
                  />

                  <button
                    onClick={() => setShowPass((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition"
                  >
                    <Eye size={17} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-zinc-400">
                    Password
                  </label>

                  <button className="text-xs text-lime-400 hover:text-lime-300 transition">
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                  />

                  <input
                    {...register("password")}
                    type="text"
                    placeholder="Password"
                    className="
                    w-full h-13
                    rounded-xl
                    border border-white/10
                    bg-white/[0.025]
                    pl-11 pr-12
                    text-sm text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition
                    focus:border-lime-400/60
                    focus:ring-4
                    focus:ring-lime-400/5
                  "
                  />

                  <button
                    onClick={() => setShowPass((prev) => !prev)}
                    className=" cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition"
                  >
                    <Eye size={17} />
                  </button>
                </div>
              </div>
            )}

            {/* Remember */}
            <div className="flex items-center gap-2 mt-5 mb-6">
              <input type="checkbox" className="accent-lime-400" />

              <span className="text-xs text-zinc-500">Remember me</span>
            </div>

            {/* Login */}
            <button
              className="
                group
                w-full h-13
                rounded-xl
                bg-lime-400
                text-black
                font-semibold
                text-sm
                flex items-center justify-center gap-2
                transition-all duration-300
                hover:bg-lime-300
                hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]
                active:scale-[0.98]
              "
            >
              Sign in
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-zinc-600 mt-7">
            Don't have an account?
            <button
              onClick={() => navigate("/register")}
              className="ml-1 text-lime-400 font-medium hover:text-lime-300 cursor-pointer  transition"
            >
              Create one
            </button>
          </p>
        </form>
        {error ? (
          <div className="flex transition-1s absolute bottom-4 right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <X className="h-4 w-4 shrink-0" />
            <span>Fill in all required fields.</span>
          </div>
        ) : (
          <div className="flex absolute transition-all duration-800 ease-in bottom-[-50px] right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <X className="h-4 w-4 shrink-0" />
            <span>Fill in all required fields.</span>
          </div>
        )}
      </section>
    </main>
  );
}

export default Login
