import { Category } from "@/types";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/kategorija/${category.slug}`}
      className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200"
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
        {category.icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500">{category.description}</p>
    </Link>
  );
}
