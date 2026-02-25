(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/woocommerce-products/src/lib/woocommerce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCategories",
    ()=>fetchCategories,
    "fetchProductById",
    ()=>fetchProductById,
    "fetchProducts",
    ()=>fetchProducts
]);
// Products are loaded from static JSON for performance
// To update, run: npm run fetch-products
function getAuthHeaders() {
    return {
        "Content-Type": "application/json"
    };
}
async function fetchProducts(params) {
    try {
        // Load from static JSON file
        const response = await fetch('/products.json', {
            headers: getAuthHeaders()
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        let products = await response.json();
        // Apply client-side filtering if params provided
        if (params) {
            if (params.search) {
                const searchLower = String(params.search).toLowerCase();
                products = products.filter((p)=>p.name.toLowerCase().includes(searchLower) || p.description?.toLowerCase().includes(searchLower));
            }
            if (params.category) {
                const categoryId = Number(params.category);
                products = products.filter((p)=>p.categories.some((cat)=>cat.id === categoryId));
            }
            if (params.min_price !== undefined) {
                const minPrice = Number(params.min_price);
                products = products.filter((p)=>parseFloat(p.price || '0') >= minPrice);
            }
            if (params.max_price !== undefined) {
                const maxPrice = Number(params.max_price);
                products = products.filter((p)=>parseFloat(p.price || '0') <= maxPrice);
            }
            if (params.on_sale) {
                products = products.filter((p)=>p.on_sale);
            }
            if (params.stock_status === 'instock') {
                products = products.filter((p)=>p.stock_status === 'instock');
            }
        }
        return products;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}
async function fetchCategories() {
    try {
        // Extract unique categories from products.json
        const response = await fetch('/products.json', {
            headers: getAuthHeaders()
        });
        if (!response.ok) {
            return [];
        }
        const products = await response.json();
        // Extract and deduplicate categories
        const categoriesMap = new Map();
        products.forEach((product)=>{
            product.categories.forEach((cat)=>{
                if (!categoriesMap.has(cat.id)) {
                    categoriesMap.set(cat.id, {
                        id: cat.id,
                        name: cat.name,
                        slug: cat.slug
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
async function fetchProductById(id) {
    try {
        // Load from static JSON file
        const response = await fetch('/products.json', {
            headers: getAuthHeaders()
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const products = await response.json();
        const product = products.find((p)=>p.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    } catch (error) {
        console.error(`Error loading product ${id}:`, error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetailClient",
    ()=>ProductDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/tabs/dist/chunk-TBXVIZ2K.mjs [app-client] (ecmascript) <export tabs_default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs [app-client] (ecmascript) <export tab_item_base_default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cog.js [app-client] (ecmascript) <export default as Cog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fuel.js [app-client] (ecmascript) <export default as Fuel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/lib/woocommerce.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProductDetailClient() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [configSelections, setConfigSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        electrical: {
            voltage: '',
            frequency: '',
            connections: '',
            powerOutput: ''
        },
        mechanical: {
            enclosure: '',
            mounting: '',
            soundAttenuation: ''
        },
        enclosures: {
            enclosureType: '',
            tankSize: '',
            accessories: []
        }
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailClient.useEffect": ()=>{
            const id = Number(params.id);
            if (!Number.isFinite(id)) {
                setError("Invalid product id");
                setLoading(false);
                return;
            }
            let isMounted = true;
            setLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductById"])(id).then({
                "ProductDetailClient.useEffect": (p)=>{
                    if (!isMounted) return;
                    setProduct(p);
                    setError(null);
                }
            }["ProductDetailClient.useEffect"]).catch({
                "ProductDetailClient.useEffect": (e)=>{
                    if (!isMounted) return;
                    setError(e instanceof Error ? e.message : "Failed to load product");
                    setProduct(null);
                }
            }["ProductDetailClient.useEffect"]).finally({
                "ProductDetailClient.useEffect": ()=>{
                    if (!isMounted) return;
                    setLoading(false);
                }
            }["ProductDetailClient.useEffect"]);
            return ({
                "ProductDetailClient.useEffect": ()=>{
                    isMounted = false;
                }
            })["ProductDetailClient.useEffect"];
        }
    }["ProductDetailClient.useEffect"], [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                size: "lg",
                color: "danger"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        variant: "flat",
                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                            lineNumber: 80,
                            columnNumber: 48
                        }, void 0),
                        onClick: ()=>router.back(),
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-white rounded-xl border border-gray-200 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Couldn’t load product"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-2",
                                children: error ?? "Unknown error"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    const generateSpecificationPDF = async ()=>{
        if (!product) return;
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;
        let yPosition = 20;
        const headerHeight = 30;
        // Dark gray header background
        pdf.setFillColor(0, 0, 0);
        pdf.rect(0, 0, pageWidth, headerHeight, 'F');
        // Add centered logo
        try {
            const logoUrl = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/tehnolink-logo.png` : "TURBOPACK unreachable";
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            await new Promise((resolve, reject)=>{
                img.onload = resolve;
                img.onerror = reject;
                img.src = logoUrl;
            });
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const logoData = canvas.toDataURL('image/png');
                const logoWidth = 50;
                const logoHeight = logoWidth / img.width * img.height;
                const logoX = (pageWidth - logoWidth) / 2;
                const logoY = (headerHeight - logoHeight) / 2;
                pdf.addImage(logoData, 'PNG', logoX, logoY, logoWidth, logoHeight);
            }
        } catch (e) {
            console.log('Logo could not be loaded for PDF');
        }
        yPosition = headerHeight + 10;
        // Title
        pdf.setTextColor(51, 51, 51);
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.text('PRODUCT SPECIFICATIONS', margin + 2, yPosition + 7);
        pdf.setTextColor(0, 0, 0);
        yPosition += 15;
        // Product Info Section
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
        pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
        yPosition += 45;
        // Specifications table
        const specItems = [];
        if (product.weight) specItems.push([
            'Weight',
            `${product.weight} kg`
        ]);
        if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
            const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
            specItems.push([
                'Dimensions',
                dims
            ]);
        }
        if (specItems.length > 0) {
            pdf.setFillColor(51, 51, 51);
            pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
            pdf.setTextColor(0, 0, 0);
            yPosition += 15;
            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'normal');
            specItems.forEach(([label, value], index)=>{
                if (index % 2 === 0) {
                    pdf.setFillColor(250, 250, 250);
                    pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
                }
                pdf.setFont('helvetica', 'bold');
                pdf.text(`${label}:`, margin + 5, yPosition + 4);
                pdf.setFont('helvetica', 'normal');
                pdf.text(value, margin + 50, yPosition + 4);
                yPosition += 8;
            });
            yPosition += 10;
        }
        // Product attributes
        if (product.attributes && product.attributes.length > 0) {
            const visibleAttrs = product.attributes.filter((attr)=>attr.visible && attr.options.length > 0);
            if (visibleAttrs.length > 0) {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.setFillColor(51, 51, 51);
                pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
                pdf.setTextColor(255, 255, 255);
                pdf.setFontSize(11);
                pdf.setFont('helvetica', 'bold');
                pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
                pdf.setTextColor(0, 0, 0);
                yPosition += 15;
                pdf.setFontSize(9);
                pdf.setFont('helvetica', 'normal');
                visibleAttrs.sort((a, b)=>{
                    const aIsPower = a.name.toLowerCase().includes('power');
                    const bIsPower = b.name.toLowerCase().includes('power');
                    if (aIsPower && !bIsPower) return -1;
                    if (!aIsPower && bIsPower) return 1;
                    return 0;
                }).forEach((attr, index)=>{
                    if (yPosition > 270) {
                        pdf.addPage();
                        yPosition = 20;
                    }
                    if (index % 2 === 0) {
                        pdf.setFillColor(250, 250, 250);
                        pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
                    }
                    pdf.setFont('helvetica', 'bold');
                    pdf.text(`${attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}:`, margin + 5, yPosition + 4);
                    pdf.setFont('helvetica', 'normal');
                    pdf.text(attr.options.join(', '), margin + 50, yPosition + 4);
                    yPosition += 8;
                });
            }
        }
        // Footer
        yPosition += 15;
        if (yPosition > 270) {
            pdf.addPage();
            yPosition = 20;
        }
        pdf.setDrawColor(51, 51, 51);
        pdf.setLineWidth(1);
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Product Specifications`, margin, yPosition + 10);
        pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_specifications.pdf`);
    };
    const generatePDF = async ()=>{
        if (!product) return;
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;
        let yPosition = 20;
        // Add logo
        try {
            const logoUrl = '/tehnolink-logo.png';
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            await new Promise((resolve, reject)=>{
                img.onload = resolve;
                img.onerror = reject;
                img.src = logoUrl;
            });
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const logoData = canvas.toDataURL('image/png');
                const logoWidth = 40;
                const logoHeight = logoWidth / img.width * img.height;
                pdf.addImage(logoData, 'PNG', pageWidth - margin - logoWidth, yPosition, logoWidth, logoHeight);
            }
        } catch (e) {
            console.log('Logo could not be loaded for PDF');
        }
        yPosition += 5;
        // Title with brand red background
        pdf.setFillColor(218, 0, 24);
        pdf.rect(0, yPosition - 5, pageWidth, 25, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CONFIGURATION', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        yPosition += 30;
        // Product Info Section
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(218, 0, 24);
        pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
        pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
        yPosition += 45;
        // Product Specifications Section
        const specItems = [];
        if (product.weight) specItems.push([
            'Weight',
            `${product.weight} kg`
        ]);
        if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
            const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
            specItems.push([
                'Dimensions',
                dims
            ]);
        }
        if (specItems.length > 0) {
            pdf.setFillColor(218, 0, 24);
            pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text('PRODUCT SPECIFICATIONS', margin + 5, yPosition + 8);
            pdf.setTextColor(0, 0, 0);
            yPosition += 15;
            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'normal');
            specItems.forEach(([label, value], index)=>{
                if (index % 2 === 0) {
                    pdf.setFillColor(250, 250, 250);
                    pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
                }
                pdf.setFont('helvetica', 'bold');
                pdf.text(`${label}:`, margin + 5, yPosition + 4);
                pdf.setFont('helvetica', 'normal');
                pdf.text(value, margin + 50, yPosition + 4);
                yPosition += 8;
            });
            yPosition += 10;
        }
        // Configuration Options Section
        yPosition += 5;
        if (yPosition > 230) {
            pdf.addPage();
            yPosition = 20;
        }
        pdf.setFillColor(218, 0, 24);
        pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CONFIGURATION OPTIONS', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        yPosition += 18;
        // Configuration boxes
        pdf.setFillColor(240, 240, 240);
        pdf.roundedRect(margin, yPosition, contentWidth, 100, 2, 2, 'F');
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        const configurations = [
            'General Configuration:',
            '- European CE Certification: EU Declaration of Conformity',
            '- CIS Certification: CIS Certification',
            '',
            'Electrical Configuration:',
            '- [To be configured by user]',
            '',
            'Mechanical Configuration:',
            '- [To be configured by user]',
            '',
            'Enclosures & Tanks:',
            '- [To be configured by user]'
        ];
        let configY = yPosition + 10;
        configurations.forEach((line)=>{
            if (line === '') {
                configY += 4;
            } else if (line.includes(':') && !line.startsWith('-')) {
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(218, 0, 24);
                pdf.text(line, margin + 10, configY);
                pdf.setTextColor(0, 0, 0);
                pdf.setFont('helvetica', 'normal');
                configY += 7;
            } else {
                pdf.text(line, margin + 10, configY);
                configY += 6;
            }
        });
        yPosition += 110;
        // Footer
        yPosition += 15;
        if (yPosition > 270) {
            pdf.addPage();
            yPosition = 20;
        }
        pdf.setDrawColor(218, 0, 24);
        pdf.setLineWidth(1);
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Generator Configuration`, margin, yPosition + 10);
        pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_configuration.pdf`);
    };
    const generateConfigurationPDF = async ()=>{
        if (!product) return;
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;
        let yPosition = 20;
        const headerHeight = 30;
        // Dark gray header background
        pdf.setFillColor(0, 0, 0);
        pdf.rect(0, 0, pageWidth, headerHeight, 'F');
        // Add centered logo
        try {
            const logoUrl = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/tehnolink-logo.png` : "TURBOPACK unreachable";
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            await new Promise((resolve, reject)=>{
                img.onload = resolve;
                img.onerror = reject;
                img.src = logoUrl;
            });
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const logoData = canvas.toDataURL('image/png');
                const logoWidth = 50;
                const logoHeight = logoWidth / img.width * img.height;
                const logoX = (pageWidth - logoWidth) / 2;
                const logoY = (headerHeight - logoHeight) / 2;
                pdf.addImage(logoData, 'PNG', logoX, logoY, logoWidth, logoHeight);
            }
        } catch (e) {
            console.log('Logo could not be loaded for PDF');
        }
        yPosition = headerHeight + 10;
        // Title
        pdf.setTextColor(51, 51, 51);
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.text('COMPLETE CONFIGURATION', margin + 2, yPosition + 7);
        pdf.setTextColor(0, 0, 0);
        yPosition += 15;
        // Product Info Section
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
        pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
        yPosition += 45;
        // Specifications table
        const specItems = [];
        if (product.weight) specItems.push([
            'Weight',
            `${product.weight} kg`
        ]);
        if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
            const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
            specItems.push([
                'Dimensions',
                dims
            ]);
        }
        if (specItems.length > 0) {
            pdf.setFillColor(51, 51, 51);
            pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
            pdf.setTextColor(0, 0, 0);
            yPosition += 15;
            pdf.setFontSize(9);
            pdf.setFont('helvetica', 'normal');
            specItems.forEach(([label, value], index)=>{
                if (index % 2 === 0) {
                    pdf.setFillColor(250, 250, 250);
                    pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
                }
                pdf.setFont('helvetica', 'bold');
                pdf.text(`${label}:`, margin + 5, yPosition + 4);
                pdf.setFont('helvetica', 'normal');
                pdf.text(value, margin + 50, yPosition + 4);
                yPosition += 8;
            });
            yPosition += 10;
        }
        // Product attributes
        if (product.attributes && product.attributes.length > 0) {
            const visibleAttrs = product.attributes.filter((attr)=>attr.visible && attr.options.length > 0);
            if (visibleAttrs.length > 0) {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.setFillColor(51, 51, 51);
                pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
                pdf.setTextColor(255, 255, 255);
                pdf.setFontSize(11);
                pdf.setFont('helvetica', 'bold');
                pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
                pdf.setTextColor(0, 0, 0);
                yPosition += 15;
                pdf.setFontSize(9);
                pdf.setFont('helvetica', 'normal');
                visibleAttrs.sort((a, b)=>{
                    const aIsPower = a.name.toLowerCase().includes('power');
                    const bIsPower = b.name.toLowerCase().includes('power');
                    if (aIsPower && !bIsPower) return -1;
                    if (!aIsPower && bIsPower) return 1;
                    return 0;
                }).forEach((attr, index)=>{
                    if (yPosition > 270) {
                        pdf.addPage();
                        yPosition = 20;
                    }
                    if (index % 2 === 0) {
                        pdf.setFillColor(250, 250, 250);
                        pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
                    }
                    pdf.setFont('helvetica', 'bold');
                    pdf.text(`${attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}:`, margin + 5, yPosition + 4);
                    pdf.setFont('helvetica', 'normal');
                    pdf.text(attr.options.join(', '), margin + 50, yPosition + 4);
                    yPosition += 8;
                });
            }
        }
        // Custom Configuration Section
        const hasElectrical = configSelections.electrical.voltage || configSelections.electrical.frequency || configSelections.electrical.powerOutput;
        const hasMechanical = configSelections.mechanical.enclosure || configSelections.mechanical.mounting || configSelections.mechanical.soundAttenuation;
        const hasEnclosures = configSelections.enclosures.enclosureType || configSelections.enclosures.tankSize || configSelections.enclosures.accessories.length > 0;
        if (hasElectrical || hasMechanical || hasEnclosures) {
            if (yPosition > 250) {
                pdf.addPage();
                yPosition = 20;
            }
            pdf.setFillColor(51, 51, 51);
            pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'bold');
            pdf.text('CUSTOM CONFIGURATION', margin + 5, yPosition + 8);
            pdf.setTextColor(0, 0, 0);
            yPosition += 15;
            // Electrical
            if (hasElectrical) {
                pdf.setFillColor(245, 245, 245);
                pdf.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
                pdf.setFontSize(10);
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(51, 51, 51);
                pdf.text('ELECTRICAL', margin + 5, yPosition + 8);
                pdf.setTextColor(0, 0, 0);
                pdf.setFont('helvetica', 'normal');
                let itemY = yPosition + 16;
                if (configSelections.electrical.voltage) {
                    pdf.text(`Voltage: ${configSelections.electrical.voltage}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (configSelections.electrical.frequency) {
                    pdf.text(`Frequency: ${configSelections.electrical.frequency}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (configSelections.electrical.powerOutput) {
                    pdf.text(`Power Output: ${configSelections.electrical.powerOutput}`, margin + 10, itemY);
                }
                yPosition += 35;
            }
            // Mechanical
            if (hasMechanical) {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                pdf.setFillColor(245, 245, 245);
                pdf.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
                pdf.setFontSize(10);
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(51, 51, 51);
                pdf.text('MECHANICAL', margin + 5, yPosition + 8);
                pdf.setTextColor(0, 0, 0);
                pdf.setFont('helvetica', 'normal');
                let itemY = yPosition + 16;
                if (configSelections.mechanical.enclosure) {
                    pdf.text(`Enclosure Type: ${configSelections.mechanical.enclosure}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (configSelections.mechanical.mounting) {
                    pdf.text(`Mounting: ${configSelections.mechanical.mounting}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (configSelections.mechanical.soundAttenuation) {
                    pdf.text(`Sound Attenuation: ${configSelections.mechanical.soundAttenuation}`, margin + 10, itemY);
                }
                yPosition += 35;
            }
            // Enclosures
            if (hasEnclosures) {
                if (yPosition > 250) {
                    pdf.addPage();
                    yPosition = 20;
                }
                const accCount = configSelections.enclosures.accessories.length;
                const boxHeight = 25 + (accCount > 0 ? 7 : 0);
                pdf.setFillColor(245, 245, 245);
                pdf.roundedRect(margin, yPosition, contentWidth, boxHeight, 3, 3, 'F');
                pdf.setFontSize(10);
                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(51, 51, 51);
                pdf.text('ENCLOSURES & TANKS', margin + 5, yPosition + 8);
                pdf.setTextColor(0, 0, 0);
                pdf.setFont('helvetica', 'normal');
                let itemY = yPosition + 16;
                if (configSelections.enclosures.enclosureType) {
                    pdf.text(`Enclosure Type: ${configSelections.enclosures.enclosureType}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (configSelections.enclosures.tankSize) {
                    pdf.text(`Tank Size: ${configSelections.enclosures.tankSize}`, margin + 10, itemY);
                    itemY += 7;
                }
                if (accCount > 0) {
                    pdf.text(`Accessories: ${configSelections.enclosures.accessories.join(', ')}`, margin + 10, itemY);
                }
                yPosition += boxHeight + 10;
            }
        }
        // Footer
        yPosition += 15;
        if (yPosition > 270) {
            pdf.addPage();
            yPosition = 20;
        }
        pdf.setDrawColor(51, 51, 51);
        pdf.setLineWidth(1);
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Complete Configuration`, margin, yPosition + 10);
        pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_configuration.pdf`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mx-auto px-6 sm:px-8 lg:px-10 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between datasheet-print-hide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                variant: "flat",
                                startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                    lineNumber: 737,
                                    columnNumber: 50
                                }, void 0),
                                onClick: ()=>router.back(),
                                className: "text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/tehnolink-logo.png",
                                alt: "Tehnolink Logo",
                                className: "h-8 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 740,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://tehnolink.net",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018] px-3 py-2 rounded-md transition-colors",
                                        children: "Main website"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        variant: "flat",
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                            lineNumber: 754,
                                            columnNumber: 52
                                        }, void 0),
                                        onClick: ()=>router.push('/login'),
                                        className: "text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]",
                                        children: "Log in"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 754,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto px-6 sm:px-8 lg:px-10 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "datasheet mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-[1.1fr_2fr] gap-8 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 flex-start h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                            size: "sm",
                                                            variant: "flat",
                                                            className: "bg-grety-100 text-black border border-gray-100 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-100 flex items-center justify-center shadow-lg",
                                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 776,
                                                                columnNumber: 37
                                                            }, void 0),
                                                            onClick: ()=>generateSpecificationPDF(),
                                                            children: "Specification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                            size: "sm",
                                                            variant: "flat",
                                                            className: "bg-grey-100 text-black border border-gray-100 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-100 flex items-center justify-center shadow-lg",
                                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 37
                                                            }, void 0),
                                                            children: "Documentation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                            lineNumber: 769,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this),
                                    product.images?.[0]?.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                        className: "shadow-none overflow-hidden bg-transparent border-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                            className: "p-0 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.images[0].src,
                                                alt: product.images[0].alt || product.name,
                                                className: "w-full h-64 object-cover rounded-[10px]"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                lineNumber: 796,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                            lineNumber: 795,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 794,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-gray-200 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        product.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                                className: "w-4 h-4 text-[#da0018]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 814,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "SKU:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 813,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 812,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2",
                                                                    children: product.sku
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 25
                                                        }, this),
                                                        product.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"], {
                                                                                className: "w-4 h-4 text-[#da0018]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 826,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Weight:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 825,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 824,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2",
                                                                    children: [
                                                                        product.weight,
                                                                        " kg"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 830,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 25
                                                        }, this),
                                                        (product.dimensions.length || product.dimensions.width || product.dimensions.height) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                                                                className: "w-4 h-4 text-[#da0018]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 838,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Dimensions:"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 837,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2",
                                                                    children: [
                                                                        product.dimensions.length && `${product.dimensions.length}L`,
                                                                        product.dimensions.width && ` × ${product.dimensions.width}W`,
                                                                        product.dimensions.height && ` × ${product.dimensions.height}H`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 25
                                                        }, this),
                                                        product.attributes && product.attributes.length > 0 && product.attributes.filter((attr)=>attr.visible && attr.options.length > 0).sort((a, b)=>{
                                                            // Put Power attributes first
                                                            const aIsPower = a.name.toLowerCase().includes('power');
                                                            const bIsPower = b.name.toLowerCase().includes('power');
                                                            if (aIsPower && !bIsPower) return -1;
                                                            if (!aIsPower && bIsPower) return 1;
                                                            return 0;
                                                        }).map((attribute)=>{
                                                            // Map attribute names to specific icons
                                                            const getIcon = (name)=>{
                                                                const iconMap = {
                                                                    'engine': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 43
                                                                    }, this),
                                                                    'model': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 42
                                                                    }, this),
                                                                    'regulator': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 867,
                                                                        columnNumber: 46
                                                                    }, this),
                                                                    'frequency': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 868,
                                                                        columnNumber: 46
                                                                    }, this),
                                                                    'emission': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 869,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    'fuel': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 870,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    'phase': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 42
                                                                    }, this),
                                                                    'acoustic': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    'voltage': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 873,
                                                                        columnNumber: 44
                                                                    }, this),
                                                                    'power': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                        className: "w-4 h-4 text-[#da0018]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 874,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                };
                                                                // Check if name contains any of the keys
                                                                for (const [key, icon] of Object.entries(iconMap)){
                                                                    if (name.toLowerCase().includes(key)) return icon;
                                                                }
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                    className: "w-4 h-4 text-[#da0018]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 880,
                                                                    columnNumber: 38
                                                                }, this);
                                                            };
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-gray-200 last:border-b-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2 capitalize",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                getIcon(attribute.name),
                                                                                attribute.name,
                                                                                ":"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 886,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2",
                                                                        children: attribute.options.join(', ')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 891,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, attribute.id, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 31
                                                            }, this);
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                lineNumber: 808,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-5 bg-white rounded-lg h-full shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-semibold text-gray-900",
                                                            children: "Configure your own"
                                                        }, void 0, false, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 908,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                        size: "sm",
                                                        variant: "flat",
                                                        className: "bg-gray-100 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg",
                                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 35
                                                        }, void 0),
                                                        onClick: ()=>{
                                                            setConfigSelections({
                                                                electrical: {
                                                                    voltage: '',
                                                                    frequency: '',
                                                                    connections: '',
                                                                    powerOutput: ''
                                                                },
                                                                mechanical: {
                                                                    enclosure: '',
                                                                    mounting: '',
                                                                    soundAttenuation: ''
                                                                },
                                                                enclosures: {
                                                                    enclosureType: '',
                                                                    tankSize: '',
                                                                    accessories: []
                                                                }
                                                            });
                                                            setActiveTab('general');
                                                        },
                                                        children: "Start over"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                lineNumber: 906,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                    size: "sm",
                                                    variant: "flat",
                                                    className: "bg-gray-100 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg",
                                                    startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 35
                                                    }, void 0),
                                                    onClick: ()=>generateConfigurationPDF(),
                                                    children: "Save configuration"
                                                }, void 0, false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 905,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full block mt-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$TBXVIZ2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                                            "aria-label": "Configuration steps",
                                            color: "primary",
                                            variant: "underlined",
                                            fullWidth: true,
                                            selectedKey: activeTab,
                                            onSelectionChange: (key)=>setActiveTab(key),
                                            classNames: {
                                                base: "w-full",
                                                tabList: "w-full border border-gray-300 rounded-[10px] overflow-hidden flex bg-white gap-0",
                                                tab: "flex-1 px-4 h-10 text-sm font-semibold text-gray-700 data-[selected=true]:bg-[#333] data-[selected=true]:text-white rounded-none text-center focus:outline-none focus:ring-0 flex items-center justify-center border-r border-gray-300 last:border-r-0",
                                                cursor: "hidden"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                                    title: "General",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-2",
                                                                        children: "European CE Certification"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "flat",
                                                                            className: "bg-gray-50 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg",
                                                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 978,
                                                                                columnNumber: 41
                                                                            }, void 0),
                                                                            children: "EU Declaration of Conformity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 974,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 973,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-2",
                                                                        children: "CIS Certification"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "flat",
                                                                            className: "bg-gray-50 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg",
                                                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 992,
                                                                                columnNumber: 41
                                                                            }, void 0),
                                                                            children: "CIS Certification"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 988,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 987,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 985,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this)
                                                }, "general", false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 969,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                                    title: "Electrical",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Voltage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1004,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "voltage",
                                                                                        value: "230V",
                                                                                        checked: configSelections.electrical.voltage === '230V',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        voltage: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1007,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "230V"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1018,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1006,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "voltage",
                                                                                        value: "400V",
                                                                                        checked: configSelections.electrical.voltage === '400V',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        voltage: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1021,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "400V"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1032,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1020,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1005,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1003,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Frequency"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "frequency",
                                                                                        value: "50Hz",
                                                                                        checked: configSelections.electrical.frequency === '50Hz',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        frequency: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1041,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "50 Hz"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1052,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "frequency",
                                                                                        value: "60Hz",
                                                                                        checked: configSelections.electrical.frequency === '60Hz',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        frequency: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1055,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "60 Hz"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1066,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1054,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1039,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Power Output"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1072,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "powerOutput",
                                                                                        value: "Standby",
                                                                                        checked: configSelections.electrical.powerOutput === 'Standby',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        powerOutput: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1075,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Standby"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1086,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1074,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "powerOutput",
                                                                                        value: "Prime",
                                                                                        checked: configSelections.electrical.powerOutput === 'Prime',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    electrical: {
                                                                                                        ...prev.electrical,
                                                                                                        powerOutput: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1089,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Prime"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1100,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1088,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1071,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 19
                                                    }, this)
                                                }, "electrical", false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                                    title: "Mechanical",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Enclosure Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1110,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosure",
                                                                                        value: "Open",
                                                                                        checked: configSelections.mechanical.enclosure === 'Open',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        enclosure: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1113,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Open"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1124,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1112,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosure",
                                                                                        value: "Silent",
                                                                                        checked: configSelections.mechanical.enclosure === 'Silent',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        enclosure: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1127,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Silent"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1138,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1126,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosure",
                                                                                        value: "Weather Protected",
                                                                                        checked: configSelections.mechanical.enclosure === 'Weather Protected',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        enclosure: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1141,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Weather Protected"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1152,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1140,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1111,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1109,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Mounting"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1158,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "mounting",
                                                                                        value: "Foot",
                                                                                        checked: configSelections.mechanical.mounting === 'Foot',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        mounting: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1161,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Foot"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1172,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1160,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "mounting",
                                                                                        value: "Trailer",
                                                                                        checked: configSelections.mechanical.mounting === 'Trailer',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        mounting: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1175,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Trailer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1186,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1174,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1159,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Sound Attenuation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1192,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "soundAttenuation",
                                                                                        value: "Standard",
                                                                                        checked: configSelections.mechanical.soundAttenuation === 'Standard',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        soundAttenuation: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1195,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Standard"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1206,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1194,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "soundAttenuation",
                                                                                        value: "Super Silent",
                                                                                        checked: configSelections.mechanical.soundAttenuation === 'Super Silent',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    mechanical: {
                                                                                                        ...prev.mechanical,
                                                                                                        soundAttenuation: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1209,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Super Silent"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1220,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1208,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1193,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 1108,
                                                        columnNumber: 19
                                                    }, this)
                                                }, "mechanical", false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                                    title: "Enclosures & Tanks",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Enclosure Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1230,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosureType",
                                                                                        value: "Canopy",
                                                                                        checked: configSelections.enclosures.enclosureType === 'Canopy',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        enclosureType: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1233,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Canopy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1244,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1232,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosureType",
                                                                                        value: "Open",
                                                                                        checked: configSelections.enclosures.enclosureType === 'Open',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        enclosureType: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1247,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Open"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1258,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1246,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "enclosureType",
                                                                                        value: "Silent",
                                                                                        checked: configSelections.enclosures.enclosureType === 'Silent',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        enclosureType: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1261,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Silent"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1272,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1260,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1231,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Tank Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1278,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "tankSize",
                                                                                        value: "Small",
                                                                                        checked: configSelections.enclosures.tankSize === 'Small',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        tankSize: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1281,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Small"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1292,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1280,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "tankSize",
                                                                                        value: "Medium",
                                                                                        checked: configSelections.enclosures.tankSize === 'Medium',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        tankSize: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1295,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Medium"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1306,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1294,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "radio",
                                                                                        name: "tankSize",
                                                                                        value: "Large",
                                                                                        checked: configSelections.enclosures.tankSize === 'Large',
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        tankSize: e.target.value
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1309,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Large"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1320,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1308,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1279,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1277,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-gray-700 mb-3",
                                                                        children: "Accessories"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1326,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-row flex-nowrap gap-6 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        name: "accessories",
                                                                                        value: "Fuel Pump",
                                                                                        checked: configSelections.enclosures.accessories.includes('Fuel Pump'),
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        accessories: e.target.checked ? [
                                                                                                            ...prev.enclosures.accessories,
                                                                                                            'Fuel Pump'
                                                                                                        ] : prev.enclosures.accessories.filter((acc)=>acc !== 'Fuel Pump')
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1329,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Fuel Pump"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1345,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1328,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        name: "accessories",
                                                                                        value: "Battery Charger",
                                                                                        checked: configSelections.enclosures.accessories.includes('Battery Charger'),
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        accessories: e.target.checked ? [
                                                                                                            ...prev.enclosures.accessories,
                                                                                                            'Battery Charger'
                                                                                                        ] : prev.enclosures.accessories.filter((acc)=>acc !== 'Battery Charger')
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1348,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Battery Charger"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1364,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1347,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "inline-flex items-center gap-2 cursor-pointer whitespace-nowrap",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        name: "accessories",
                                                                                        value: "Control Panel",
                                                                                        checked: configSelections.enclosures.accessories.includes('Control Panel'),
                                                                                        onChange: (e)=>setConfigSelections((prev)=>({
                                                                                                    ...prev,
                                                                                                    enclosures: {
                                                                                                        ...prev.enclosures,
                                                                                                        accessories: e.target.checked ? [
                                                                                                            ...prev.enclosures.accessories,
                                                                                                            'Control Panel'
                                                                                                        ] : prev.enclosures.accessories.filter((acc)=>acc !== 'Control Panel')
                                                                                                    }
                                                                                                })),
                                                                                        className: "w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1367,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-base text-gray-700 whitespace-nowrap",
                                                                                        children: "Control Panel"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                        lineNumber: 1383,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                lineNumber: 1366,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                        lineNumber: 1327,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                lineNumber: 1325,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 1228,
                                                        columnNumber: 19
                                                    }, this)
                                                }, "enclosures", false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tabs$2f$dist$2f$chunk$2d$FXLYF44B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                                    title: "Summary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm font-semibold text-gray-900 mb-3",
                                                                    children: "Custom Configuration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 1394,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        (configSelections.electrical.voltage || configSelections.electrical.frequency || configSelections.electrical.powerOutput) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white border border-gray-200 rounded-lg p-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide",
                                                                                    children: "Electrical"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1399,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: [
                                                                                        configSelections.electrical.voltage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Voltage:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1403,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.electrical.voltage
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1404,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1402,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.electrical.frequency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Frequency:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1409,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.electrical.frequency
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1410,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1408,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.electrical.powerOutput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Power Output:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1415,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.electrical.powerOutput
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1416,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1414,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1400,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 1398,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        (configSelections.mechanical.enclosure || configSelections.mechanical.mounting || configSelections.mechanical.soundAttenuation) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white border border-gray-200 rounded-lg p-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide",
                                                                                    children: "Mechanical"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1426,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: [
                                                                                        configSelections.mechanical.enclosure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Enclosure Type:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1430,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.mechanical.enclosure
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1431,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1429,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.mechanical.mounting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Mounting:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1436,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.mechanical.mounting
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1437,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1435,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.mechanical.soundAttenuation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Sound Attenuation:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1442,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.mechanical.soundAttenuation
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1443,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1441,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1427,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 1425,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        (configSelections.enclosures.enclosureType || configSelections.enclosures.tankSize || configSelections.enclosures.accessories.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-white border border-gray-200 rounded-lg p-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide",
                                                                                    children: "Enclosures & Tanks"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1453,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: [
                                                                                        configSelections.enclosures.enclosureType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Enclosure Type:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1457,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.enclosures.enclosureType
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1458,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1456,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.enclosures.tankSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Tank Size:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1463,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.enclosures.tankSize
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1464,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1462,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        configSelections.enclosures.accessories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex justify-between text-sm",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-gray-600",
                                                                                                    children: "Accessories:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1469,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium text-gray-900",
                                                                                                    children: configSelections.enclosures.accessories.join(', ')
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                                    lineNumber: 1470,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                            lineNumber: 1468,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                                    lineNumber: 1454,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                            lineNumber: 1452,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                                    lineNumber: 1395,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                            lineNumber: 1393,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 19
                                                    }, this)
                                                }, "summary", false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                                    lineNumber: 1390,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                            lineNumber: 954,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                        lineNumber: 953,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                                lineNumber: 904,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                        lineNumber: 765,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                    lineNumber: 764,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
                lineNumber: 762,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/app/products/[id]/ProductDetailClient.tsx",
        lineNumber: 732,
        columnNumber: 5
    }, this);
}
_s(ProductDetailClient, "q3uVB7ddCAuQG4QxeIKbRgtNB2Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProductDetailClient;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=woocommerce-products_src_aea27a5a._.js.map