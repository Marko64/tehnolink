#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const API_URL = "https://tehnolink.net/wp-json/wc/v3";
const CONSUMER_KEY = "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7";
const CONSUMER_SECRET = "cs_8dd00d08612e5c652cee2b27aeaded98e032d756";

async function fetchAllProducts() {
  const allProducts = [];
  let page = 1;
  const perPage = 100;
  let hasMore = true;

  console.log('📦 Fetching products from WooCommerce API...');

  while (hasMore) {
    try {
      const params = new URLSearchParams({
        page,
        per_page: perPage,
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        orderby: 'id',
        order: 'asc',
      });

      const url = `${API_URL}/products?${params.toString()}`;
      console.log(`  Fetching page ${page}...`);

      const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch page ${page}: ${response.statusText}`);
      }

      const data = await response.json();
      allProducts.push(...data);

      if (data.length < perPage) {
        hasMore = false;
      } else {
        page++;
      }
    } catch (error) {
      console.error(`❌ Error fetching page ${page}:`, error.message);
      hasMore = false;
    }
  }

  return allProducts;
}

async function main() {
  try {
    const products = await fetchAllProducts();
    
    // Create public directory if it doesn't exist
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Save products to JSON file
    const outputPath = path.join(publicDir, 'products.json');
    fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));

    console.log(`\n✅ Successfully fetched ${products.length} products`);
    console.log(`📁 Saved to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();
