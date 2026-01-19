import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import { products, categories, featuredProducts } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-3xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="relative px-8 py-16 md:py-24 md:px-16">
          <div className="max-w-2xl">
            <span className="inline-block bg-green-500/30 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              🌿 Održivi Izbor za BiH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Eko Proizvodi iz Bosne i Hercegovine
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Otkrijte najbolje organske i ekološke proizvode. Podržite lokalne
              proizvođače i živite održivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#proizvodi"
                className="bg-white text-green-700 font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
              >
                Pogledaj Proizvode
              </Link>
              <Link
                href="/o-nama"
                className="border-2 border-white/50 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                O Nama
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -bottom-20 text-[200px] opacity-10">
          🌱
        </div>
      </section>

      {/* Ad Banner - Header */}
      <AdBanner slot="header" className="mb-12" />

      {/* Categories */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Kategorije Proizvoda
            </h2>
            <p className="text-gray-500 mt-2">
              Pronađite ono što vam treba za zeleni lifestyle
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16" id="proizvodi">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Preporučeni Proizvodi
            </h2>
            <p className="text-gray-500 mt-2">Naši top izbori za vas</p>
          </div>
          <Link
            href="/svi-proizvodi"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            Vidi sve
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Eco Section */}
      <section className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Zašto Birati Eko?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ekološki proizvodi nisu samo zdraviji za vas - oni pomažu očuvanju
            naše planete i podržavaju lokalne zajednice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              🌍
            </div>
            <h3 className="font-semibold text-lg mb-2">Očuvanje Prirode</h3>
            <p className="text-gray-500">
              Eko proizvodi smanjuju zagađenje i pomažu očuvanju biodiverziteta u
              BiH.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              💪
            </div>
            <h3 className="font-semibold text-lg mb-2">Zdraviji Život</h3>
            <p className="text-gray-500">
              Bez pesticida, bez štetnih hemikalija - samo prirodno i zdravo za
              vas i vašu porodicu.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              🤝
            </div>
            <h3 className="font-semibold text-lg mb-2">Podrška Lokalnim</h3>
            <p className="text-gray-500">
              Kupovinom lokalnih proizvoda podržavate bosanske proizvođače i
              njihove porodice.
            </p>
          </div>
        </div>
      </section>

      {/* Inline Ad */}
      <AdBanner slot="inline" className="mb-16" />

      {/* All Products Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Svi Proizvodi
            </h2>
            <p className="text-gray-500 mt-2">
              Pregledajte našu kompletnu ponudu
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* SEO Content */}
      <section className="mt-16 prose prose-green max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Eko Proizvodi iz Bosne i Hercegovine - Vaš Vodič za Održivi Život
        </h2>
        <div className="text-gray-600 space-y-4">
          <p>
            <strong>EkoBiH</strong> je vaša destinacija za pronalaženje najboljih
            ekoloških i organskih proizvoda iz Bosne i Hercegovine. Od
            tradicionalnog bosanskog meda i organskog ajvara, do moderne solarne
            opreme i eko kozmetike - nudimo pažljivo odabrane proizvode koji
            kombinuju kvalitet i održivost.
          </p>
          <p>
            Naša misija je povezati vas sa lokalnim proizvođačima koji dijele
            vrijednosti očuvanja prirode i tradicionalne proizvodnje. Bilo da
            tražite <em>bio hranu</em>, <em>prirodnu kozmetiku</em> ili opremu za
            <em>zeleni životni stil</em>, kod nas ćete pronaći proizvode koji
            ispunjavaju najviše standarde kvaliteta.
          </p>
          <p>
            Bosna i Hercegovina je zemlja netaknute prirode, čistih rijeka i
            planinskih pašnjaka. Naši proizvodi dolaze iz ovog čistog okruženja,
            proizvedeni tradicionalnim metodama koje poštuju prirodu. Pridružite
            se eko pokretu i napravite razliku - za sebe, za svoju porodicu i za
            našu planetu.
          </p>
        </div>
      </section>
    </div>
  );
}
