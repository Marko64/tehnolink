module.exports = [
"[project]/woocommerce-products/src/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-ssr] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-ssr] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$JHUBASYZ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_footer_default__as__CardFooter$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs [app-ssr] (ecmascript) <export card_footer_default as CardFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-ssr] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-ssr] (ecmascript) <export chip_default as Chip>");
"use client";
;
;
function ProductCard({ product }) {
    const price = parseFloat(product.price);
    const regularPrice = parseFloat(product.regular_price);
    const isOnSale = product.on_sale && price < regularPrice;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
        className: "w-full h-full group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                className: "p-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square overflow-hidden bg-gray-100",
                    children: [
                        product.images && product.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                            src: product.images[0].src,
                            alt: product.images[0].alt || product.name,
                            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                            removeWrapper: true
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center bg-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "No Image"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        isOnSale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                            color: "danger",
                            size: "sm",
                            className: "absolute top-2 left-2",
                            children: "Sale"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                            color: product.stock_status === "instock" ? "success" : "warning",
                            size: "sm",
                            variant: "flat",
                            className: "absolute top-2 right-2",
                            children: product.stock_status === "instock" ? "In Stock" : "Out of Stock"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$JHUBASYZ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_footer_default__as__CardFooter$3e$__["CardFooter"], {
                className: "flex flex-col items-start gap-2 p-4",
                children: [
                    product.categories && product.categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: product.categories.slice(0, 2).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                size: "sm",
                                variant: "flat",
                                color: "primary",
                                children: category.name
                            }, category.id, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    product.short_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 line-clamp-2",
                        dangerouslySetInnerHTML: {
                            __html: product.short_description
                        }
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold",
                                children: [
                                    "$",
                                    product.price || "0.00"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            isOnSale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 line-through",
                                children: [
                                    "$",
                                    product.regular_price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    product.average_rating && parseFloat(product.average_rating) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-500",
                                children: "★"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: product.average_rating
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "(",
                                    product.rating_count,
                                    " reviews)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/woocommerce-products/src/components/ProductGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-ssr] (ecmascript) <export spinner_default as Spinner>");
"use client";
;
;
;
function ProductGrid({ products, loading, error, initialLoad = false }) {
    if (initialLoad) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-danger text-lg font-semibold mb-2",
                    children: "Error Loading Products"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-20 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl font-semibold mb-2",
                    children: "No Products Found"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Try adjusting your filters to see more products."
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-sm text-gray-600 flex items-center gap-2",
                children: [
                    "Showing ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: products.length
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    " products",
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                        size: "sm",
                        color: "primary"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/woocommerce-products/src/lib/woocommerce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCategories",
    ()=>fetchCategories,
    "fetchProductById",
    ()=>fetchProductById,
    "fetchProducts",
    ()=>fetchProducts
]);
const API_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL || "https://tehnolink.net/wp-json/wc/v3";
const CONSUMER_KEY = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY || "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7";
const CONSUMER_SECRET = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET || "cs_8dd00d08612e5c652cee2b27aeaded98e032d756";
function getAuthHeaders() {
    const pair = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
    const encoded = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Buffer.from(pair).toString("base64");
    return {
        "Authorization": `Basic ${encoded}`,
        "Content-Type": "application/json"
    };
}
async function fetchProducts(params) {
    const queryParams = new URLSearchParams();
    // Add auth credentials as query parameters
    queryParams.append('consumer_key', CONSUMER_KEY);
    queryParams.append('consumer_secret', CONSUMER_SECRET);
    if (params) {
        Object.entries(params).forEach(([key, value])=>{
            if (value !== undefined && value !== "") {
                queryParams.append(key, String(value));
            }
        });
    }
    const url = `${API_URL}/products?${queryParams.toString()}`;
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return response.json();
}
async function fetchCategories() {
    const queryParams = new URLSearchParams();
    queryParams.append('consumer_key', CONSUMER_KEY);
    queryParams.append('consumer_secret', CONSUMER_SECRET);
    queryParams.append('per_page', '100');
    const url = `${API_URL}/products/categories?${queryParams.toString()}`;
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    return response.json();
}
async function fetchProductById(id) {
    const queryParams = new URLSearchParams();
    queryParams.append('consumer_key', CONSUMER_KEY);
    queryParams.append('consumer_secret', CONSUMER_SECRET);
    const url = `${API_URL}/products/${id}?${queryParams.toString()}`;
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    return response.json();
}
}),
"[project]/woocommerce-products/src/hooks/useProducts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/lib/woocommerce.ts [app-ssr] (ecmascript)");
"use client";
;
;
// Helper function to check if product matches attribute filter
function matchesAttributeFilter(product, attributeName, selectedValues) {
    if (!selectedValues || selectedValues.length === 0) return true;
    // Map our internal attribute names to WooCommerce attribute names
    const attributeNameMap = {
        'gorivo': 'fuel',
        'frekvencija': 'frequency',
        'faza': 'Phase',
        'emisija': 'Emission',
        'snaga': 'Power (PRP / ESP)'
    };
    const wooAttributeName = attributeNameMap[attributeName] || attributeName;
    const attribute = product.attributes.find((attr)=>attr.name === wooAttributeName);
    if (!attribute) return false;
    // Check if any of the selected values match the product's attribute options
    return selectedValues.some((value)=>attribute.options.some((opt)=>opt.toLowerCase().includes(value.toLowerCase())));
}
// Helper function to extract numeric value from attribute
function getAttributeNumberValue(product, attributeName) {
    // Map our internal attribute names to WooCommerce attribute names
    const attributeNameMap = {
        'gorivo': 'fuel',
        'frekvencija': 'frequency',
        'faza': 'Phase',
        'emisija': 'Emission',
        'snaga': 'Power (PRP / ESP)'
    };
    const wooAttributeName = attributeNameMap[attributeName] || attributeName;
    const attribute = product.attributes.find((attr)=>attr.name === wooAttributeName);
    if (!attribute || attribute.options.length === 0) return null;
    // Try to parse the first option as a number
    const value = parseFloat(attribute.options[0].replace(/[^0-9.]/g, ""));
    return isNaN(value) ? null : value;
}
// Client-side filter function
function filterProductsByAttributes(products, filters) {
    return products.filter((product)=>{
        // Exclude products from certain categories
        if (filters.excludedCategories && filters.excludedCategories.length > 0) {
            const hasExcludedCategory = product.categories.some((cat)=>filters.excludedCategories.includes(cat.id));
            if (hasExcludedCategory) return false;
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
}
// Extract only API-relevant filters
function getApiFilters(filters) {
    return {
        search: filters.search,
        category: filters.category,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        onSale: filters.onSale,
        inStock: filters.inStock,
        orderby: filters.orderby
    };
}
function useProducts(filters) {
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialLoad, setInitialLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Keep track of last API filters to avoid duplicate fetches
    const lastApiFiltersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const apiFilters = getApiFilters(filters);
    const apiFiltersKey = JSON.stringify(apiFilters);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Only fetch if API filters changed
        if (apiFiltersKey === lastApiFiltersRef.current) {
            return;
        }
        setLoading(true);
        setError(null);
        setInitialLoad(true);
        try {
            const allFetchedProducts = [];
            let page = 1;
            const perPage = 100;
            let hasMore = true;
            // Fetch first page quickly for initial display
            const firstPageParams = {
                per_page: perPage,
                page: 1
            };
            // Add API filters to first page
            if (apiFilters.search) firstPageParams.search = apiFilters.search;
            if (apiFilters.category) firstPageParams.category = apiFilters.category;
            if (apiFilters.minPrice !== undefined) firstPageParams.min_price = apiFilters.minPrice;
            if (apiFilters.maxPrice !== undefined) firstPageParams.max_price = apiFilters.maxPrice;
            if (apiFilters.onSale) firstPageParams.on_sale = true;
            if (apiFilters.inStock) firstPageParams.stock_status = "instock";
            if (apiFilters.orderby) {
                firstPageParams.orderby = apiFilters.orderby;
                if (apiFilters.orderby === "price") {
                    firstPageParams.order = "asc";
                } else if (apiFilters.orderby === "price-desc") {
                    firstPageParams.orderby = "price";
                    firstPageParams.order = "desc";
                }
            }
            // Add auth credentials
            firstPageParams.consumer_key = "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7";
            firstPageParams.consumer_secret = "cs_8dd00d08612e5c652cee2b27aeaded98e032d756";
            const queryParams = new URLSearchParams(firstPageParams);
            const firstPageUrl = `${"https://tehnolink.net/wp-json/wc/v3"}/products?${queryParams.toString()}`;
            const firstPageResponse = await fetch(firstPageUrl, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!firstPageResponse.ok) {
                throw new Error(`Failed to fetch products: ${firstPageResponse.statusText}`);
            }
            const firstPageData = await firstPageResponse.json();
            allFetchedProducts.push(...firstPageData);
            setAllProducts(allFetchedProducts); // Show first page immediately
            setInitialLoad(false);
            // Continue fetching remaining pages in background
            if (firstPageData.length === perPage) {
                page = 2;
                while(hasMore){
                    const params = {
                        per_page: perPage,
                        page: page,
                        consumer_key: "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7",
                        consumer_secret: "cs_8dd00d08612e5c652cee2b27aeaded98e032d756"
                    };
                    // Only use API filters that WooCommerce supports
                    if (apiFilters.search) params.search = apiFilters.search;
                    if (apiFilters.category) params.category = apiFilters.category;
                    if (apiFilters.minPrice !== undefined) params.min_price = apiFilters.minPrice;
                    if (apiFilters.maxPrice !== undefined) params.max_price = apiFilters.maxPrice;
                    if (apiFilters.onSale) params.on_sale = true;
                    if (apiFilters.inStock) params.stock_status = "instock";
                    if (apiFilters.orderby) {
                        params.orderby = apiFilters.orderby;
                        if (apiFilters.orderby === "price") {
                            params.order = "asc";
                        } else if (apiFilters.orderby === "price-desc") {
                            params.orderby = "price";
                            params.order = "desc";
                        }
                    }
                    const queryParams = new URLSearchParams(params);
                    const url = `${"https://tehnolink.net/wp-json/wc/v3"}/products?${queryParams.toString()}`;
                    const data = await fetch(url, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((res)=>{
                        if (!res.ok) throw new Error(`Failed to fetch products: ${res.statusText}`);
                        return res.json();
                    });
                    allFetchedProducts.push(...data);
                    setAllProducts([
                        ...allFetchedProducts
                    ]); // Update with additional products
                    // Check if we got fewer products than requested (last page)
                    if (data.length < perPage) {
                        hasMore = false;
                    } else {
                        page++;
                    }
                }
            }
            lastApiFiltersRef.current = apiFiltersKey;
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch products");
        } finally{
            setLoading(false);
            setInitialLoad(false);
        }
    }, [
        apiFiltersKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
        fetchData
    ]);
    // Apply client-side attribute filtering instantly (no API calls)
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return filterProductsByAttributes(allProducts, filters);
    }, [
        allProducts,
        filters
    ]);
    return {
        products: filteredProducts,
        loading,
        error,
        refetch: fetchData,
        initialLoad
    };
}
function useCategories() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchData() {
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCategories"])();
                setCategories(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch categories");
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return {
        categories,
        loading,
        error
    };
}
}),
"[project]/woocommerce-products/src/app/products/search/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsSearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/components/ProductGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/hooks/useProducts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs [app-ssr] (ecmascript) <export navbar_default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-ssr] (ecmascript) <export navbar_brand_default as NavbarBrand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-ssr] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client";
;
;
;
;
;
;
function ProductsSearchPage() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const handleSearch = async ()=>{
        if (!searchTerm.trim()) return;
        setLoading(true);
        setError(null);
        try {
            // Search through WooCommerce API with attribute search
            const params = new URLSearchParams({
                consumer_key: "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7",
                consumer_secret: "cs_8dd00d08612e5c652cee2b27aeaded98e032d756",
                search: searchTerm,
                per_page: "100"
            });
            const response = await fetch(`https://tehnolink.net/wp-json/wc/v3/products?${params.toString()}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error(`Search failed: ${response.statusText}`);
            }
            const products = await response.json();
            setSearchResults(products);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Search failed");
        } finally{
            setLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__["Navbar"], {
                position: "sticky",
                className: "bg-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__["NavbarBrand"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            className: "w-6 h-6 text-primary mr-2"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-xl",
                            children: "Product Search"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Search Products"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Search through all product attributes including fuel type, frequency, phase, emission, and power."
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-sm p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                                type: "text",
                                                placeholder: "Search products...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                onKeyPress: handleKeyPress,
                                                startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 31
                                                }, void 0),
                                                size: "lg",
                                                className: "flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                color: "primary",
                                                onClick: handleSearch,
                                                isLoading: loading,
                                                className: "px-8",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-2",
                                                children: "Search Tips:"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: 'Try searching for: "diesel", "gas", "50 Hz", "60 Hz"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: 'Search for power ratings: "5kW", "10kW", "20kW"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: 'Search for phases: "single phase", "three phase"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: 'Search for emissions: "EPA", "Stage 5", "non certified"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: [
                                "Error: ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900 mb-4",
                                children: [
                                    "Found ",
                                    searchResults.length,
                                    ' products for "',
                                    searchTerm,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductGrid"], {
                                products: searchResults,
                                loading: false,
                                error: null,
                                initialLoad: false
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    !loading && !error && searchResults.length === 0 && searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: [
                                    'No products found for "',
                                    searchTerm,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-2",
                                children: "Try different search terms"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/app/products/search/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=woocommerce-products_src_042de049._.js.map