import { ArrowRight, Lock, Mail, User, X, Zap } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyStore";
import { Watch } from "react-hook-form";

const Register = ()=> {
  const [Error, setError] = useState(true)
  const [notSame, setNotSame] = useState(true)
  const [fillAll ,setFillAll] = useState(true)
  const {
    register,
    setUserData,
    reset,
    handleSubmit,
    userData,
  } = useContext(MyStore);
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#080909] text-white flex overflow-hidden">
      {/* LEFT SIDE */}
      <section className="relative hidden lg:flex w-1/2 min-h-screen flex-col justify-between px-16 py-12 overflow-hidden border-r border-white/10">
        {/* Background Glow */}
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
            Join SkyMart
          </div>

          <h2 className="text-6xl xl:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
            Start your
            <br />
            <span className="text-lime-400">journey.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-zinc-500">
            Create your SkyMart account and discover thousands of products at
            your fingertips.
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-lime-400/10 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>

              <p className="text-sm text-zinc-400">
                Access thousands of products
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-lime-400/10 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>

              <p className="text-sm text-zinc-400">Fast and secure checkout</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-lime-400/10 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>

              <p className="text-sm text-zinc-400">Track all your orders</p>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-xs text-zinc-700">
          © 2026 SkyMart. Everything you need, one place.
        </p>
      </section>

      {/* RIGHT SIDE */}
      <section className="relative flex-1 min-h-screen flex items-center justify-center px-6 py-12">
        {/* Mobile Logo */}
        <div className="absolute top-8 left-8 flex lg:hidden items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-lime-400 flex items-center justify-center">
            <Zap size={18} className="text-black fill-black" />
          </div>

          <h1 className="text-xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Glow */}
        <div className="absolute w-96 h-96 bg-lime-400/5 blur-[130px] rounded-full" />

        {/* Form */}
        <div className="relative w-full max-w-md">
          {/* Heading */}
          <div className="mb-8">
            <p className="text-sm font-medium text-lime-400 mb-3">
              GET STARTED
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              Create account
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Create your account to start shopping.
            </p>
          </div>

          {/* Card */}
          <form
            onSubmit={handleSubmit((data) => {
              const alreadyExists = userData.some(
                (elem) => elem.Email === data.Email,
              );
              if (alreadyExists) {
                setError(false);
              } else if (
                data.Name.trim() == "" ||
                data.Email.trim() === "" ||
                data.Conpassword === "" ||
                data.Password === ""
              ) {
                setFillAll(false);
                setTimeout(() => {
                  setFillAll(true);
                }, 4000);
              } else if (data.Password !== data.ConfirmPassword) {
                setNotSame(false);
              } else {
                setUserData((prev) => [...prev, data]);
                reset();
                navigate("/");
              }
            })}
            className="rounded-3xl border border-white/10 bg-[#0d0f0f]/80 backdrop-blur-xl p-7 shadow-2xl"
          >
            {/* Full Name */}
            <div className="mb-5">
              {Error ? (
                <div className="text-red-400 w-full h-13 items-center p-4 mb-3 none hidden border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                  Email already registered!
                </div>
              ) : (
                <div className="text-red-400 w-full h-13 flex items-center p-4 mb-3 border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                  Email already registered!
                </div>
              )}
              {notSame ? (
                <div className="text-red-400 w-full h-13 items-center p-4 mb-3 none hidden border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                  Password doesn't Match
                </div>
              ) : (
                <div className="text-red-400 w-full h-13 flex items-center p-4 mb-3 border-[0.5px] bg-red-100 border-red-700 rounded-xl">
                  Password doesn't Match
                </div>
              )}
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Full name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                />

                <input
                  {...register("Name")}
                  type="text"
                  placeholder="John Doe"
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
                  onChange={() => {
                    setError(true);
                  }}
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

            {/* Password */}
            <div className="mb-5">
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                />

                <input
                  {...register("Password")}
                  onChange={() => setNotSame(true)}
                  type="password"
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Confirm password
              </label>

              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                />

                <input
                  {...register("ConfirmPassword")}
                  onChange={() => setNotSame(true)}
                  type="password"
                  placeholder="Confirm your password"
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

            {/* Create Account */}
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
              Create account
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm text-zinc-600 mt-7">
            Already have an account?
            <button
              onClick={() => navigate("/")}
              className="ml-1 cursor-pointer text-lime-400 font-medium hover:text-lime-300 transition"
            >
              Sign in
            </button>
          </p>
        </div>
        {fillAll ? (
          <div className="flex absolute transition-all duration-300 ease-out bottom-[-50px] right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <X className="h-4 w-4 shrink-0" />
            <span>Fill in all required fields.</span>
          </div>
        ) : (
          <div className="flex absolute transition-all duration-300 ease-out bottom-[50px] right-5  items-center gap-2.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white">
            <X className="h-4 w-4 shrink-0" />
            <span>Fill in all required fields.</span>
          </div>
        )}
      </section>
    </main>
  );
}

export default Register;
