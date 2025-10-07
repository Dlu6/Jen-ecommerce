import React from "react";

const brand = {
  primary: "#acb625",
  dark: "#0f172a",
  light: "#f8fafc",
};

const PhoneFrame = ({ children, className = "" }) => (
  <div
    className={`relative mx-auto aspect-[9/19.5] w-[280px] max-w-[82vw] rounded-[2.5rem] border-4 border-gray-800 bg-gray-900 shadow-2xl ${className}`}
    style={{
      boxShadow:
        "0 30px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    }}
  >
    {/* Dynamic Island */}
    <div className="absolute left-1/2 top-2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-black" />
    {/* Home indicator */}
    <div className="absolute bottom-3 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30" />
    {/* Screen */}
    <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-white">
      {children}
    </div>
  </div>
);

const GlassCard = ({ title, desc, icon, className = "" }) => (
  <div
    className={`group rounded-2xl border border-white/20 bg-white/60 p-5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all ${className}`}
    style={{ boxShadow: "0 10px 30px rgba(2,8,23,0.06)" }}
  >
    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-black/5">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
    <p className="mt-1 text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Bullet = ({ children }) => (
  <li className="flex gap-3">
    <span
      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ background: brand.primary }}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white">
        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
      </svg>
    </span>
    <span className="text-slate-700">{children}</span>
  </li>
);

const Row = ({ title, children }) => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <h4 className="text-sm font-semibold">{title}</h4>
      <button
        className="text-xs font-semibold"
        style={{ color: brand.primary }}
      >
        See all
      </button>
    </div>
    <div className="grid grid-cols-2 gap-3">{children}</div>
  </div>
);

