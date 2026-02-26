"use client";

import { useState, useEffect } from "react";
import { Chip, Button } from "@nextui-org/react";
import { ShoppingBag, List } from "lucide-react";
import Link from "next/link";
import { ProductFiltersComponent } from "@/components/ProductFilters";
import { useCategories } from "@/hooks/useProducts";
import { ProductFilters } from "@/types/woocommerce";
import { ProductGrid } from "@/components/ProductGrid";
import { useProducts } from "@/hooks/useProducts";
import { Logo } from "@/components/Logo";

interface ProductSummary {
  id: number;
  name: string;
  category: string;
  attributes?: {
    gorivo?: string;
    frekvencija?: string;
    faza?: string;
    emisija?: string;
    snaga?: string;
  };
}

export default function ProductsOverviewPage() {
  const [filters, setFilters] = useState<ProductFilters>({
    excludedCategories: [
      229, 230, 231, 232, 233, 1178, 1180, 1182, 1184, 1186, 1192, 1234, 1196,
      1194, 1224, 1198, 1200, 1188, 1190, 1202, 1204, 1206, 1210, 1212, 1208,
      1232, 1216, 1218, 1220, 1222, 1214, 1230, 1228, 1226,
    ],
  });
  const { categories } = useCategories();
  const { products, loading, error } = useProducts(filters);

  const handleResetFilters = () => {
    const resetFilters: ProductFilters = {
      excludedCategories: [
        229, 230, 231, 232, 233, 1178, 1180, 1182, 1184, 1186, 1192, 1234, 1196,
        1194, 1224, 1198, 1200, 1188, 1190, 1202, 1204, 1206, 1210, 1212, 1208,
        1232, 1216, 1218, 1220, 1222, 1214, 1230, 1228, 1226,
      ],
    };
    setFilters(resetFilters);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)' }}>
      {/* Main Content - Sidebar + Grid Layout */}
      <main className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Left */}
          <aside className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="sticky top-0 h-screen">
              <div className="filter-section h-full overflow-y-auto bg-white/90 px-6 py-6">
                <div className="flex items-center justify-between">
                  <Logo />
                </div>

                <div className="space-y-6">
                  <ProductFiltersComponent
                    filters={filters}
                    onFiltersChange={setFilters}
                    categories={categories}
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid - Right - 80% */}
          <div className="flex-1 min-w-0 lg:w-4/5">
            <ProductGrid
              products={products}
              loading={loading}
              error={error}
              filters={filters}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
