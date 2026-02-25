import { ProductDetailClient } from "./ProductDetailClient";
import fs from "node:fs/promises";
import path from "node:path";
import type { WooCommerceProduct } from "@/types/woocommerce";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "products.json");
  const json = await fs.readFile(filePath, "utf8");
  const products: WooCommerceProduct[] = JSON.parse(json);

  return products.map((p) => ({ id: p.id.toString() }));
}

type PageProps = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ProductDetailPage({ params, searchParams }: PageProps) {
  return <ProductDetailClient />;
}

