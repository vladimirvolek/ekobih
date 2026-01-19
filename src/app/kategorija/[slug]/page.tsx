import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import AdBanner from "@/components/AdBanner";
import { products, categories } from "@/data/products";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Kategorija nije pronađena",
    };
  }

  return {
    title: `${category.name} - Eko Proizvodi`,
    description: `${category.description}. Pronađite najbolje ${category.name.toLowerCase()} proizvode iz Bosne i Hercegovine.`,
    openGraph: {
      title: `${category.name} - EkoBiH`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Početna
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              href="/kategorije"
              className="text-gray-500 hover:text-green-600"
            >
              Kategorije
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-green-600 font-medium">{category.name}</li>
        </ol>
      </nav>

      {/* Category Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 mb-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
            <p className="text-green-100 mt-2">{category.description}</p>
          </div>
        </div>
        <p className="text-green-100">
          {categoryProducts.length} proizvod
          {categoryProducts.length === 1 ? "" : "a"} u ovoj kategoriji
        </p>
      </header>

      {/* Ad Banner */}
      <AdBanner slot="header" className="mb-8" />

      {/* Products Grid */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl">
          <span className="text-6xl mb-4 block">📦</span>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Nema proizvoda
          </h2>
          <p className="text-gray-500 mb-6">
            U ovoj kategoriji trenutno nemamo proizvode.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            ← Nazad na početnu
          </Link>
        </div>
      )}

      {/* Inline Ad */}
      {categoryProducts.length > 4 && (
        <AdBanner slot="inline" className="mb-8" />
      )}

      {/* Other Categories */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ostale Kategorije
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories
            .filter((c) => c.id !== category.id)
            .map((cat) => (
              <Link
                key={cat.id}
                href={`/kategorija/${cat.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-medium text-gray-700">{cat.name}</span>
              </Link>
            ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-12 prose prose-green max-w-none">
        <h2 className="text-xl font-bold text-gray-900">
          {category.name} - Eko Proizvodi iz BiH
        </h2>
        <p className="text-gray-600">
          Pronađite najbolje {category.name.toLowerCase()} proizvode na EkoBiH.
          {category.description} Svi naši proizvodi su pažljivo odabrani kako bi
          ispunili najviše standarde kvaliteta i održivosti. Podržite lokalne
          proizvođače iz Bosne i Hercegovine i živite zeleni lifestyle.
        </p>
      </section>
    </div>
  );
}
