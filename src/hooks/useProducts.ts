"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { fetchProducts, fetchCategories } from "@/lib/woocommerce";
import { WooCommerceProduct, ProductFilters, WooCommerceCategory } from "@/types/woocommerce";

// Helper function to normalize strings for comparison (remove spaces, hyphens, convert to lowercase)
function normalizeString(str: string): string {
  return str.toLowerCase().replace(/[\s\-]/g, '');
}

// Helper function to check if product matches attribute filter
function matchesAttributeFilter(
  product: WooCommerceProduct,
  attributeName: string,
  selectedValues: string[] | undefined
): boolean {
  if (!selectedValues || selectedValues.length === 0) return true;

  // Map our internal attribute names to WooCommerce attribute names
  const attributeNameMap: Record<string, string> = {
    'gorivo': 'fuel',
    'frekvencija': 'frequency', 
    'faza': 'Phase',
    'emisija': 'Emission',
    'snaga': 'Power (PRP / ESP)'
  };

  const wooAttributeName = attributeNameMap[attributeName] || attributeName;
  
  const attribute = product.attributes.find(
    (attr) => attr.name === wooAttributeName
  );

  if (!attribute) return false;

  // Normalize selected values for comparison
  const normalizedSelectedValues = selectedValues.map(normalizeString);

  // Check if any of the selected values match the product's attribute options
  return selectedValues.some((value, index) => {
    const normalizedValue = normalizedSelectedValues[index];
    return attribute.options.some((opt) => 
      normalizeString(opt) === normalizedValue || 
      normalizeString(opt).includes(normalizeString(value))
    );
  });
}

// Helper function to extract numeric value from attribute
function getAttributeNumberValue(product: WooCommerceProduct, attributeName: string): number | null {
  // Map our internal attribute names to WooCommerce attribute names
  const attributeNameMap: Record<string, string> = {
    'gorivo': 'fuel',
    'frekvencija': 'frequency', 
    'faza': 'Phase',
    'emisija': 'Emission',
    'snaga': 'ESP KW'
  };

  const wooAttributeName = attributeNameMap[attributeName] || attributeName;
  
  const attribute = product.attributes.find(
    (attr) => attr.name === wooAttributeName
  );

  if (!attribute || attribute.options.length === 0) return null;

  // Try to parse the first option as a number
  const value = parseFloat(attribute.options[0].replace(/[^0-9.]/g, ""));
  return isNaN(value) ? null : value;
}

// Client-side filter function
function filterProductsByAttributes(
  products: WooCommerceProduct[],
  filters: ProductFilters
): WooCommerceProduct[] {
  
  const filtered = products.filter((product) => {
    // Exclude products from certain categories
    if (filters.excludedCategories && filters.excludedCategories.length > 0) {
      const hasExcludedCategory = product.categories.some(
        (cat) => filters.excludedCategories!.includes(cat.id)
      );
      if (hasExcludedCategory) {
        return false;
      }
    }

    // Gorivo (Fuel) filter
    if (filters.gorivo && filters.gorivo.length > 0) {
      if (!matchesAttributeFilter(product, "gorivo", filters.gorivo)) return false;
    }

    // Frekvencija (Frequency) filter
    if (filters.frekvencija && filters.frekvencija.length > 0) {
      if (!matchesAttributeFilter(product, "frekvencija", filters.frekvencija)) return false;
    }

    // Faza (Phase) filter
    if (filters.faza && filters.faza.length > 0) {
      if (!matchesAttributeFilter(product, "faza", filters.faza)) return false;
    }

    // Emisija (Emission) filter
    if (filters.emisija && filters.emisija.length > 0) {
      if (!matchesAttributeFilter(product, "emisija", filters.emisija)) return false;
    }

    // Snaga (Power) range filter
    if (filters.minSnaga !== undefined || filters.maxSnaga !== undefined) {
      const snagaValue = getAttributeNumberValue(product, "snaga");
      if (snagaValue !== null) {
        if (filters.minSnaga !== undefined && snagaValue < filters.minSnaga) return false;
        if (filters.maxSnaga !== undefined && snagaValue > filters.maxSnaga) return false;
      }
    }

    return true;
  });
  
  return filtered;
}

// Extract only API-relevant filters
function getApiFilters(filters: ProductFilters) {
  return {
    search: filters.search,
    category: filters.category,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    onSale: filters.onSale,
    inStock: filters.inStock,
    orderby: filters.orderby,
  };
}

export function useProducts(filters: ProductFilters) {
  const [allProducts, setAllProducts] = useState<WooCommerceProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await fetchProducts();
        setAllProducts(products);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch products");
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Apply client-side attribute filtering
  const filteredProducts = useMemo(() => {
    const filtered = filterProductsByAttributes(allProducts, filters);
    
    // Sort by ESP KW in ascending order
    return filtered.sort((a, b) => {
      const aValue = getAttributeNumberValue(a, "snaga") || 0;
      const bValue = getAttributeNumberValue(b, "snaga") || 0;
      return aValue - bValue;
    });
  }, [allProducts, filters]);

  return { products: filteredProducts, loading, error, refetch: () => {} };
}

export function useCategories() {
  const [categories, setCategories] = useState<WooCommerceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { categories, loading, error };
}
