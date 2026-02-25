"use client";

import { useState, useEffect } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { useCategories } from "@/hooks/useProducts";
import { ProductFilters } from "@/types/woocommerce";
import { Navbar, NavbarBrand, NavbarContent, Button, Input, Chip } from "@nextui-org/react";
import { ShoppingBag, Search } from "lucide-react";

export default function ProductsSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { categories } = useCategories();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Search through WooCommerce API with attribute search
      const params = new URLSearchParams({
        consumer_key: "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7",
        consumer_secret: "cs_8dd00d08612e5c652cee2b27aeaded98e032d756",
        search: searchTerm,
        per_page: "100",
      });

      const response = await fetch(
        `https://tehnolink.net/wp-json/wc/v3/products?${params.toString()}`,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (!response.ok) {
        throw new Error(`Search failed: ${response.statusText}`);
      }

      const products = await response.json();
      setSearchResults(products);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)' }}>
      {/* Header */}
      <Navbar position="sticky" className="bg-white shadow-sm">
        <NavbarBrand>
          <ShoppingBag className="w-6 h-6 text-primary mr-2" />
          <p className="font-bold text-xl">Product Search</p>
        </NavbarBrand>
      </Navbar>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Search Products
          </h1>
          <p className="text-gray-600 mb-6">
            Search through all product attributes including fuel type, frequency, phase, emission, and power.
          </p>

          {/* Search Input */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                startContent={<Search className="w-4 h-4 text-gray-400" />}
                size="lg"
                className="flex-1"
                classNames={{
                  inputWrapper: "hover:bg-gray-200",
                }}
              />
              <Button
                color="primary"
                onClick={handleSearch}
                isLoading={loading}
                className="px-8"
              >
                Search
              </Button>
            </div>

            {/* Search Tips */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold mb-2">Search Tips:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Try searching for: "diesel", "gas", "50 Hz", "60 Hz"</li>
                <li>Search for power ratings: "5kW", "10kW", "20kW"</li>
                <li>Search for phases: "single phase", "three phase"</li>
                <li>Search for emissions: "EPA", "Stage 5", "non certified"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Found {searchResults.length} products for "{searchTerm}"
            </h2>
            <ProductGrid 
              products={searchResults} 
              loading={false} 
              error={null} 
            />
          </div>
        )}

        {!loading && !error && searchResults.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="text-gray-500">No products found for "{searchTerm}"</div>
            <p className="text-gray-400 mt-2">Try different search terms</p>
          </div>
        )}
      </main>
    </div>
  );
}
