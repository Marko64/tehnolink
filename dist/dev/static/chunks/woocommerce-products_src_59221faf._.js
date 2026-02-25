(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/woocommerce-products/src/components/ProductFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFiltersComponent",
    ()=>ProductFiltersComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$select$2f$dist$2f$chunk$2d$7H6JMIKS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/select/dist/chunk-7H6JMIKS.mjs [app-client] (ecmascript) <export select_default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/listbox/dist/chunk-VHPYXGWP.mjs [app-client] (ecmascript) <export listbox_item_base_default as SelectItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/slider/dist/chunk-O6IB4TCE.mjs [app-client] (ecmascript) <export slider_default as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$checkbox$2f$dist$2f$chunk$2d$CKQ4RPMV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__checkbox_default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/checkbox/dist/chunk-CKQ4RPMV.mjs [app-client] (ecmascript) <export checkbox_default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const sortOptions = [
    {
        key: "date",
        label: "Newest First"
    },
    {
        key: "price",
        label: "Price: Low to High"
    },
    {
        key: "price-desc",
        label: "Price: High to Low"
    },
    {
        key: "popularity",
        label: "Popularity"
    },
    {
        key: "rating",
        label: "Rating"
    }
];
// Filter options matching the screenshot
const gorivoOptions = [
    {
        key: "diesel",
        label: "Diesel"
    },
    {
        key: "gas",
        label: "Gas"
    }
];
const frekvencijaOptions = [
    {
        key: "50-hz",
        label: "50 Hz"
    },
    {
        key: "60-hz",
        label: "60 Hz"
    }
];
const fazaOptions = [
    {
        key: "single-phase",
        label: "Single phase"
    },
    {
        key: "three-phase",
        label: "Three phase"
    }
];
const emisijaOptions = [
    {
        key: "cumple-epa",
        label: "Cumple EPA"
    },
    {
        key: "non-certified",
        label: "non certified"
    },
    {
        key: "non-emission",
        label: "Non emission"
    },
    {
        key: "stage-2",
        label: "Stage 2"
    },
    {
        key: "stage-3a",
        label: "Stage 3A"
    },
    {
        key: "stage-5",
        label: "Stage 5"
    }
];
function ProductFiltersComponent({ filters, onFiltersChange, categories }) {
    _s();
    const [isMobileExpanded, setIsMobileExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localFilters, setLocalFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters);
    // Initialize arrays if undefined
    const gorivo = localFilters.gorivo || [];
    const frekvencija = localFilters.frekvencija || [];
    const faza = localFilters.faza || [];
    const emisija = localFilters.emisija || [];
    const handleSearchChange = (value)=>{
        const newFilters = {
            ...localFilters,
            search: value
        };
        setLocalFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleSortChange = (value)=>{
        const newFilters = {
            ...localFilters,
            orderby: value
        };
        setLocalFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleAttributeChange = (attribute, value, checked)=>{
        const currentValues = localFilters[attribute] || [];
        const newValues = checked ? [
            ...currentValues,
            value
        ] : currentValues.filter((v)=>v !== value);
        const newFilters = {
            ...localFilters,
            [attribute]: newValues
        };
        setLocalFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const handleSnagaChange = (value)=>{
        const values = Array.isArray(value) ? value : [
            6,
            value
        ];
        const newFilters = {
            ...localFilters,
            minSnaga: values[0],
            maxSnaga: values[1]
        };
        setLocalFilters(newFilters);
        onFiltersChange(newFilters);
    };
    const clearFilters = ()=>{
        const cleared = {};
        setLocalFilters(cleared);
        onFiltersChange(cleared);
    };
    const hasActiveFilters = Object.values(localFilters).some((v)=>Array.isArray(v) ? v.length > 0 : v !== undefined && v !== "");
    // Render checkbox group
    const renderCheckboxGroup = (title, options, attribute, currentValues)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-danger text-lg font-medium mb-3",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 114,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-x-4 gap-y-2",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$checkbox$2f$dist$2f$chunk$2d$CKQ4RPMV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__checkbox_default__as__Checkbox$3e$__["Checkbox"], {
                            isSelected: currentValues.includes(option.key),
                            onValueChange: (checked)=>handleAttributeChange(attribute, option.key, checked),
                            size: "sm",
                            children: option.label
                        }, option.key, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 115,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
            lineNumber: 113,
            columnNumber: 5
        }, this);
    // Sidebar content
    const SidebarContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    type: "text",
                    placeholder: "Search products...",
                    value: localFilters.search || "",
                    onValueChange: handleSearchChange,
                    startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "w-4 h-4 text-default-400"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 141,
                        columnNumber: 23
                    }, void 0),
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$select$2f$dist$2f$chunk$2d$7H6JMIKS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__["Select"], {
                    label: "Sort By",
                    placeholder: "Newest First",
                    selectedKeys: localFilters.orderby ? [
                        localFilters.orderby
                    ] : [],
                    onChange: (e)=>handleSortChange(e.target.value),
                    size: "sm",
                    children: sortOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__["SelectItem"], {
                            value: option.key,
                            children: option.label
                        }, option.key, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 146,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-default-200"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 160,
                    columnNumber: 7
                }, this),
                renderCheckboxGroup("Gorivo", gorivoOptions, "gorivo", gorivo),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-default-200"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 165,
                    columnNumber: 7
                }, this),
                renderCheckboxGroup("Frekvencija", frekvencijaOptions, "frekvencija", frekvencija),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-default-200"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 170,
                    columnNumber: 7
                }, this),
                renderCheckboxGroup("Faza", fazaOptions, "faza", faza),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-default-200"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 175,
                    columnNumber: 7
                }, this),
                renderCheckboxGroup("Emisija", emisijaOptions, "emisija", emisija),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-default-200"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 180,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-danger text-lg font-medium mb-3",
                            children: "Opseg snage"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                            lineNumber: 184,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__["Slider"], {
                            size: "sm",
                            step: 10,
                            minValue: 6,
                            maxValue: 3300,
                            value: [
                                localFilters.minSnaga || 6,
                                localFilters.maxSnaga || 3300
                            ],
                            onChange: (value)=>handleSnagaChange(value),
                            className: "w-full",
                            formatOptions: {
                                style: "decimal",
                                maximumFractionDigits: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                            lineNumber: 185,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs text-default-500 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "6"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                    lineNumber: 199,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "830"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                    lineNumber: 200,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "1.653"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                    lineNumber: 201,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "2.477"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "3.300"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                    lineNumber: 203,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                            lineNumber: 198,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 183,
                    columnNumber: 7
                }, this),
                hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    variant: "flat",
                    color: "danger",
                    size: "sm",
                    onPress: clearFilters,
                    className: "w-full",
                    endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 214,
                        columnNumber: 23
                    }, void 0),
                    children: "Clear All Filters"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
            lineNumber: 134,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    variant: "flat",
                    fullWidth: true,
                    onPress: ()=>setIsMobileExpanded(!isMobileExpanded),
                    endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 230,
                        columnNumber: 23
                    }, void 0),
                    children: "Filters"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            isMobileExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                className: "lg:hidden mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProductFiltersComponent, "5S7ZlBYUs6f19WGyw/8JW2NOYVo=");
