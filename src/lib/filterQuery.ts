import type { ProductFilters } from "@/types/woocommerce";

type SearchParamsLike = { get(name: string): string | null };

export function filtersToSearchParams(filters: ProductFilters): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.excludedCategories && filters.excludedCategories.length > 0) {
    params.set("excluded", filters.excludedCategories.join(","));
  }
  if (filters.search) params.set("search", filters.search);
  if (filters.category) params.set("category", filters.category);
  if (filters.minPrice !== undefined) params.set("minPrice", String(filters.minPrice));
  if (filters.maxPrice !== undefined) params.set("maxPrice", String(filters.maxPrice));
  if (filters.onSale) params.set("onSale", "true");
  if (filters.inStock) params.set("inStock", "true");
  if (filters.orderby) params.set("orderby", filters.orderby);

  if (filters.gorivo && filters.gorivo.length > 0) params.set("gorivo", filters.gorivo.join(","));
  if (filters.frekvencija && filters.frekvencija.length > 0) params.set("frekvencija", filters.frekvencija.join(","));
  if (filters.faza && filters.faza.length > 0) params.set("faza", filters.faza.join(","));
  if (filters.emisija && filters.emisija.length > 0) params.set("emisija", filters.emisija.join(","));
  if (filters.minSnaga !== undefined) params.set("minSnaga", String(filters.minSnaga));
  if (filters.maxSnaga !== undefined) params.set("maxSnaga", String(filters.maxSnaga));

  return params;
}

export function filtersToQueryString(filters: ProductFilters): string {
  return filtersToSearchParams(filters).toString();
}

export function searchParamsToFilters(searchParams: SearchParamsLike): ProductFilters {
  const parsedFilters: ProductFilters = {};

  const excluded = searchParams.get("excluded");
  if (excluded) parsedFilters.excludedCategories = excluded.split(",").map((id) => parseInt(id, 10)).filter((n) => !Number.isNaN(n));

  const search = searchParams.get("search");
  if (search) parsedFilters.search = search;

  const category = searchParams.get("category");
  if (category) parsedFilters.category = category;

  const minPrice = searchParams.get("minPrice");
  if (minPrice) parsedFilters.minPrice = Number(minPrice);

  const maxPrice = searchParams.get("maxPrice");
  if (maxPrice) parsedFilters.maxPrice = Number(maxPrice);

  const onSale = searchParams.get("onSale");
  if (onSale === "true") parsedFilters.onSale = true;

  const inStock = searchParams.get("inStock");
  if (inStock === "true") parsedFilters.inStock = true;

  const orderby = searchParams.get("orderby");
  if (orderby) parsedFilters.orderby = orderby as ProductFilters["orderby"];

  const gorivo = searchParams.get("gorivo");
  if (gorivo) parsedFilters.gorivo = gorivo.split(",").filter(Boolean);

  const frekvencija = searchParams.get("frekvencija");
  if (frekvencija) parsedFilters.frekvencija = frekvencija.split(",").filter(Boolean);

  const faza = searchParams.get("faza");
  if (faza) parsedFilters.faza = faza.split(",").filter(Boolean);

  const emisija = searchParams.get("emisija");
  if (emisija) parsedFilters.emisija = emisija.split(",").filter(Boolean);

  const minSnaga = searchParams.get("minSnaga");
  if (minSnaga) parsedFilters.minSnaga = Number(minSnaga);

  const maxSnaga = searchParams.get("maxSnaga");
  if (maxSnaga) parsedFilters.maxSnaga = Number(maxSnaga);

  return parsedFilters;
}