export default function JENLandingMockup() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl ring-1 ring-black/5"
              style={{ background: brand.primary }}
            >
              <span className="text-base font-extrabold tracking-tight text-black/90">
                J
              </span>
            </div>
            <div>
              <p
                className="text-xl  font-black tracking-tight"
                style={{ color: brand.primary }}
              >
                JEN
              </p>
              <p className="-mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Multi‑Vendor Commerce
              </p>
            </div>
          </div>
          <div className="hidden gap-6 md:flex">
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#vendors"
            >
              Vendors
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#preview"
            >
              Preview
            </a>
            <a
              className="text-sm text-slate-600 hover:text-slate-900"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-black/10 md:block"
              style={{ background: "white" }}
            >
              Become a Vendor
            </button>
            <button
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: brand.primary }}
            >
              Get the App
            </button>
          </div>
        </nav>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:gap-12 md:pt-16">
          <div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              The everyday marketplace for{" "}
              <span
                className="underline decoration-8"
                style={{ textDecorationColor: brand.primary }}
              >
                food
              </span>{" "}
              &amp; FMCG
            </h1>
            <p className="mt-4 max-w-prose text-lg text-slate-600">
              JEN brings restaurants, groceries, and fast‑moving consumer goods
              into one simple app. Discover nearby vendors, order in minutes,
              and track delivery in real‑time.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <Bullet>
                Under 30‑minute delivery windows in supported zones
              </Bullet>
              <Bullet>
                Multi‑vendor cart: mix restaurants and grocery items
              </Bullet>
              <Bullet>Secure payments and transparent fees</Bullet>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-black shadow-sm"
                style={{ background: brand.primary }}
              >
                Available in App Stores
              </button>
              <button className="rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 bg-white">
                Coming Soon!
              </button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Palette
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex h-6 w-6 rounded-md ring-1 ring-black/5"
                  style={{ background: brand.primary }}
                  title="#acb625"
                />
                <span
                  className="inline-flex h-6 w-6 rounded-md bg-slate-900 ring-1 ring-black/5"
                  title="#0f172a"
                />
                <span
                  className="inline-flex h-6 w-6 rounded-md bg-white ring-1 ring-black/10"
                  title="#ffffff"
                />
              </div>
              <code className="ml-2 rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-700">
                #acb625
              </code>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -left-10 -top-8 -z-10 h-72 w-72 rounded-full blur-3xl"
              style={{ background: brand.primary, opacity: 0.3 }}
            />
            <div className="flex items-center justify-center gap-6">
              <PhoneFrame className="rotate-[-8deg]">
                <HomeScreen />
              </PhoneFrame>
              <PhoneFrame className="hidden rotate-[8deg] md:block">
                <VendorScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative border-t border-black/5 bg-white py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-black">
            Built for speed, built for scale
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
            A modern multi‑vendor stack that delights customers and empowers
            vendors.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard
              title="Multi‑vendor cart"
              desc="Customers can add from multiple stores in one checkout, with smart logistics to split deliveries."
              icon={<IconCart />}
            />
            <GlassCard
              title="Real‑time tracking"
              desc="Live order status, driver location, and ETA updates keep everyone synced."
              icon={<IconMap />}
            />
            <GlassCard
              title="Secure payments"
              desc="Card, wallet, and cash options; payouts for vendors using automated settlements."
              icon={<IconShield />}
            />
            <GlassCard
              title="Promotions & loyalty"
              desc="Coupons, bundles, happy hours, and points to keep customers coming back."
              icon={<IconSpark />}
            />
            <GlassCard
              title="Vendor dashboard"
              desc="Menus, inventory, pricing, and analytics—managed in a clean vendor portal."
              icon={<IconChart />}
            />
            <GlassCard
              title="Fast delivery ops"
              desc="Zoned SLAs, batching, and courier app hooks to reduce delivery times."
              icon={<IconBolt />}
            />
          </div>
        </div>
      </section>

      <section id="vendors" className="relative bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Restaurants</h3>
              <p className="mt-2 text-slate-600">
                Quick‑serve, casual dining, cloud kitchens. Support for combos,
                add‑ons, and prep times.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <VendorCard
                  name="Kito Burger"
                  tags={["Burgers", "Fries"]}
                  price="9.99"
                  rating="4.6"
                />
                <VendorCard
                  name="Mama Samosa"
                  tags={["Snacks", "Chai"]}
                  price="3.50"
                  rating="4.8"
                />
                <VendorCard
                  name="Pasta Roma"
                  tags={["Italian", "Pasta"]}
                  price="11.00"
                  rating="4.5"
                />
                <VendorCard
                  name="Spice House"
                  tags={["Curry", "BBQ"]}
                  price="7.80"
                  rating="4.7"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">FMCG & Groceries</h3>
              <p className="mt-2 text-slate-600">
                Everything from milk and bread to personal care and cleaning
                supplies—delivered fast.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <ProductCard title="Fresh Bananas" sub="1kg" price="2.20" />
                <ProductCard title="UHT Milk" sub="500ml" price="0.80" />
                <ProductCard title="Dish Soap" sub="750ml" price="2.10" />
                <ProductCard title="Toothpaste" sub="110g" price="1.25" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="preview"
        className="relative border-t border-black/5 bg-white py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black">Mobile screens preview</h2>
              <p className="mt-2 text-slate-600">
                Use this as a reference for spacing, typography, and component
                hierarchy.
              </p>
            </div>
            <button
              className="text-sm font-semibold hover:underline"
              style={{ color: brand.primary }}
            >
              Download Figma starter →
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhoneFrame>
              <HomeScreen compact />
            </PhoneFrame>
            <PhoneFrame>
              <SearchScreen />
            </PhoneFrame>
            <PhoneFrame>
              <CheckoutScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-slate-900 py-16"
      >
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full blur-3xl"
          style={{ background: brand.primary, opacity: 0.2 }}
        />
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-white">
                JEN e-commerce platform ~ Coming Soon!
              </h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Starting with this mockup as a design spec. We shall expand into
                flows for vendor onboarding, web client and mobile apps
                gradually.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <button
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-black"
                style={{ background: brand.primary }}
              >
                Soft launch ~ 20.10.2025
              </button>
              <button className="rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} JEN ~ MM-ICT
      </footer>
    </div>
  );
}

