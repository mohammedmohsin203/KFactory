import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowUpRight } from "lucide-react";
import { BrandsQueryResult, CategoriesQueryResult } from "@/sanity/types";

export default function CategoryCardSection({category} : {category:BrandsQueryResult}) {
  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900">Brands</h2>

          <div className="mt-2 space-12 grid-cols-1 grid lg:grid-cols-3 gap-6">
            {category.map((cat, index: number) => (
              <li key={index} className="relative group flex justify-between w-full">

              <Link
              href={`/brand/${cat?.slug?.current}`}
              className={cn(
                "group relative block h-full overflow-hidden rounded-xl bg-background",
                "transition-all duration-300 hover:shadow-xl",
              )}
            >
              <div className="relative aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3]">
                <Image
                  src={cat?.image ? urlForImage(cat?.image).url() : 'placeholder.jpg'}
                  alt="images"
                  width={500}
                  height={500}
                  className="object-contain scale-75 transition-transform duration-300"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 hover:backdrop-blur supports-[backdrop-filter]:bg-background/90">
                <div className="translate-y-0 transform space-y-2 transition-transform duration-300 group-hover:-translate-y-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl group-hover:text-2xl md:group-hover:text-3xl font-semibold md:text-2xl">{cat?.name}</h3>
                    <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </Link>
              </li>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
}
