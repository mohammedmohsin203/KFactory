import Billboard from "@/components/Billboard";
import CategoryCardSection from "@/components/category/CategoryCardSection";
import ProductsMarqueeWrapper from "@/components/product/ProductsMarqueeWrapper";
import ProductsMarqueeWrapperSkeleton from "@/components/skeletons/ProductsMarqueeWrapperSkeleton";
import { client } from "@/sanity/lib/client";
import { brandsQuery, categoriesQuery, featuredProductsQuery, productsByCategoryQuery } from "@/sanity/lib/queries";
import {
  BrandsQueryResult,
  CategoriesQueryResult,
  FeaturedProductsQueryResult,
} from "@/sanity/types";
import { Suspense } from "react";
import Appointment from "@/components/Appointment";

export default async function Home() {
  const products = await client.fetch<FeaturedProductsQueryResult>(
    featuredProductsQuery,
  );
  const category = await client.fetch<CategoriesQueryResult>(categoriesQuery);
  const brand = await client.fetch<BrandsQueryResult>(brandsQuery);


  return (
    <main className="px-2">
      <Billboard />
      <CategoryCardSection category={category} />
      <CategoryCardSection category={brand} />
      <Suspense fallback={<ProductsMarqueeWrapperSkeleton />}>
        <ProductsMarqueeWrapper products={products} />
      </Suspense>
      <Appointment/>
    </main>
  );
}