function HomeScreen({ compact = false }) {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 pt-2 pb-1 text-xs font-semibold text-black">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" />
          </svg>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
          <div className="ml-1 flex items-center gap-0.5">
            <div className="h-2.5 w-5 rounded-sm border border-black relative">
              <div className="absolute inset-0.5 w-3/4 rounded-sm bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100 px-5 py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: brand.primary }}
            >
              <span className="text-base font-black text-black">J</span>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-gray-900">
                JEN
              </span>
              <div className="text-[10px] text-gray-500 -mt-0.5 tracking-wide">
                Marketplace
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <IconSearch className="h-5 w-5 text-gray-700" />
            </button>
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <IconBell className="h-5 w-5 text-gray-700" />
              <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5 pb-24 bg-gradient-to-b from-gray-50 to-white">
        {/* Location Card */}
        <div
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{
            background: `linear-gradient(135deg, ${brand.primary} 0%, #95a31f 100%)`,
            boxShadow: "0 8px 24px -6px rgba(172, 182, 37, 0.3)",
          }}
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/8"></div>
          <div className="absolute -left-6 -bottom-6 h-16 w-16 rounded-full bg-black/5"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="h-3.5 w-3.5 text-white/90"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-[11px] uppercase tracking-wider text-white/90 font-semibold">
                    Delivering to
                  </p>
                </div>
                <p className="text-xl font-black mb-1">Ntinda</p>
                <p className="text-sm text-white/90 font-medium">
                  20–35 min delivery
                </p>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded-full bg-white/15 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white border border-white/20">
                Free delivery over 🎉{""} UGX 200K
              </span>
              <span className="rounded-full bg-white/15 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white border border-white/20">
                ⭐ 4.8 Rating
              </span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-gray-900">Browse</h3>
            <button className="text-xs font-semibold text-gray-500 hover:text-gray-900">
              See all
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <Cat icon={<IconBurger />} label="Food" active={true} />
            <Cat icon={<IconCartMini />} label="Grocery" />
            <Cat icon={<IconBottle />} label="Drinks" />
            <Cat icon={<IconSpark />} label="Deals" />
          </div>
        </div>

        {/* Content Sections */}
        <div className={`mt-6 ${compact ? "space-y-5" : "space-y-6"}`}>
          <Row title="Popular Restaurants">
            <MiniVendorCard
              name="Kito Burger"
              tag="Burgers • 25–35 min"
              rating="4.6"
              image="🍔"
            />
            <MiniVendorCard
              name="Pasta"
              tag="Italian • 20–30 min"
              rating="4.5"
              image="🍝"
            />
          </Row>
          <Row title="Everyday Essentials">
            <MiniProductCard
              title="UHT Milk 500ml"
              price="UGX 10,000"
              image="🥛"
            />
            <MiniProductCard
              title="Toothpaste 110g"
              price="UGX 15,000"
              image="🦷"
            />
          </Row>
        </div>
      </div>
    </div>
  );
}

