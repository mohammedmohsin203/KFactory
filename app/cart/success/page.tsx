import { Button } from "@/components/ui/button";
import { Check, ExternalLink, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export const runtime = "edge";

export default async function SuccessPage(
  props: {
    searchParams: Promise<{
      name: string;
      email: string;
      phoneNumber: string;
      short_url: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const email = searchParams.email;
  const phoneNumber = searchParams.phoneNumber;
  const short_url = searchParams.short_url;
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center gap-8 px-4 py-16 md:py-24 animate-in fade-in-0 duration-1000">
      {/* Success Icon with Animation */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
        <div
          className="relative rounded-full bg-green-400 p-8 shadow-lg shadow-green-400/30 animate-in zoom-in-50 duration-500">
          <div className="animate-in slide-in-from-bottom duration-700 delay-300">
            <Check className="w-16 h-16 md:w-24 md:h-24 text-white" />
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <h1 className={cn(
        "text-center text-4xl md:text-6xl font-bold",
        "bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent",
        "animate-in slide-in-from-bottom duration-700 delay-200"
      )}>
        Thank you for your order
      </h1>

      {/* Order Details Card */}
      <div className="w-full max-w-lg animate-in fade-in-50 duration-1000 delay-300">
        <div className="relative p-6 rounded-xl border border-dashed border-secondary bg-card">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-background">
            <span className="text-sm text-muted-foreground">Order Details</span>
          </div>

          <p className="text-center text-lg space-y-1">
            The order will be received in 3-4 days details and payment link have been sent to:
          </p>

          <div className="mt-4 space-y-2">
            <div className="p-2 rounded-lg bg-muted/50 text-center hover:scale-[1.02] transition-transform">
              <span className="font-medium">{email}</span>
            </div>

            <div className="p-2 rounded-lg bg-muted/50 text-center hover:scale-[1.02] transition-transform">
              <span className="font-medium">{phoneNumber}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={short_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Button className="w-full gap-2">
                Open Invoice
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>

            <Link
              href="/"
              className="inline-block w-full transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Button variant="secondary" className="w-full gap-2">
                Continue Shopping
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
