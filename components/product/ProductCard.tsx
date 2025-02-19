import {
  ProductBySlugQueryResult, ProductsByBrandQueryResult,
  ProductsByCategoryQueryResult
} from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import DenimBag from "@/public/categoryImages/denim bags.webp";
import CategoryCard from "@/components/category/CategoryCard";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard(
  {
  product,
}: {
  product: ProductBySlugQueryResult | ProductsByCategoryQueryResult[0] | ProductsByBrandQueryResult[0];
}
) {

  return (

    <Link
      href={`/product/${product?.slug?.current}`}
      className={cn(
        "group relative block h-full overflow-hidden rounded-xl bg-background",
        "transition-all duration-300 hover:shadow-xl",
      )}
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3]">
        <Image
          src={urlForImage(product?.images!).url()}
          alt="images"
          width={500}
          height={500}
          className="object-contain scale-75 transition-transform duration-300"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 hover:backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="translate-y-10 transform space-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold md:text-2xl">{product?.name}</h3>
            <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <p className="text-2xl text-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 md:text-4xl">
           ₹ {product?.price}
          </p>
        </div>
      </div>
    </Link>

  )
}