function VendorScreen() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gray-50">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-2 text-xs font-semibold text-black">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          </div>
          <div className="ml-2 h-3 w-6 rounded-sm border border-black">
            <div className="h-full w-4/5 rounded-sm bg-black"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-2 text-sm font-semibold text-gray-600"
            style={{ color: brand.primary }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <div className="flex-1 text-center px-4">
            <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap">
              Kito Burger
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">Fast Food</p>
          </div>
          <button className="p-2 rounded-full bg-gray-100">
            <IconHeart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Restaurant Hero Section */}
      <div className="relative bg-white">
        <div className="h-40 bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
          {/* Big Burger Cover Artwork */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl opacity-90 drop-shadow-lg">🍔</div>
          </div>
          {/* Restaurant Name Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-2xl font-black text-white drop-shadow-lg">
              Kito Burger
            </h2>
          </div>
        </div>
        <div className="relative px-4 -mt-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Image at the top - bigger */}
            <div className="h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-4xl">
              🍔
            </div>

            {/* Text content below image */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                  <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                  <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                  <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                  <IconStar className="h-3 w-3 text-yellow-400 fill-current" />
                </div>
                <span className="text-sm font-bold text-gray-500">4.6</span>
                <span className="text-xs text-gray-500">(1.2k)</span>
              </div>

              {/* Restaurant name and cuisine */}
              <div className="text-md font-bold text-gray-900">Beef Burger</div>
              <div className="text-xs text-gray-500">
                Burgers • American • Fast Food
              </div>

              {/* Price and delivery time below name */}
              <div className="space-y-1">
                {/* Price on its own row */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Shs 3,000
                </div>

                {/* Duration below price */}
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                  <svg
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  25–35 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {/* Duration container */}
          <div className="bg-gray-200 rounded-lg px-2 py-1.5 text-center flex-shrink-0">
            <div className="text-[8px] font-bold text-gray-900">Delivery</div>
            <div className="text-[7px] text-gray-500">25-45 min</div>
          </div>
          {/* Rating container */}
          <div className="bg-gray-200 rounded-lg px-2 py-1.5 text-center flex-shrink-0">
            <div className="text-[8px] font-bold text-gray-900">4.6</div>
            <div className="text-[7px] text-gray-500">rating</div>
          </div>

          {/* Reviews container */}
          <div className="bg-gray-200 rounded-lg px-2 py-1.5 text-center flex-shrink-0">
            <div className="text-[8px] font-bold text-gray-900">1.2k</div>
            <div className="text-[7px] text-gray-500">reviews</div>
          </div>

          {/* View all container */}
          <button className="bg-blue-200 rounded-lg px-2 py-1.5 text-[8px] font-medium text-blue-600 whitespace-nowrap hover:bg-blue-100 transition-colors flex-shrink-0">
            View all
          </button>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex gap-3 overflow-x-auto">
          <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium whitespace-nowrap">
            Popular
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap">
            Burgers
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap">
            Sides
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium whitespace-nowrap">
            Drinks
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-6">
        <div className="space-y-4">
          <MenuCard
            title="Double Beef Burger"
            sub="Juicy beef patty with cheese, lettuce, tomato"
            price="Shs 7,900"
            image="🍔"
            popular={true}
          />
          <MenuCard
            title="Chicken Wrap"
            sub="Spicy chicken with fresh vegetables"
            price="Shs 6,400"
            image="🌯"
          />
          <MenuCard
            title="Veggie Bowl"
            sub="Fresh avocado, mixed greens, quinoa"
            price="Shs 5,800"
            image="🥗"
          />
          <MenuCard
            title="Family Pack"
            sub="4 burgers + 4 fries + 4 drinks"
            price="Shs 22,000"
            image="📦"
            discount="15% off"
          />
        </div>
      </div>

      {/* Bottom Cart */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 p-6 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-600">2 items in cart</div>
          <div className="text-sm font-bold text-gray-900">Shs 12,250</div>
        </div>
        <button
          className="w-full rounded-2xl px-4 py-4 text-sm font-bold text-white shadow-lg"
          style={{ background: brand.primary }}
        >
          View Cart • Shs 12,250
        </button>
      </div>
    </div>
  );
}

function SearchScreen() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gray-50">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-6 py-2 text-xs font-semibold text-black">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          </div>
          <div className="ml-2 h-3 w-6 rounded-sm border border-black">
            <div className="h-full w-4/5 rounded-sm bg-black"></div>
          </div>
        </div>
      </div>

      {/* Search Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="p-1.5 flex-shrink-0">
            <svg
              className="h-4 w-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-3 py-2 flex-1 min-w-0">
            <IconSearch className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 min-w-0"
              placeholder="Search 'bread', 'pizza', 'soap'…"
            />
            <div className="h-4 w-px bg-gray-300 flex-shrink-0"></div>
            <button className="text-xs font-medium text-gray-600 flex-shrink-0">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Popular Searches */}
        <div className="mb-8">
          <p className="mb-4 text-lg font-bold text-gray-900">
            Popular searches
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Matooke
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Fanta
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              BBQ
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Rice
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              Soap
            </span>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          <MiniVendorCard
            name="Spice House"
            tag="BBQ • 30–40 min"
            rating="4.7"
            image="🔥"
          />
          <MiniProductCard
            title="Sunflower Oil 1L"
            price="Shs 2,600"
            image="🫒"
          />
          <MiniVendorCard
            name="Mama Samosa"
            tag="Snacks • 15–25 min"
            rating="4.8"
            image="🥟"
          />
          <MiniProductCard
            title="Brown Bread 500g"
            price="Shs 1,100"
            image="🍞"
          />
        </div>
      </div>
    </div>
  );
}

function CheckoutScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-50">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-black">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          </div>
          <div className="ml-2 h-3 w-6 rounded-sm border border-black">
            <div className="h-full w-4/5 rounded-sm bg-black"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-4 py-4">
        <div className="flex items-center gap-4">
          <button className="p-2">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-lg font-bold text-gray-900">Checkout</div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          <LineItem title="UHT Milk 500ml" qty={2} price={0.8} image="🥛" />
          <LineItem title="Toothpaste 110g" qty={1} price={1.25} image="🦷" />
          <LineItem
            title="Double Beef + Fries"
            qty={1}
            price={7.9}
            image="🍔"
          />
        </div>

        {/* Order Summary */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">Shs 10,750</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Delivery fee</span>
              <span className="font-semibold text-gray-900">Shs 1,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Service fee</span>
              <span className="font-semibold text-gray-900">Shs 0</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  Shs 12,250
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-base font-semibold text-gray-900 mb-4">
            Payment Method
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-16 rounded bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-bold text-gray-600">💳</span>
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-gray-900">
                •••• 4242
              </div>
              <div className="text-sm text-gray-500">Expires 12/25</div>
            </div>
            <button className="text-sm font-medium text-blue-600">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="border-t border-gray-200 bg-white p-4 shadow-lg">
        <button
          className="w-full rounded-2xl px-6 py-4 text-base font-bold text-white shadow-lg"
          style={{ background: brand.primary }}
        >
          Pay Shs 12,250 & Place Order
        </button>
      </div>
    </div>
  );
}

// const Tag = ({ children }) => (
//   <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-black/10 shadow-sm">
//     {children}
//   </span>
// );

const Cat = ({ icon, label, active = false }) => (
  <div className="grid place-items-center gap-2">
    <div
      className={`grid h-12 w-12 place-items-center rounded-xl shadow-sm transition-all ${
        active ? "bg-white shadow-md ring-2" : "bg-white ring-1 ring-gray-200"
      }`}
      style={
        active
          ? {
              background: brand.primary,
              boxShadow: `0 4px 12px ${brand.primary}40`,
            }
          : {}
      }
    >
      <div className={active ? "text-white" : "text-gray-600"}>{icon}</div>
    </div>
    <span
      className={`text-xs font-medium ${
        active ? "text-gray-900" : "text-gray-600"
      }`}
    >
      {label}
    </span>
  </div>
);

const VendorCard = ({ name, tags, price, rating }) => (
  <div className="rounded-2xl border border-black/5 bg-slate-50 p-4">
    <div className="flex items-center justify-between text-sm">
      <b>{name}</b>
      <span className="inline-flex items-center gap-1 text-slate-600">
        <IconStar className="h-4 w-4" />
        {rating}
      </span>
    </div>
    <p className="mt-1 text-xs text-slate-600">{tags.join(" • ")}</p>
    <div className="mt-3 flex items-center justify-between text-sm">
      <span className="font-semibold">From Shs {price}</span>
      <button
        className="rounded-lg px-3 py-1 text-xs font-semibold text-black"
        style={{ background: brand.primary }}
      >
        View
      </button>
    </div>
  </div>
);

const ProductCard = ({ title, sub, price }) => (
  <div className="rounded-2xl border border-black/5 bg-slate-50 p-4">
    <div className="text-sm font-semibold">{title}</div>
    <div className="text-xs text-slate-600">{sub}</div>
    <div className="mt-3 flex items-center justify-between text-sm">
      <span className="font-semibold">Shs {price}</span>
      <button
        className="rounded-lg px-3 py-1 text-xs font-semibold text-black"
        style={{ background: brand.primary }}
      >
        Add
      </button>
    </div>
  </div>
);

const MiniVendorCard = ({ name, tag, rating, image }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col gap-3">
      {/* Image at the top */}
      <div className="flex justify-center">
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-3xl shadow-sm group-hover:shadow transition-shadow">
          {image}
        </div>
      </div>

      {/* Text content in the middle */}
      <div className="text-center space-y-1">
        <h3 className="text-sm font-bold text-gray-900 leading-tight">
          {name}
        </h3>
        <p className="text-xs text-gray-500 leading-tight">{tag}</p>
        <div className="flex items-center justify-center gap-1">
          <IconStar className="h-3 w-3 text-yellow-500" />
          <span className="text-xs font-semibold text-gray-600">{rating}</span>
        </div>
      </div>

      {/* Button at the bottom */}
      <button
        className="w-full rounded-lg px-3 py-2 text-xs font-bold text-white shadow-sm hover:shadow-md transition-all"
        style={{ background: brand.primary }}
      >
        View Menu
      </button>
    </div>
  </div>
);

