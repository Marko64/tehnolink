"use client";

import { useState } from "react";
import { ProductFiltersComponent } from "@/components/ProductFilters";
import { useCategories } from "@/hooks/useProducts";
import { ProductFilters } from "@/types/woocommerce";
import { Navbar, NavbarBrand, NavbarContent, Chip, Button } from "@nextui-org/react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFilters>({
    excludedCategories: [229, 1222, 1228, 1226, 233, 117, 1178, 1180, 1188, 1190, 1200, 1198, 1202, 1204, 1216, 1218]
  });
  const { categories, loading: categoriesLoading } = useCategories();

  // Create query string for filters
  const getFilterQueryString = () => {
    const params = new URLSearchParams();
    
    if (filters.excludedCategories && filters.excludedCategories.length > 0) {
      params.set('excluded', filters.excludedCategories.join(','));
    }
    if (filters.search) params.set('search', filters.search);
    if (filters.category) params.set('category', filters.category);
    if (filters.minPrice) params.set('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice.toString());
    if (filters.onSale) params.set('onSale', 'true');
    if (filters.inStock) params.set('inStock', 'true');
    if (filters.orderby) params.set('orderby', filters.orderby);
    
    // Attribute filters
    if (filters.gorivo && filters.gorivo.length > 0) {
      params.set('gorivo', filters.gorivo.join(','));
    }
    if (filters.frekvencija && filters.frekvencija.length > 0) {
      params.set('frekvencija', filters.frekvencija.join(','));
    }
    if (filters.faza && filters.faza.length > 0) {
      params.set('faza', filters.faza.join(','));
    }
    if (filters.emisija && filters.emisija.length > 0) {
      params.set('emisija', filters.emisija.join(','));
    }
    if (filters.minSnaga) params.set('minSnaga', filters.minSnaga.toString());
    if (filters.maxSnaga) params.set('maxSnaga', filters.maxSnaga.toString());
    
    return params.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar position="sticky" className="bg-white shadow-sm">
        <NavbarBrand>
          <ShoppingBag className="w-6 h-6 text-primary mr-2" />
          <p className="font-bold text-xl">Product Filters</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Button
            as="a"
            href="/products/search"
            variant="flat"
            color="primary"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            Search Products
          </Button>
          <Button
            as={Link}
            href={`/products/results?${getFilterQueryString()}`}
            color="primary"
            endContent={<ArrowRight className="w-4 h-4" />}
            className="ml-2"
          >
            View Results
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Main Content - Filters Only */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Filter Products
          </h1>
          <p className="text-gray-600">
            Select your preferences below, then click "View Results" to see matching products.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ProductFiltersComponent
            filters={filters}
            onFiltersChange={setFilters}
            categories={categories}
          />
        </div>

        {/* Summary */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-400">
          <h3 className="font-semibold text-gray-300 mb-2">Filter Summary</h3>
          <div className="text-gray-400 text-sm space-y-1">
            {filters.search && <p>Search: {filters.search}</p>}
            {filters.category && <p>Category: {filters.category}</p>}
            {filters.minPrice && <p>Price: ${filters.minPrice} - ${filters.maxPrice || '∞'}</p>}
            {filters.gorivo && filters.gorivo.length > 0 && <p>Fuel: {filters.gorivo.join(', ')}</p>}
            {filters.frekvencija && filters.frekvencija.length > 0 && <p>Frequency: {filters.frekvencija.join(', ')}</p>}
            {filters.faza && filters.faza.length > 0 && <p>Phase: {filters.faza.join(', ')}</p>}
            {filters.emisija && filters.emisija.length > 0 && <p>Emission: {filters.emisija.join(', ')}</p>}
            {filters.minSnaga && <p>Power: {filters.minSnaga}kW - {filters.maxSnaga || '∞'}kW</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
