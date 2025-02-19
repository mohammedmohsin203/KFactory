import { urlForImage } from "@/sanity/lib/image";
import { DeleteIcon, Minus, MinusIcon, Plus, PlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CartProduct } from "@/store/useCartStore";

export default function CartProductCard({
  product,
  addToCart,
  removeFromCart,
  deleteFromCart,
}: {
  addToCart: (Item: CartProduct) => void;
  removeFromCart: (Item: CartProduct) => void;
  deleteFromCart: (Item: CartProduct) => void;
} & { product: CartProduct }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-3">
        <div className="flex gap-4">
          {/* Product Image */}
          <Link
            href={`/product/${product.slug?.current}`}
            className="relative aspect-square h-24 w-24 shrink-0 overflow-hidden rounded-md"
          >
            <Image
              src={product?.images ? urlForImage(product?.images?.[0]).url() : 'placeholder.jpg'}
              alt='image'
              fill
              className="object-cover transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Product Details */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="space-y-1">
              <Link
                href={`/product/${product.slug?.current}`}
                className="line-clamp-2 text-sm font-medium hover:underline"
              >
                {product.name}
              </Link>
              <div className="font-medium text-primary">
                ₹ {product.price}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2">
              {/* Quantity Controls */}
              <div className="flex items-center rounded-lg border bg-background p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => removeFromCart(product)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="min-w-8 text-center text-sm">
                  {product.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => addToCart(product)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              {/* Delete Button */}
              <Button
                variant="destructive"
                size="icon"
                className="h-7 w-7"
                onClick={() => deleteFromCart(product)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>  );
}