const MiniProductCard = ({ title, price, image }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col gap-3">
      {/* Image at the top */}
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-2xl shadow-sm group-hover:shadow transition-shadow">
          {image}
        </div>
      </div>

      {/* Text content in the middle */}
      <div className="text-center space-y-1">
        <h3 className="text-sm font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-500 font-semibold">{price}</p>
      </div>

      {/* Button at the bottom */}
      <button
        className="w-full rounded-lg px-3 py-2 text-xs font-bold text-white shadow-sm hover:shadow-md transition-all"
        style={{ background: brand.primary }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const MenuCard = ({ title, sub, price, image, popular, discount }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-all group">
    <div className="flex flex-col gap-3">
      {/* Image at the top */}
      <div className="flex justify-center relative">
        <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-3xl shadow-sm group-hover:shadow transition-shadow">
          {image}
        </div>
        {popular && (
          <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-lg font-black shadow-sm">
            HOT
          </div>
        )}
        {discount && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-2 py-1 rounded-lg font-black shadow-sm">
            {discount}
          </div>
        )}
      </div>

      {/* Text content in the middle */}
      <div className="text-center space-y-1">
        <h3 className="text-sm font-black text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-tight line-clamp-2">
          {sub}
        </p>
        <div className="text-sm font-black text-gray-900">{price}</div>
        {discount && (
          <div className="text-[10px] text-gray-400 line-through">
            UGX 25,900
          </div>
        )}
      </div>

      {/* Quantity controls and Add button at the bottom */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-3">
          <button className="h-7 w-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            -
          </button>
          <span className="text-sm font-medium text-gray-900 min-w-[20px] text-center">
            1
          </span>
          <button className="h-7 w-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            +
          </button>
        </div>
        <button
          className="w-full rounded-lg px-3 py-2 text-xs font-bold text-white shadow-sm hover:shadow-md transition-all"
          style={{ background: brand.primary }}
        >
          Add
        </button>
      </div>
    </div>
  </div>
);

const LineItem = ({ title, qty, price, image }) => (
  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
    <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm">
      {image}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-gray-900">{title}</div>
      <div className="text-xs text-gray-500">Qty {qty}</div>
    </div>
    <div className="text-sm font-semibold text-gray-900">
      Shs {(qty * price).toFixed(2)}
    </div>
  </div>
);

const IconCart = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.53c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 0-.88-1.48H6.21L5.27 2H2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 8 16h12v-2H8.42a.5.5 0 0 1-.44-.74l.77-1.26z"
    />
  </svg>
);

const IconMap = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M15 4 9 6 3 4v16l6 2 6-2 6 2V6l-6-2zm0 2.47 4 1.33v12.73l-4-1.33V6.47zM5 6.47l4 1.33v12.73L5 19.2V6.47z"
    />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M12 2 4 5v6c0 5 3.8 9.7 8 11 4.2-1.3 8-6 8-11V5l-8-3z"
    />
  </svg>
);

const IconSpark = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path fill="currentColor" d="M11 2v6L6 9l5 1v6l2-6 5-1-5-1-2-6z" />
  </svg>
);

const IconChart = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M3 3h2v18H3V3zm4 10h2v8H7v-8zm4-6h2v14h-2V7zm4 4h2v10h-2V11zm4-8h2v18h-2V3z"
    />
  </svg>
);

const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

const IconBurger = (props) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...props}>
    <path
      fill="currentColor"
      d="M4 15h16v2H4v-2zm0-4c0-3.3 3.6-6 8-6s8 2.7 8 6H4zm-1 3h18v-2H3v2z"
    />
  </svg>
);

const IconCartMini = (props) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...props}>
    <path
      fill="currentColor"
      d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 14h9.53c.75 0 1.41-.41 1.75-1.03l3.58-6.49H6.21L5.27 2H2v2h2l3.6 7.59L6.25 14H7.16z"
    />
  </svg>
);

const IconBottle = (props) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...props}>
    <path
      fill="currentColor"
      d="M10 2h4v3l1 2v13a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V7l1-2V2z"
    />
  </svg>
);

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79l5 5 1.5-1.5-5-5zM6.5 11A4.5 4.5 0 1 1 11 15.5 4.5 4.5 0 0 1 6.5 11z"
    />
  </svg>
);

const IconBell = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zM18 16V11a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"
    />
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      fill="currentColor"
      d="M12 21s-6.72-4.35-9.33-8A5.5 5.5 0 0 1 12 5.67 5.5 5.5 0 0 1 21.33 13c-2.61 3.65-9.33 8-9.33 8z"
    />
  </svg>
);

const IconStar = (props) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" {...props}>
    <path
      fill="currentColor"
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);
