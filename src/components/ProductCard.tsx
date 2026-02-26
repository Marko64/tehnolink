"use client";

import { Card, Button } from "@nextui-org/react";
import { WooCommerceProduct } from "@/types/woocommerce";
import type { ProductFilters } from "@/types/woocommerce";
import Link from "next/link";
import { filtersToQueryString } from "@/lib/filterQuery";
import { Settings } from "lucide-react";

interface ProductCardProps {
  product: WooCommerceProduct;
  filters?: ProductFilters;
}

export function ProductCard({ product, filters }: ProductCardProps) {
  const linkFilters = filters ? { ...filters, excludedCategories: undefined } : undefined;
  const qs = linkFilters ? filtersToQueryString(linkFilters) : "";
  const href = qs ? `/products/${product.id}?${qs}` : `/products/${product.id}`;

  // Function to get engine image based on product name, categories, and attributes
  const getEngineImage = (product: WooCommerceProduct) => {
    const name = product.name.toLowerCase();
    
    // Check product name first
    if (name.includes('cummins')) return { src: '/motori/cummins.avif', isSmaller: true };
    if (name.includes('hyundai')) return { src: '/motori/hyundai.avif', isSmaller: false };
    if (name.includes('iveco')) return { src: '/motori/iveco.avif', isSmaller: false };
    if (name.includes('kohler')) return { src: '/motori/kohler.avif', isSmaller: false };
    if (name.includes('mitsubishi')) return { src: '/motori/mitsubishi.avif', isSmaller: false };
    if (name.includes('mtu')) return { src: '/motori/mtu.avif', isSmaller: false };
    if (name.includes('perkins')) return { src: '/motori/perkins.png', isSmaller: false };
    if (name.includes('scania')) return { src: '/motori/scania.png', isSmaller: false };
    if (name.includes('volvo')) return { src: '/motori/volvo.avif', isSmaller: false };
    if (name.includes('yto')) return { src: '/motori/yto.avif', isSmaller: false };
    if (name.includes('baudouin')) return { src: '/motori/baudouin.png', isSmaller: false };
    
    // Check categories
    const categoryNames = product.categories.map(cat => cat.name.toLowerCase());
    if (categoryNames.includes('cummins')) return { src: '/motori/cummins.avif', isSmaller: true };
    if (categoryNames.includes('hyundai')) return { src: '/motori/hyundai.avif', isSmaller: false };
    if (categoryNames.includes('iveco')) return { src: '/motori/iveco.avif', isSmaller: false };
    if (categoryNames.includes('kohler')) return { src: '/motori/kohler.avif', isSmaller: false };
    if (categoryNames.includes('mitsubishi')) return { src: '/motori/mitsubishi.avif', isSmaller: false };
    if (categoryNames.includes('mtu')) return { src: '/motori/mtu.avif', isSmaller: false };
    if (categoryNames.includes('perkins')) return { src: '/motori/perkins.png', isSmaller: false };
    if (categoryNames.includes('scania')) return { src: '/motori/scania.png', isSmaller: false };
    if (categoryNames.includes('volvo')) return { src: '/motori/volvo.avif', isSmaller: false };
    if (categoryNames.includes('yto')) return { src: '/motori/yto.avif', isSmaller: false };
    if (categoryNames.includes('baudouin')) return { src: '/motori/baudouin.png', isSmaller: false };
    
    // Check attributes
    const attributeOptions = product.attributes.flatMap(attr => attr.options.map(opt => opt.toLowerCase()));
    if (attributeOptions.includes('cummins')) return { src: '/motori/cummins.avif', isSmaller: true };
    if (attributeOptions.includes('hyundai')) return { src: '/motori/hyundai.avif', isSmaller: false };
    if (attributeOptions.includes('iveco')) return { src: '/motori/iveco.avif', isSmaller: false };
    if (attributeOptions.includes('kohler')) return { src: '/motori/kohler.avif', isSmaller: false };
    if (attributeOptions.includes('mitsubishi')) return { src: '/motori/mitsubishi.avif', isSmaller: false };
    if (attributeOptions.includes('mtu')) return { src: '/motori/mtu.avif', isSmaller: false };
    if (attributeOptions.includes('perkins')) return { src: '/motori/perkins.png', isSmaller: false };
    if (attributeOptions.includes('scania')) return { src: '/motori/scania.png', isSmaller: false };
    if (attributeOptions.includes('volvo')) return { src: '/motori/volvo.avif', isSmaller: false };
    if (attributeOptions.includes('yto')) return { src: '/motori/yto.avif', isSmaller: false };
    if (attributeOptions.includes('baudouin')) return { src: '/motori/baudouin.png', isSmaller: false };
    
    return null;
  };

  // Function to bold only the last number in the title
  const boldLastNumber = (text: string) => {
    const parts = text.split(/(\d+)/);
    const lastNumberIndex = parts.map((part, index) => /\d+/.test(part) ? index : -1).filter(i => i !== -1).pop();
    
    if (lastNumberIndex !== undefined) {
      return parts.map((part, index) => {
        if (index === lastNumberIndex && /\d+/.test(part)) {
          return <span key={index} className="text-[#da0018]">{part}</span>;
        }
        return part;
      });
    }
    return text;
  };

  return (
    <Card
      className="w-full h-full product-card min-h-[160px] relative"
    >
      {/* Engine Image - Top Right Corner */}
      {getEngineImage(product) && (
        <div className={`absolute top-2 right-2 flex items-center justify-center overflow-hidden ${getEngineImage(product)!.isSmaller ? 'w-8 h-8' : 'w-12 h-12'}`}>
          <img 
            src={getEngineImage(product)!.src} 
            alt={`${product.name} engine`}
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      )}

      <div className="p-4 flex flex-col justify-center items-center h-full gap-3">
        {/* Product Name */}
        <h3 className="product-name text-gray-900 text-2xl text-center">
          {boldLastNumber(product.name)}
        </h3>

        {/* Configure Button */}
        <Link href={href} className="inline-block">
            <Button
              color="primary"
              variant="solid"
              className="bg-[#fff] text-black border-2 border-[#333] font-semibold hover:bg-[#333] hover:text-white rounded-full px-6 py-2 h-10 text-base flex items-center justify-center"
              size="sm"
              startContent={<Settings className="w-4 h-4" />}
            >
              Configure
            </Button>
          </Link>

        {/* Rating */}
        {product.average_rating && parseFloat(product.average_rating) > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.round(parseFloat(product.average_rating))
                      ? "text-yellow-400 text-sm"
                      : "text-gray-300 text-sm"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-600 font-medium">({product.rating_count})</span>
          </div>
        )}

        {/* Short Description */}
        {product.short_description && (
          <p
            className="text-sm text-gray-600 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        )}
      </div>
    </Card>
  );
}
