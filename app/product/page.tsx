import { FeaturedProductsQueryResult } from "@/sanity/types";
import ProductCard from "@/components/product/ProductCard";
import { client } from "@/sanity/lib/client";
import { featuredProductsQuery } from "@/sanity/lib/queries";

export default async function Product() {
  const products = await client.fetch<FeaturedProductsQueryResult>(
    featuredProductsQuery,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products?.map((product, index) => (
          <div
            key={index}
            className="transform transition-all duration-500"
            style={{
              opacity: 0,
              animation: 'slideInFromRight 0.8s ease-out forwards',
              animationDelay: `${index * 200}ms`,
            }}
          >
            <div className="hover:scale-105 transition-transform duration-300">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

