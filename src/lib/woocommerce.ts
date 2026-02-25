import { WooCommerceProduct } from "@/types/woocommerce";

// Products are loaded from static JSON for performance
// To update, run: npm run fetch-products

function getAuthHeaders(): HeadersInit {
  return {
    "Content-Type": "application/json",
  };
}

export async function fetchProducts(params?: Record<string, string | number | boolean>): Promise<WooCommerceProduct[]> {
  try {
    // Load from static JSON file with correct basePath
    const response = await fetch('/tl-konfigurator/products.json', {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    let products = await response.json();

    // Apply client-side filtering if params provided
    if (params) {
      if (params.search) {
        const searchLower = String(params.search).toLowerCase();
        products = products.filter((p: WooCommerceProduct) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description?.toLowerCase().includes(searchLower)
        );
      }

      if (params.category) {
        const categoryId = Number(params.category);
        products = products.filter((p: WooCommerceProduct) =>
          p.categories.some(cat => cat.id === categoryId)
        );
      }

      if (params.min_price !== undefined) {
        const minPrice = Number(params.min_price);
        products = products.filter((p: WooCommerceProduct) =>
          parseFloat(p.price || '0') >= minPrice
        );
      }

      if (params.max_price !== undefined) {
        const maxPrice = Number(params.max_price);
        products = products.filter((p: WooCommerceProduct) =>
          parseFloat(p.price || '0') <= maxPrice
        );
      }

      if (params.on_sale) {
        products = products.filter((p: WooCommerceProduct) => p.on_sale);
      }

      if (params.stock_status === 'instock') {
        products = products.filter((p: WooCommerceProduct) => p.stock_status === 'instock');
      }
    }

    return products;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

export async function fetchCategories(): Promise<{ id: number; name: string; slug: string }[]> {
  try {
    // Extract unique categories from products.json
    const response = await fetch('/products.json', {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      return [];
    }

    const products = await response.json();
    
    // Extract and deduplicate categories
    const categoriesMap = new Map<number, { id: number; name: string; slug: string }>();
    
    products.forEach((product: WooCommerceProduct) => {
      product.categories.forEach(cat => {
        if (!categoriesMap.has(cat.id)) {
          categoriesMap.set(cat.id, {
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
          });
        }
      });
    });

    return Array.from(categoriesMap.values());
  } catch (error) {
    console.error('Error loading categories:', error);
    return [];
  }
}

export async function fetchProductById(id: number): Promise<WooCommerceProduct> {
  try {
    // Load from static JSON file with correct basePath
    const response = await fetch('/tl-konfigurator/products.json', {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const products = await response.json();
    const product = products.find((p: WooCommerceProduct) => p.id === id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return product;
  } catch (error) {
    console.error(`Error loading product ${id}:`, error);
    throw error;
  }
}
