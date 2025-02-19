import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  className?: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  link,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={link}
      className={cn(
        "group relative block h-full overflow-hidden rounded-xl bg-background",
        "transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/4] md:aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 hover:backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="translate-y-4 transform space-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
            <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <p className="text-sm text-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
