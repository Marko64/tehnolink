"use client";

import { ProductCard } from "./ProductCard";
import { WooCommerceProduct } from "@/types/woocommerce";
import { Spinner, Button } from "@nextui-org/react";
import type { ProductFilters } from "@/types/woocommerce";

interface ProductGridProps {
  products: WooCommerceProduct[];
  loading: boolean;
  error: string | null;
  filters?: ProductFilters;
}

export function ProductGrid({ products, loading, error, filters }: ProductGridProps) {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="bg-[#777] border border-[#333] rounded-lg p-8 max-w-md">
          <div className="text-[#da0018] text-xl font-bold mb-3">Error Loading Products</div>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <Spinner size="lg" color="danger" />
          <p className="mt-4 text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full min-h-[70vh] text-center">
        <div className="rounded-lg p-8 max-w-md">
          <div className="text-xl font-semibold text-gray-600 mb-2">No Products Found</div>
          <p className="text-gray-400 mb-4">Try adjusting your filters to see more products.</p>
          <div className="flex justify-center">
            <Button color="danger" variant="flat" onClick={() => window.location.reload()} className="bg-gray-300 hover:bg-gray-400 rounded-[50px] px-6 py-4 w-fit">
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Product count with loading indicator */}
      <div className="mb-4 mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Showing</span>
          <span className="font-bold text-sm text-gray-400">{products.length}</span>
          <span className="text-gray-400">products</span>
          {loading && (
            <Spinner size="sm" color="danger" className="ml-2" />
          )}
        </div>
      </div>
      
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pr-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} filters={filters} />
        ))}
      </div>
    </div>
  );
}
