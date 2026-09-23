import {
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  Globe2,
  Heart,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#080909] text-white">
      {/* =====================================================
          SCREEN 1 — HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400 text-black shadow-[0_0_50px_rgba(163,230,53,0.2)]">
            <Zap size={30} fill="currentColor" />
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-lime-400">
            The future of shopping
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, simple, and enjoyable — without all the
            unnecessary complexity.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/navbar/home")}
              className="group flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 font-semibold text-black transition hover:bg-lime-300"
            >
              Explore SkyMart
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]">
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat icon={<Box size={20} />} value="20K+" label="Products" />

            <Stat icon={<Users size={20} />} value="50K+" label="Customers" />

            <Stat icon={<Star size={20} />} value="4.9" label="Avg. Rating" />

            <Stat
              icon={<Truck size={20} />}
              value="99%"
              label="On-time Delivery"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700">
          <ChevronRight className="rotate-90 animate-bounce" size={20} />
        </div>
      </section>

      {/* =====================================================
          SCREEN 2 — OUR STORY
      ===================================================== */}

      <section className="relative flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
              Our Story
            </p>

            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Shopping should feel
              <span className="text-lime-400"> effortless.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-500">
              <p>
                SkyMart started with a simple idea: online shopping should not
                feel complicated.
              </p>

              <p>
                We wanted to build an experience where discovering products,
                comparing options, and completing a purchase feels natural from
                beginning to end.
              </p>

              <p>
                Every part of SkyMart is designed around one principle: remove
                friction and let people focus on what they actually want.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-lime-400" />
              <span className="text-sm text-zinc-400">
                Built for modern shoppers
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-lime-400/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f0e] p-8">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black">
                    <ShoppingBag size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">SkyMart</p>

                    <p className="text-xs text-zinc-600">Shopping simplified</p>
                  </div>
                </div>

                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                  LIVE
                </span>
              </div>

              <div className="space-y-3">
                <ProductRow
                  icon={<Sparkles size={18} />}
                  title="Discover"
                  text="Find products you'll love"
                />

                <ProductRow
                  icon={<ShieldCheck size={18} />}
                  title="Trust"
                  text="Shop with confidence"
                />

                <ProductRow
                  icon={<Zap size={18} />}
                  title="Speed"
                  text="Fast and seamless checkout"
                />

                <ProductRow
                  icon={<Heart size={18} />}
                  title="Experience"
                  text="Designed around you"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SCREEN 3 — VALUES
      ===================================================== */}

      <section className="flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
              What drives us
            </p>

            <h2 className="text-4xl font-semibold sm:text-5xl">
              Built around{" "}
              <span className="text-lime-400">better experiences.</span>
            </h2>

            <p className="mt-6 leading-7 text-zinc-500">
              We focus on the details that make digital commerce feel simple,
              reliable, and genuinely enjoyable.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Zap />}
              number="01"
              title="Simplicity"
              description="Clean interfaces, straightforward navigation, and fewer unnecessary steps."
            />

            <ValueCard
              icon={<ShieldCheck />}
              number="02"
              title="Trust"
              description="Transparent experiences that help customers make confident decisions."
            />

            <ValueCard
              icon={<Rocket />}
              number="03"
              title="Speed"
              description="Fast interactions and an experience designed to keep you moving."
            />

            <ValueCard
              icon={<Heart />}
              number="04"
              title="People First"
              description="Every feature starts with understanding what shoppers actually need."
            />

            <ValueCard
              icon={<Globe2 />}
              number="05"
              title="Accessibility"
              description="A shopping experience designed to work beautifully across devices."
            />

            <ValueCard
              icon={<Sparkles />}
              number="06"
              title="Innovation"
              description="Constantly exploring better ways to make online commerce smarter."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SCREEN 4 — EXPERIENCE + CTA
      ===================================================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          {/* Timeline */}
          <div className="mb-24">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
              The SkyMart experience
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
              From discovery to <span className="text-lime-400">doorstep.</span>
            </h2>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              <Step
                number="01"
                title="Discover"
                text="Browse thousands of products."
              />

              <Step
                number="02"
                title="Choose"
                text="Compare and find what fits you."
              />

              <Step
                number="03"
                title="Checkout"
                text="Complete your purchase effortlessly."
              />

              <Step
                number="04"
                title="Receive"
                text="Get your order at your doorstep."
              />
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-lime-400 p-8 text-black sm:p-12 md:p-16">
            <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-white/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-lime-400">
                <Zap size={22} fill="currentColor" />
              </div>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to explore SkyMart?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/60">
                Discover products, explore new possibilities, and experience a
                simpler way to shop online.
              </p>

              <button
                onClick={() => navigate("/navbar/home")}
                className="group mt-8 flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 font-semibold text-white transition hover:bg-zinc-900"
              >
                Start Shopping
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// =====================================================
// COMPONENTS
// =====================================================

const Stat = ({ icon, value, label }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-7 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]">
      <div className="mb-4 flex justify-center text-lime-400">{icon}</div>

      <p className="text-2xl font-semibold">{value}</p>

      <p className="mt-1 text-xs text-zinc-600">{label}</p>
    </div>
  );
};

const ProductRow = ({ icon, title, text }) => {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-lime-400/20 hover:bg-lime-400/[0.03]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-1 text-xs text-zinc-600">{text}</p>
      </div>

      <ChevronRight
        size={16}
        className="ml-auto text-zinc-700 transition group-hover:translate-x-1 group-hover:text-lime-400"
      />
    </div>
  );
};

const ValueCard = ({ icon, number, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30">
      <span className="absolute right-6 top-6 text-xs text-zinc-700">
        {number}
      </span>

      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p>
    </div>
  );
};

const Step = ({ number, title, text }) => {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <span className="text-sm font-medium text-lime-400">{number}</span>

      <h3 className="mt-8 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>

      <div className="mt-8 h-1 w-8 rounded-full bg-lime-400" />
    </div>
  );
};

export default About;