_c = ProductFiltersComponent;
var _c;
__turbopack_context__.k.register(_c, "ProductFiltersComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WOOCOMMERCE_API_URL || "https://tehnolink.net/wp-json/wc/v3";
const CONSUMER_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY || "ck_50493b2d57ff0f3895567b202c207e1bd36dbac7";
const CONSUMER_SECRET = __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET || "cs_8dd00d08612e5c652cee2b27aeaded98e032d756";
function getAuthHeaders() {
    const pair = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
    const encoded = ("TURBOPACK compile-time truthy", 1) ? btoa(pair) : "TURBOPACK unreachable";
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/woocommerce-products/src/hooks/useProducts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/lib/woocommerce.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
    _s();
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialLoad, setInitialLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Keep track of last API filters to avoid duplicate fetches
    const lastApiFiltersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const apiFilters = getApiFilters(filters);
    const apiFiltersKey = JSON.stringify(apiFilters);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[fetchData]": async ()=>{
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
                        }).then({
                            "useProducts.useCallback[fetchData]": (res)=>{
                                if (!res.ok) throw new Error(`Failed to fetch products: ${res.statusText}`);
                                return res.json();
                            }
                        }["useProducts.useCallback[fetchData]"]);
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
        }
    }["useProducts.useCallback[fetchData]"], [
        apiFiltersKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
            fetchData();
        }
    }["useProducts.useEffect"], [
        fetchData
    ]);
    // Apply client-side attribute filtering instantly (no API calls)
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProducts.useMemo[filteredProducts]": ()=>{
            return filterProductsByAttributes(allProducts, filters);
        }
    }["useProducts.useMemo[filteredProducts]"], [
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
_s(useProducts, "AvgbACPK6XxX2VAsyvlDfVYgPKw=");
function useCategories() {
    _s1();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategories.useEffect": ()=>{
            async function fetchData() {
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])();
                    setCategories(data);
                } catch (err) {
                    setError(err instanceof Error ? err.message : "Failed to fetch categories");
                } finally{
                    setLoading(false);
                }
            }
            fetchData();
        }
    }["useCategories.useEffect"], []);
    return {
        categories,
        loading,
        error
    };
}
_s1(useCategories, "PEFWK5NudK8G7IEShrERrFoV+TY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/woocommerce-products/src/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/components/ProductFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs [app-client] (ecmascript) <export navbar_default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-client] (ecmascript) <export navbar_brand_default as NavbarBrand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-PSG7VTZC.mjs [app-client] (ecmascript) <export navbar_content_default as NavbarContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProductsPage() {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        excludedCategories: [
            229,
            1222,
            1228,
            1226,
            233,
            117,
            1178,
            1180,
            1188,
            1190,
            1200,
            1198,
            1202,
            1204,
            1216,
            1218
        ]
    });
    const { categories, loading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    // Create query string for filters
    const getFilterQueryString = ()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__["Navbar"], {
                position: "sticky",
                className: "bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__["NavbarBrand"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                className: "w-6 h-6 text-primary mr-2"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-xl",
                                children: "Product Filters"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                        justify: "end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                as: "a",
                                href: "/products/search",
                                variant: "flat",
                                color: "primary",
                                endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, void 0),
                                children: "Search Products"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: `/products/results?${getFilterQueryString()}`,
                                color: "primary",
                                endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, void 0),
                                className: "ml-2",
                                children: "View Results"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Filter Products"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: 'Select your preferences below, then click "View Results" to see matching products.'
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFiltersComponent"], {
                            filters: filters,
                            onFiltersChange: setFilters,
                            categories: categories
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 bg-blue-50 rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-blue-900 mb-2",
                                children: "Filter Summary"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-blue-700 text-sm",
                                children: [
                                    filters.search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Search: ",
                                            filters.search
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 32
                                    }, this),
                                    filters.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Category: ",
                                            filters.category
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 34
                                    }, this),
                                    filters.minPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Price: $",
                                            filters.minPrice,
                                            " - $",
                                            filters.maxPrice || '∞'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 34
                                    }, this),
                                    filters.gorivo && filters.gorivo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Fuel: ",
                                            filters.gorivo.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 61
                                    }, this),
                                    filters.frekvencija && filters.frekvencija.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Frequency: ",
                                            filters.frekvencija.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 71
                                    }, this),
                                    filters.faza && filters.faza.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Phase: ",
                                            filters.faza.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 57
                                    }, this),
                                    filters.emisija && filters.emisija.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Emission: ",
                                            filters.emisija.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 63
                                    }, this),
                                    filters.minSnaga && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Power: ",
                                            filters.minSnaga,
                                            "kW - ",
                                            filters.maxSnaga || '∞',
                                            "kW"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/app/products/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ProductsPage, "TBxZkI2aktbo63LkULS4eutgS0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"]
    ];
});
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=woocommerce-products_src_59221faf._.js.map