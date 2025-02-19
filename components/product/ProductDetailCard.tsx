import AddToCartButton from "../cart/AddToCartButton";
import ProductCarousel from "./ProductCarousel";
import { ProductBySlugQueryResult } from "@/sanity/types";
import { Star } from "lucide-react";

export default function ProductDetailCard({
                                            product,
                                          }: {
  product: ProductBySlugQueryResult;
}) {
  // @ts-ignore
  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 2xl:px-0">
        <div className="flex flex-col md:flex-row md:gap-8 xl:gap-16">
          {/* Left Column - Product Images */}
          <div className="w-full md:w-1/2 shrink-0">
            <ProductCarousel product={product} />
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
              <h2 className="pb-2 text-sm font-medium text-gray-900 dark:text-white">Description :</h2>

              <p className="text-gray-500 dark:text-gray-400">
                {product?.description || "Product description not available"}
              </p>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <div className="space-y-4">
              <h2 className="pb-2 text-sm font-medium text-gray-900 dark:text-white">Installation Guide :</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {product?.installation || "Product description not available"}
                </p>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {product?.name}
            </h1>

            {/* Price and Rating Section */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                ₹ {product?.price}
                <span className="text-xs font-normal text-gray-500 ml-2 translate-y-2">(including GST)</span>
              </p>
            </div>

            {/* Product Details Table */}
            <div className="mt-8 border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { label: "Product Code", value: product?.id },
                  { label: "Size", value: product?.size },
                  { label: "Brand", value:  product?.brand?.name },
                  { label: "Warranty", value: product?.warranty },
                ].map((item, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {item.value || "N/A"}
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} />
            </div>

            {/* Specifications Section */}
            {product?.specifications && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specifications</h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Material: {product.specifications.material}</li>
                  <li>OEM Number: {product.specifications.oemNumber}</li>
                  <li>Weight: {product.specifications.weight}</li>
                  <li>Dimensions: {product.specifications.dimensions}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}