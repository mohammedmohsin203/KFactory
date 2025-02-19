import ProductsMarquee from "./ProductsMarquee";
import { FeaturedProductsQueryResult } from "@/sanity/types";

export default function ProductsMarqueeWrapper({
  products,
}: {
  products: FeaturedProductsQueryResult;
}) {
  return (
    <section className="py-4 md:py-6">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Our Most Popular Products
      </h2>
      <div className="h-full">
      <ProductsMarquee products={products} /></div>
    </section>
  );
}
