import {
  ArrowRight,
  ChevronRight,
  Headphones,
  Laptop,
  Shirt,
  Smartphone,
  Sparkles,
  Armchair,
  Star,
  Tag,
  Truck,
  Watch,
  Zap,
  Sofa,
  Utensils,
  ShoppingBasket,
  SprayCan,
  Footprints,
  Lamp,
} from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../Context/MyStore";
import { useNavigate } from "react-router";
import ProductCard from "./ProductCard";
const Home = () => {
  const {apiData} = useContext(MyStore)
  const navigate = useNavigate()
  let beautycount = 0,watch = 0,  furn = 0,kitacc = 0, gorc = 0,laptop = 0, shirt = 0,frag = 0,homede = 0,shoes = 0,moblie = 0 ;
  const newproducts = apiData.filter((elem)=>{
    return elem.stock>98
  })
  console.log(newproducts)
    const filterdata = apiData.filter((elem)=>{
      return elem.rating>4.95
    })
    console.log(filterdata)
  apiData.forEach((elem)=>{
    if(elem.category == "beauty"){
      beautycount++;
    }if(elem.category == 'mens-watches'){
      watch++
    }if (elem.category == "furniture") {
      furn++;
    }if (elem.category == "kitchen-accessories") {
      kitacc++;
    }if (elem.category == "groceries") {
      gorc++;
    }if (elem.category == "laptops") {
      laptop++;
    }if (elem.category == "mens-shirts") {
      shirt++;
    }if (elem.category == "fragrances") {
      frag++;
    }if (elem.category == "home-decoration") {
      homede++;
    }if (elem.category == "mens-shoes") {
      shoes++;
    }if (elem.category == "mobile-accessories") {
      moblie++;
    }
  })
  return (
    <main className="min-h-screen bg-[#080909] px-6 pb-20 pt-[100px] text-white">
      <div className="mx-auto max-w-[1400px]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[360px] overflow-hidden rounded-[24px] border border-white/20 bg-[#0c0e0d]">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(163,230,53,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-lime-400/10 blur-[100px]" />

          <div className="relative z-10 flex min-h-[360px] items-center justify-between px-12 py-12">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-lime-400">
                Good Evening 👋
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight">
                Welcome back,
                <br />
                <span className="text-lime-400">PARAS!</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => navigate("/navbar/store")}
                  className="flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-lime-300"
                >
                  Shop Now
                  <ArrowRight size={17} />
                </button>

                <button
                  onClick={() => navigate("/navbar/store")}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  View All Products
                </button>
              </div>
            </div>

            {/* Hero stats */}
            <div className="hidden w-[155px] space-y-3 lg:block">
              <div className="rounded-2xl border border-lime-400/30 bg-lime-400/[0.08] p-5 text-center">
                <p className="text-3xl font-semibold text-lime-400">20+</p>

                <p className="mt-1 text-xs text-zinc-500">Products Available</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/[0.02] p-5 text-center">
                <p className="text-2xl font-semibold">Free</p>

                <p className="mt-1 text-xs text-zinc-600">Delivery on ₹399+</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SHOP BY CATEGORY
        ===================================================== */}

        <section className="mt-24">
          <SectionHeader
            eyebrow="EXPLORE"
            title="Shop by Category"
            description="Find exactly what you're looking for."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div
              onClick={() => navigate("/navbar/store?category=beauty")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Sparkles size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Beauty</h3>
              <p className="mt-1 text-xs text-zinc-600">{beautycount}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=mens-watches")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Watch size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Mens-watches</h3>
              <p className="mt-1 text-xs text-zinc-600">{watch}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=furniture")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Sofa size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Furniture</h3>
              <p className="mt-1 text-xs text-zinc-600">{furn}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() =>
                navigate("/navbar/store?category=kitchen-accessories")
              }
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Utensils size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">
                Kitchen-accessories
              </h3>
              <p className="mt-1 text-xs text-zinc-600">{kitacc}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=groceries")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <ShoppingBasket size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Groceries</h3>
              <p className="mt-1 text-xs text-zinc-600">{gorc}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=laptops")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Laptop size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Laptops</h3>
              <p className="mt-1 text-xs text-zinc-600">{laptop}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=mens-shirts")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Shirt size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Mens-shirts</h3>
              <p className="mt-1 text-xs text-zinc-600">{shirt}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=fragrances")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <SprayCan size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Fragrances</h3>
              <p className="mt-1 text-xs text-zinc-600">{frag}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=home-decoration")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Lamp size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Home-decoration</h3>
              <p className="mt-1 text-xs text-zinc-600">{homede}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() => navigate("/navbar/store?category=mens-shoes")}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Footprints size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Mens-shoes</h3>
              <p className="mt-1 text-xs text-zinc-600">{shoes}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>

            <div
              onClick={() =>
                navigate("/navbar/store?category=mobile-accessories")
              }
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                <Smartphone size={28} />
              </div>
              <h3 className="mt-5 text-sm font-semibold">Mobile-accessories</h3>
              <p className="mt-1 text-xs text-zinc-600">{moblie}+ items</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
                Explore
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOP RATED
        ===================================================== */}

        <section className="mt-28">
          <div className="flex items-end justify-between">
            <SectionHeader
              eyebrow="CUSTOMER FAVORITES"
              title="Top Rated"
              description="Products loved by the SkyMart community."
            />

            <button
              onClick={() => navigate("/navbar/store?featured=rtop")}
              className="hidden items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-lime-400 sm:flex"
            >
              View all
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filterdata.map((elem) => {
              return <ProductCard key={elem.id} product={elem} />;
            })}
          </div>
        </section>

        {/* =====================================================
            PROMO STRIP
        ===================================================== */}

        <section className="mt-20 overflow-hidden rounded-3xl border border-lime-400/20 bg-lime-400/[0.06]">
          <div className="flex flex-col items-center justify-between gap-6 px-8 py-10 md:flex-row md:px-12">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-black">
                <Tag size={25} />
              </div>

              <div>
                <p className="text-lg font-semibold">Deals worth discovering</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Get exclusive offers on selected products.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-lime-400/30 px-5 py-3 text-sm font-medium text-lime-400 transition hover:bg-lime-400 hover:text-black">
              Explore Deals
              <ArrowRight size={17} />
            </button>
          </div>
        </section>

        {/* =====================================================
            NEW ARRIVALS
        ===================================================== */}

        <section className="mt-28">
          <div className="flex items-end justify-between">
            <SectionHeader
              eyebrow="JUST DROPPED"
              title="New Arrivals"
              description="Fresh products added to SkyMart."
            />

            <button
              onClick={() => navigate("/navbar/store")}
              className="hidden items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-lime-400 sm:flex"
            >
              View all
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newproducts.map((elem) => {
              return <ProductCard product={elem} key={elem.id} />;
            })}
          </div>
        </section>

        {/* =====================================================
            WHY SKYMART
        ===================================================== */}

        <section className="mt-28">
          <div className="mb-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-400">
              WHY SKYMART
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Shopping made simple.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<Truck />}
              title="Fast Delivery"
              text="Quick and reliable delivery straight to your doorstep."
            />

            <FeatureCard
              icon={<Star />}
              title="Quality Products"
              text="Carefully selected products from trusted categories."
            />

            <FeatureCard
              icon={<Zap />}
              title="Simple Experience"
              text="Everything you need without unnecessary complexity."
            />
          </div>
        </section>
      </div>
    </main>
  );
};

/* ============================================================
   SECTION HEADER
============================================================ */

const SectionHeader = ({ eyebrow, title, description }) => {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-2 text-sm text-zinc-600">{description}</p>
    </div>
  );
};

/* ============================================================
   CATEGORY CARD
============================================================ */

const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.03]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
        {icon}
      </div>

      <h3 className="mt-5 text-sm font-semibold">{title}</h3>

      <p className="mt-1 text-xs text-zinc-600">{count}</p>

      <div className="mt-5 flex items-center gap-1 text-xs text-zinc-700 transition group-hover:text-lime-400">
        Explore
        <ArrowRight size={13} />
      </div>
    </div>
  );
};

/* ============================================================
   PRODUCT CARD
============================================================ */



/* ============================================================
   FEATURE CARD
============================================================ */

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-lime-400/20">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
      </div>
    </div>
  );
};

export default Home;
