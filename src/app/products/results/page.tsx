"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { useProducts } from "@/hooks/useProducts";
import { ProductFilters } from "@/types/woocommerce";
import { searchParamsToFilters } from "@/lib/filterQuery";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";

function ResultsPageContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ProductFilters>({});

  useEffect(() => {
    setFilters(searchParamsToFilters(searchParams));
  }, [searchParams]);

  const { products, loading, error } = useProducts(filters);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)' }}>
      {/* Header */}
      <Navbar position="sticky" className="bg-white shadow-sm">
        <NavbarBrand>
          <ShoppingBag className="w-6 h-6 text-primary mr-2" />
          <p className="font-bold text-xl">Product Results</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/products"
            variant="flat"
            startContent={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Filters
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results
          </h1>
          <p className="text-gray-600">
            Products matching your selected criteria
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid 
            products={products} 
            loading={loading} 
            error={error} 
            filters={filters}
          />
        </div>
      </main>
    </div>
  );
}

export default function ProductsResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}
