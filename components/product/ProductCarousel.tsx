"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlForImage } from "@/sanity/lib/image";
import { ProductBySlugQueryResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ProductCarousel({
                                          product,
                                        }: {
  product: ProductBySlugQueryResult;
}) {
  const [slidesInView, setSlidesInView] = useState(1);

  useEffect(() => {
    const updateSlidesInView = () => {
      if (window.innerWidth >= 1280) {
        setSlidesInView(3); // xl and above
      } else if (window.innerWidth >= 768) {
        setSlidesInView(2); // md to xl
      } else {
        setSlidesInView(1); // below md
      }
    };

    // Initial check
    updateSlidesInView();

    // Add resize listener
    window.addEventListener('resize', updateSlidesInView);

    // Cleanup
    return () => window.removeEventListener('resize', updateSlidesInView);
  }, []);

  const getSlideClass = () => {
    switch (slidesInView) {
      case 3:
        return "basis-1/3";
      case 2:
        return "basis-1/2";
      default:
        return "basis-full";
    }
  };

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: slidesInView,
          skipSnaps: false,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {product?.images!.map((image: any, index: number) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-2 md:pl-4",
                getSlideClass()
              )}
            >
              <AspectRatio ratio={1 / 1} className="bg-gray-50 dark:bg-gray-800">
                <Image
                  src={urlForImage(image).url()}
                  width={1000}
                  height={1000}
                  alt={product?.name!}
                  className="rounded-lg object-cover w-full h-full"
                  priority={index < slidesInView} // Only prioritize visible slides
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>
    </div>
  );
}