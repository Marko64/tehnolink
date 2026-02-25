module.exports = [
"[project]/woocommerce-products/src/components/ProductFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFiltersComponent",
    ()=>ProductFiltersComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-ssr] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/slider/dist/chunk-O6IB4TCE.mjs [app-ssr] (ecmascript) <export slider_default as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs [app-ssr] (ecmascript) <export divider_default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
"use client";
;
;
;
;
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
    const [localFilters, setLocalFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(filters);
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // Sync local state when external filters change (e.g. Reset all)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalFilters(filters);
    }, [
        filters
    ]);
    // Initialize arrays if undefined
    const gorivo = localFilters.gorivo || [];
    const frekvencija = localFilters.frekvencija || [];
    const faza = localFilters.faza || [];
    const emisija = localFilters.emisija || [];
    const SLIDER_MIN = 1;
    const SLIDER_MAX = 3000;
    const currentMin = localFilters.minSnaga ?? SLIDER_MIN;
    const currentMax = localFilters.maxSnaga ?? SLIDER_MAX;
    const sliderRange = SLIDER_MAX - SLIDER_MIN;
    const startPercent = (currentMin - SLIDER_MIN) / sliderRange * 100;
    const endPercent = (currentMax - SLIDER_MIN) / sliderRange * 100;
    const sliderStyle = {
        "--range-start": `${startPercent}%`,
        "--range-end": `${endPercent}%`
    };
    const handleSearchChange = (value)=>{
        // Clear previous timeout
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }
        // Update local state immediately for UI feedback
        setLocalFilters({
            ...localFilters,
            search: value
        });
        // Debounce the actual filter change to parent by 500ms
        searchTimeoutRef.current = setTimeout(()=>{
            const newFilters = {
                ...localFilters,
                search: value
            };
            onFiltersChange(newFilters);
        }, 500);
    };
    const handleCategoryChange = (value)=>{
        const newFilters = {
            ...localFilters,
            category: value === "all" ? undefined : value
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Power Range (kW)"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-600 font-semibold block mb-1",
                                                children: "Min"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                max: "3000",
                                                value: String(localFilters.minSnaga || 1),
                                                onChange: (e)=>handleSnagaChange([
                                                        Number(e.target.value),
                                                        localFilters.maxSnaga || 3000
                                                    ]),
                                                size: "sm",
                                                variant: "bordered",
                                                classNames: {
                                                    input: "text-sm font-semibold bg-transparent text-[#da0018]",
                                                    inputWrapper: "border-gray-700 hover:border-[#da0018] bg-transparent hover:bg-gray-200"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-600 font-semibold block mb-1",
                                                children: "Max"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                max: "3000",
                                                value: String(localFilters.maxSnaga || 3000),
                                                onChange: (e)=>handleSnagaChange([
                                                        localFilters.minSnaga || 1,
                                                        Number(e.target.value)
                                                    ]),
                                                size: "sm",
                                                variant: "bordered",
                                                classNames: {
                                                    input: "text-sm font-semibold bg-transparent text-[#da0018]",
                                                    inputWrapper: "border-gray-700 hover:border-[#da0018] bg-transparent hover:bg-gray-200"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl p-2 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__["Slider"], {
                                        step: 50,
                                        minValue: 1,
                                        maxValue: 3000,
                                        value: [
                                            localFilters.minSnaga || 1,
                                            localFilters.maxSnaga || 3000
                                        ],
                                        onChange: handleSnagaChange,
                                        className: "w-full custom-power-slider",
                                        style: sliderStyle,
                                        size: "md",
                                        color: "primary",
                                        classNames: {
                                            thumb: "bg-[#da0018] rounded-full border-2 border-white shadow-md hover:bg-[#ff3344] transition-colors cursor-grab active:cursor-grabbing",
                                            trackWrapper: "h-2 cursor-grab",
                                            track: "bg-gray-200 rounded-full h-2",
                                            filler: "bg-transparent h-2"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex justify-between text-xs text-gray-600 font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    localFilters.minSnaga || 1,
                                                    " kW"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    localFilters.maxSnaga || 3000,
                                                    " kW"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Fuel Type"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: gorivoOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: gorivo.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("gorivo", option.key, e.target.checked),
                                        className: "w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Frequency"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: frekvencijaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: frekvencija.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("frekvencija", option.key, e.target.checked),
                                        className: "w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Phase"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: fazaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: faza.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("faza", option.key, e.target.checked),
                                        className: "w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Emission"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: emisijaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: emisija.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("emisija", option.key, e.target.checked),
                                        className: "w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    size: "sm",
                    variant: "flat",
                    onClick: clearFilters,
                    className: "bg-gray-200 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg",
                    startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 280,
                        columnNumber: 25
                    }, void 0),
                    children: "Reset Filters"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
        lineNumber: 123,
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
// Helper function to normalize strings for comparison (remove spaces, hyphens, convert to lowercase)
function normalizeString(str) {
    return str.toLowerCase().replace(/[\s\-]/g, '');
}
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
    // Normalize selected values for comparison
    const normalizedSelectedValues = selectedValues.map(normalizeString);
    // Check if any of the selected values match the product's attribute options
    return selectedValues.some((value, index)=>{
        const normalizedValue = normalizedSelectedValues[index];
        return attribute.options.some((opt)=>normalizeString(opt) === normalizedValue || normalizeString(opt).includes(normalizeString(value)));
    });
}
// Helper function to extract numeric value from attribute
function getAttributeNumberValue(product, attributeName) {
    // Map our internal attribute names to WooCommerce attribute names
    const attributeNameMap = {
        'gorivo': 'fuel',
        'frekvencija': 'frequency',
        'faza': 'Phase',
        'emisija': 'Emission',
        'snaga': 'ESP KW'
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
    const filtered = products.filter((product)=>{
        // Exclude products from certain categories
        if (filters.excludedCategories && filters.excludedCategories.length > 0) {
            const hasExcludedCategory = product.categories.some((cat)=>filters.excludedCategories.includes(cat.id));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                setLoading(true);
                const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$woocommerce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProducts"])();
                setAllProducts(products);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch products");
                setAllProducts([]);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // Apply client-side attribute filtering
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const filtered = filterProductsByAttributes(allProducts, filters);
        // Sort by ESP KW in ascending order
        return filtered.sort((a, b)=>{
            const aValue = getAttributeNumberValue(a, "snaga") || 0;
            const bValue = getAttributeNumberValue(b, "snaga") || 0;
            return aValue - bValue;
        });
    }, [
        allProducts,
        filters
    ]);
    return {
        products: filteredProducts,
        loading,
        error,
        refetch: ()=>{}
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
"[project]/woocommerce-products/src/lib/filterQuery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filtersToQueryString",
    ()=>filtersToQueryString,
    "filtersToSearchParams",
    ()=>filtersToSearchParams,
    "searchParamsToFilters",
    ()=>searchParamsToFilters
]);
function filtersToSearchParams(filters) {
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
function filtersToQueryString(filters) {
    return filtersToSearchParams(filters).toString();
}
function searchParamsToFilters(searchParams) {
    const parsedFilters = {};
    const excluded = searchParams.get("excluded");
    if (excluded) parsedFilters.excludedCategories = excluded.split(",").map((id)=>parseInt(id, 10)).filter((n)=>!Number.isNaN(n));
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
    if (orderby) parsedFilters.orderby = orderby;
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
}),
"[project]/woocommerce-products/src/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-ssr] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$filterQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/lib/filterQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
"use client";
;
;
;
;
;
function ProductCard({ product, filters }) {
    const linkFilters = filters ? {
        ...filters,
        excludedCategories: undefined
    } : undefined;
    const qs = linkFilters ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$filterQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtersToQueryString"])(linkFilters) : "";
    const href = qs ? `/products/${product.id}?${qs}` : `/products/${product.id}`;
    // Function to get engine image based on product name, categories, and attributes
    const getEngineImage = (product)=>{
        const name = product.name.toLowerCase();
        // Check product name first
        if (name.includes('cummins')) return {
            src: '/motori/cummins.avif',
            isSmaller: true
        };
        if (name.includes('hyundai')) return {
            src: '/motori/hyundai.avif',
            isSmaller: false
        };
        if (name.includes('iveco')) return {
            src: '/motori/iveco.avif',
            isSmaller: false
        };
        if (name.includes('kohler')) return {
            src: '/motori/kohler.avif',
            isSmaller: false
        };
        if (name.includes('mitsubishi')) return {
            src: '/motori/mitsubishi.avif',
            isSmaller: false
        };
        if (name.includes('mtu')) return {
            src: '/motori/mtu.avif',
            isSmaller: false
        };
        if (name.includes('perkins')) return {
            src: '/motori/perkins.png',
            isSmaller: false
        };
        if (name.includes('scania')) return {
            src: '/motori/scania.png',
            isSmaller: false
        };
        if (name.includes('volvo')) return {
            src: '/motori/volvo.avif',
            isSmaller: false
        };
        if (name.includes('yto')) return {
            src: '/motori/yto.avif',
            isSmaller: false
        };
        if (name.includes('baudouin')) return {
            src: '/motori/baudouin.png',
            isSmaller: false
        };
        // Check categories
        const categoryNames = product.categories.map((cat)=>cat.name.toLowerCase());
        if (categoryNames.includes('cummins')) return {
            src: '/motori/cummins.avif',
            isSmaller: true
        };
        if (categoryNames.includes('hyundai')) return {
            src: '/motori/hyundai.avif',
            isSmaller: false
        };
        if (categoryNames.includes('iveco')) return {
            src: '/motori/iveco.avif',
            isSmaller: false
        };
        if (categoryNames.includes('kohler')) return {
            src: '/motori/kohler.avif',
            isSmaller: false
        };
        if (categoryNames.includes('mitsubishi')) return {
            src: '/motori/mitsubishi.avif',
            isSmaller: false
        };
        if (categoryNames.includes('mtu')) return {
            src: '/motori/mtu.avif',
            isSmaller: false
        };
        if (categoryNames.includes('perkins')) return {
            src: '/motori/perkins.png',
            isSmaller: false
        };
        if (categoryNames.includes('scania')) return {
            src: '/motori/scania.png',
            isSmaller: false
        };
        if (categoryNames.includes('volvo')) return {
            src: '/motori/volvo.avif',
            isSmaller: false
        };
        if (categoryNames.includes('yto')) return {
            src: '/motori/yto.avif',
            isSmaller: false
        };
        if (categoryNames.includes('baudouin')) return {
            src: '/motori/baudouin.png',
            isSmaller: false
        };
        // Check attributes
        const attributeOptions = product.attributes.flatMap((attr)=>attr.options.map((opt)=>opt.toLowerCase()));
        if (attributeOptions.includes('cummins')) return {
            src: '/motori/cummins.avif',
            isSmaller: true
        };
        if (attributeOptions.includes('hyundai')) return {
            src: '/motori/hyundai.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('iveco')) return {
            src: '/motori/iveco.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('kohler')) return {
            src: '/motori/kohler.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('mitsubishi')) return {
            src: '/motori/mitsubishi.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('mtu')) return {
            src: '/motori/mtu.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('perkins')) return {
            src: '/motori/perkins.png',
            isSmaller: false
        };
        if (attributeOptions.includes('scania')) return {
            src: '/motori/scania.png',
            isSmaller: false
        };
        if (attributeOptions.includes('volvo')) return {
            src: '/motori/volvo.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('yto')) return {
            src: '/motori/yto.avif',
            isSmaller: false
        };
        if (attributeOptions.includes('baudouin')) return {
            src: '/motori/baudouin.png',
            isSmaller: false
        };
        return null;
    };
    // Function to bold only the last number in the title
    const boldLastNumber = (text)=>{
        const parts = text.split(/(\d+)/);
        const lastNumberIndex = parts.map((part, index)=>/\d+/.test(part) ? index : -1).filter((i)=>i !== -1).pop();
        if (lastNumberIndex !== undefined) {
            return parts.map((part, index)=>{
                if (index === lastNumberIndex && /\d+/.test(part)) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#da0018]",
                        children: part
                    }, index, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 76,
                        columnNumber: 18
                    }, this);
                }
                return part;
            });
        }
        return text;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
        className: "w-full h-full group hover:shadow-2xl transition-all duration-300 border-0 rounded-xl bg-white overflow-hidden min-h-[160px] relative",
        children: [
            getEngineImage(product) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-2 right-2 flex items-center justify-center overflow-hidden ${getEngineImage(product).isSmaller ? 'w-8 h-8' : 'w-12 h-12'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: getEngineImage(product).src,
                    alt: `${product.name} engine`,
                    className: "w-full h-full object-contain opacity-80"
                }, void 0, false, {
                    fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col justify-center items-center h-full gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "product-name text-gray-900 text-2xl text-center",
                        children: boldLastNumber(product.name)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: "inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            color: "primary",
                            variant: "solid",
                            className: "bg-[#fff] text-black border-2 border-[#333]font-semibold hover:bg-[#333] hover:text-white rounded-full px-6 py-2 h-10 text-base flex items-center justify-center",
                            size: "sm",
                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, void 0),
                            children: "Configure"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    product.average_rating && parseFloat(product.average_rating) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: i < Math.round(parseFloat(product.average_rating)) ? "text-yellow-400 text-sm" : "text-gray-300 text-sm",
                                        children: "★"
                                    }, i, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600 font-medium",
                                children: [
                                    "(",
                                    product.rating_count,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    product.short_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 line-clamp-4",
                        dangerouslySetInnerHTML: {
                            __html: product.short_description
                        }
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
        lineNumber: 85,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
"use client";
;
;
;
function ProductGrid({ products, loading, error, filters }) {
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-32 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#777] border border-[#333] rounded-lg p-8 max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#da0018] text-xl font-bold mb-3",
                        children: "Error Loading Products"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                        size: "lg",
                        color: "danger"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-400",
                        children: "Loading products..."
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full w-full min-h-[70vh] text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg p-8 max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold text-gray-600 mb-2",
                        children: "No Products Found"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-4",
                        children: "Try adjusting your filters to see more products."
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            color: "danger",
                            variant: "flat",
                            onClick: ()=>window.location.reload(),
                            className: "bg-gray-300 hover:bg-gray-400 rounded-[50px] px-6 py-4 w-fit",
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 mt-2 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "Showing"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-sm text-gray-400",
                            children: products.length
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "products"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                            size: "sm",
                            color: "danger",
                            className: "ml-2"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pr-8",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        product: product,
                        filters: filters
                    }, product.id, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/woocommerce-products/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsOverviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/components/ProductFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/hooks/useProducts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/components/ProductGrid.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ProductsOverviewPage() {
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        excludedCategories: [
            229,
            230,
            231,
            232,
            233,
            1178,
            1180,
            1182,
            1184,
            1186,
            1192,
            1234,
            1196,
            1194,
            1224,
            1198,
            1200,
            1188,
            1190,
            1202,
            1204,
            1206,
            1210,
            1212,
            1208,
            1232,
            1216,
            1218,
            1220,
            1222,
            1214,
            1230,
            1228,
            1226
        ]
    });
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const { products, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProducts"])(filters);
    const handleResetFilters = ()=>{
        const resetFilters = {
            excludedCategories: [
                229,
                230,
                231,
                232,
                233,
                1178,
                1180,
                1182,
                1184,
                1186,
                1192,
                1234,
                1196,
                1194,
                1224,
                1198,
                1200,
                1188,
                1190,
                1202,
                1204,
                1206,
                1210,
                1212,
                1208,
                1232,
                1216,
                1218,
                1220,
                1222,
                1214,
                1230,
                1228,
                1226
            ]
        };
        setFilters(resetFilters);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-8xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-full lg:w-80 lg:flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 h-screen",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-section h-full overflow-y-auto bg-white/90 px-6 py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "164",
                                            height: "40",
                                            viewBox: "0 57 164 34",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                id: "logo",
                                                clipPath: "url(#clip0_869_16)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M55.0879 79.1558H59.7574L61.857 62.1001L68.0649 62.1469C70.6323 62.1001 71.0064 63.7362 70.9597 64.8105L69.2784 78.9217H73.8076L75.6759 62.9428C75.9073 60.8853 74.5067 57.9433 71.6144 57.894H57.6085L55.0879 79.1583V79.1558Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_2",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M138.23 78.9656L142.803 79.0124L144.204 65.8818L144.578 62.7032C144.812 60.6458 143.411 57.7013 140.517 57.657H126.511L123.99 78.9656H128.66L130.762 61.863L136.97 61.9098C139.537 61.863 139.909 63.403 139.862 64.4329L138.976 72.33L138.228 78.9656H138.23Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_3",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M0 61.7243H15.7782L16.2459 57.7992H1.72797L0 61.7243Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_4",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M7.98172 78.7771L10.0838 61.5316H6.1159L4.06055 78.7771H7.98172Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_5",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M121.332 78.78L123.853 57.7992H119.37L116.85 78.78H121.332Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_6",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M33.4736 57.894H21.8012C19.1403 57.894 18.3009 59.7642 18.0671 61.4939L16.0117 78.8774L30.2515 78.971L30.6724 74.999H21.1021L21.8479 70.0932H30.345L30.8127 66.0277H22.0375L22.5027 62.0089L31.2804 61.8685L33.4761 57.894H33.4736Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_7",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M113.908 78.9177H103.125C100.51 78.9177 100.139 77.0007 100.323 75.2709L102.376 57.8875L106.905 57.8407L104.85 74.756L113.254 74.7092L113.906 78.9152L113.908 78.9177Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_8",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M36.089 57.9354H41.0834L40.1038 66.0198H48.7855L49.7651 57.9354H54.6685L52.1454 78.9163H47.2446L48.2735 70.1322H39.4958L38.4225 78.9163H33.6152L36.089 57.9354Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_37",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M146.354 67.9397L158.026 57.894H164L152.052 68.0358L161.433 79.2494H155.643L146.354 67.9397Z",
                                                        fill: "#DA0018"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_38",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M89.0395 61.7061C89.3201 61.716 89.5933 61.7505 89.8641 61.8072C91.368 62.1201 92.6259 63.118 93.3619 64.5865C94.1003 66.0501 94.2529 67.8636 93.7926 69.6229C93.3323 71.3847 92.2936 72.9469 90.9053 73.9694C89.517 74.992 87.8924 75.3911 86.3884 75.0782C84.8845 74.7653 83.6266 73.7649 82.8906 72.3013C82.1547 70.8352 81.9996 69.0242 82.4599 67.2624C83.3239 63.9632 86.1251 61.5953 89.0395 61.7086V61.7061ZM89.9133 57.9165C86.066 57.8032 82.1694 59.7128 79.6932 62.9209C75.8631 67.8858 76.5326 74.3957 81.1897 77.4633C85.8444 80.531 92.7243 78.9935 96.552 74.0285C98.3907 71.6434 99.267 68.7753 98.9864 66.0477C98.7058 63.3201 97.2929 60.962 95.0578 59.4885C93.5785 58.5128 91.8037 57.9707 89.9158 57.9165H89.9133Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_39",
                                                        d: "M65.1211 89.1065H66.2903L67.4718 80.7092H66.3026L65.1211 89.1065Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_40",
                                                        d: "M71.4971 82.6583H70.8251C70.3402 82.6583 69.8799 82.9392 69.6337 83.4024L69.6559 82.7175H68.6861L67.7852 89.1041H68.8978L69.6214 84.0308C69.7248 83.6883 69.998 83.5232 70.3648 83.5232H70.9802C71.3346 83.5232 71.5119 83.6883 71.5119 83.9963C71.5119 84.0529 71.4996 84.1047 71.4996 84.1614L70.803 89.1041H71.9254L72.6343 84.0184C72.6565 83.9223 72.6565 83.8287 72.6565 83.7449C72.6565 83.06 72.2577 82.6583 71.4996 82.6583H71.4971Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_41",
                                                        d: "M74.5567 89.1633H75.8342C76.6736 89.1633 77.3111 88.631 77.4268 87.8154L77.5572 86.8791C77.5696 86.7757 77.5696 86.6796 77.5696 86.5982C77.5696 86.0636 77.2889 85.7827 76.7302 85.6274L75.2188 85.1765C74.9948 85.1198 74.889 84.9646 74.889 84.7527C74.889 84.7256 74.9013 84.6911 74.9013 84.6566L74.9751 84.1589C75.0219 83.7326 75.2681 83.5207 75.6717 83.5207H76.3216C76.676 83.5207 76.841 83.6858 76.841 84.0061C76.841 84.0529 76.841 84.1022 76.8286 84.1589L76.745 84.7626H77.8575L77.9536 84.016C77.9659 83.9347 77.9757 83.8509 77.9757 83.7819C77.9757 83.1043 77.5129 82.6583 76.7573 82.6583H75.4847C74.6576 82.6583 74.0078 83.2004 73.8995 84.0184L73.7813 84.9203C73.769 84.9893 73.7592 85.0484 73.7592 85.1198C73.7592 85.6176 74.0324 85.9822 74.4779 86.1128L76.1345 86.5982C76.3462 86.6549 76.4373 86.7978 76.4373 86.9752C76.4373 86.9974 76.4373 87.0319 76.425 87.059L76.3314 87.6701C76.2699 88.0963 76.0459 88.3082 75.6471 88.3082H74.9973C74.6428 88.3082 74.4631 88.1432 74.4631 87.8228C74.4631 87.776 74.4631 87.7292 74.4754 87.6701L74.5591 87.059H73.4712L73.3678 87.813C73.3555 87.8968 73.3555 87.9658 73.3555 88.0397C73.3555 88.7247 73.8133 89.1608 74.5591 89.1608L74.5567 89.1633Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_42",
                                                        d: "M82.2315 84.1614L81.7343 87.6725C81.6777 88.0988 81.4389 88.3107 81.0377 88.3107H80.4223C80.058 88.3107 79.8193 88.1333 79.8193 87.7908V87.7686L80.3411 84.1022C80.4223 83.7104 80.7054 83.5207 81.0943 83.5207H81.7097C82.0642 83.5207 82.2414 83.6858 82.2414 83.9938C82.2414 84.0505 82.2291 84.1022 82.2291 84.1589L82.2315 84.1614ZM82.2315 82.6608H81.5595C81.0623 82.6608 80.602 82.9565 80.378 83.4419L80.3903 82.7175H79.4205L78.2734 90.8191H79.3959L79.7159 88.5399C79.8463 88.939 80.1885 89.1633 80.634 89.1633H81.306C82.1602 89.1633 82.714 88.6655 82.8444 87.8155L83.3638 84.0184C83.386 83.9223 83.386 83.8287 83.386 83.7449C83.386 83.06 82.9872 82.6583 82.2291 82.6583L82.2315 82.6608Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_43",
                                                        d: "M84.0117 89.108H85.1342L86.0351 82.7213H84.9126L84.0117 89.108ZM85.0431 81.8121H86.1655L86.3034 80.7329H85.1834L85.0406 81.8121H85.0431Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_44",
                                                        d: "M89.6681 82.7175C89.0675 82.7175 88.6072 83.0477 88.3708 83.5578L88.393 82.7175H87.4478L86.5469 89.1042H87.6595L88.3093 84.5039C88.3708 84.1048 88.6638 83.8534 89.1142 83.8534H89.9191L90.0841 82.7175H89.6681Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_45",
                                                        d: "M91.9724 84.1589C92.029 83.7326 92.2678 83.5207 92.6813 83.5207H93.3188C93.6733 83.5207 93.853 83.6858 93.853 83.9938C93.853 84.0505 93.853 84.1022 93.8382 84.1589L93.7004 85.1741H91.8321L91.9749 84.1589H91.9724ZM93.7792 82.6583H92.4672C91.6278 82.6583 90.9903 83.2004 90.8721 84.0184L90.3404 87.8154C90.3281 87.8894 90.3281 87.9682 90.3281 88.0421C90.3281 88.7271 90.7909 89.1633 91.5466 89.1633H92.8536C93.6955 89.1633 94.3305 88.631 94.4487 87.8154L94.5791 86.8791H93.4567L93.3385 87.6725C93.2918 88.0988 93.0579 88.3107 92.6419 88.3107H92.0044C91.65 88.3107 91.4629 88.1456 91.4629 87.8253C91.4629 87.7785 91.4629 87.7317 91.4752 87.6725L91.714 85.9946H94.7145L94.9828 84.0184C94.9976 83.9371 94.9976 83.8657 94.9976 83.7844C94.9976 83.1068 94.5348 82.6608 93.7792 82.6608V82.6583Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_46",
                                                        d: "M98.0292 88.3128H97.4015C97.047 88.3128 96.86 88.1477 96.86 87.8274C96.86 87.7806 96.8599 87.7338 96.8723 87.6747L97.3695 84.1635C97.4261 83.7372 97.6649 83.5253 98.0784 83.5253H98.7061C99.0605 83.5253 99.287 83.6904 99.287 84.023C99.287 84.0698 99.2747 84.1191 99.2747 84.1659L98.7775 87.6771C98.7159 88.1034 98.4353 88.3153 98.0316 88.3153L98.0292 88.3128ZM99.767 80.5907L99.3855 83.3011C99.2698 82.897 98.9276 82.6629 98.4895 82.6629H97.8052C96.9559 82.6629 96.3849 83.1705 96.2667 84.023L95.735 87.82C95.7227 87.9161 95.7129 87.9974 95.7129 88.0935C95.7129 88.7785 96.1289 89.1678 96.8821 89.1678H97.5664C98.0636 89.1678 98.5116 88.8869 98.7356 88.3794V89.1112H99.6931L100.889 80.5956H99.767V80.5907Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_47",
                                                        d: "M107.237 84.163L106.74 87.6742C106.684 88.1005 106.445 88.3124 106.044 88.3124H105.428C105.064 88.3124 104.825 88.1349 104.825 87.7925V87.7801L105.332 84.1507C105.406 83.7343 105.689 83.5224 106.1 83.5224H106.716C107.07 83.5224 107.247 83.6875 107.247 83.9955C107.247 84.0521 107.235 84.1039 107.235 84.1605L107.237 84.163ZM107.237 82.6624H106.565C106.115 82.6624 105.704 82.8965 105.453 83.3129L105.829 80.6025H104.722L103.525 89.1082H104.495L104.685 88.4109C104.781 88.8963 105.148 89.1649 105.642 89.1649H106.314C107.168 89.1649 107.722 88.6672 107.853 87.8171L108.372 84.0201C108.394 83.924 108.394 83.8304 108.394 83.7466C108.394 83.0616 107.995 82.66 107.237 82.66V82.6624Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_48",
                                                        d: "M112.791 82.7175L111.075 87.4607H111.041L110.591 82.7175H109.434L110.236 89.0943L110.071 89.5058C109.882 89.9789 109.695 90.144 109.266 90.144H108.639L108.535 90.999H109.505C110.344 90.999 110.851 90.5826 111.228 89.6487L113.958 82.72H112.789L112.791 82.7175Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_49",
                                                        d: "M118.336 84.1589C118.392 83.7326 118.631 83.5207 119.045 83.5207H119.682C120.037 83.5207 120.216 83.6858 120.216 83.9938C120.216 84.0505 120.216 84.1022 120.202 84.1589L120.064 85.1741H118.195L118.338 84.1589H118.336ZM120.142 82.6583H118.83C117.991 82.6583 117.354 83.2004 117.235 84.0184L116.704 87.8154C116.691 87.8894 116.691 87.9682 116.691 88.0421C116.691 88.7271 117.154 89.1633 117.91 89.1633H119.217C120.059 89.1633 120.694 88.631 120.812 87.8154L120.942 86.8791H119.82L119.702 87.6725C119.655 88.0988 119.421 88.3107 119.005 88.3107H118.368C118.013 88.3107 117.826 88.1456 117.826 87.8253C117.826 87.7785 117.826 87.7317 117.838 87.6725L118.077 85.9946H121.078L121.346 84.0184C121.361 83.9371 121.361 83.8657 121.361 83.7844C121.361 83.1068 120.898 82.6608 120.142 82.6608V82.6583Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_50",
                                                        d: "M126.981 82.7175H125.768L124.313 85.4156L123.616 82.7175H122.398L123.39 85.9946L121.502 89.1042H122.718L124.16 86.4899L124.867 89.1042H126.085L125.066 85.97L126.981 82.7175Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_52",
                                                        d: "M134.16 84.1589C134.217 83.7326 134.455 83.5207 134.869 83.5207H135.506C135.861 83.5207 136.04 83.6858 136.04 83.9938C136.04 84.0505 136.04 84.1022 136.026 84.1589L135.888 85.1741H134.02L134.162 84.1589H134.16ZM135.967 82.6583H134.655C133.815 82.6583 133.178 83.2004 133.06 84.0184L132.528 87.8154C132.516 87.8894 132.516 87.9682 132.516 88.0421C132.516 88.7271 132.978 89.1633 133.734 89.1633H135.041C135.883 89.1633 136.518 88.631 136.636 87.8154L136.767 86.8791H135.644L135.526 87.6725C135.479 88.0988 135.245 88.3107 134.829 88.3107H134.192C133.837 88.3107 133.65 88.1456 133.65 87.8253C133.65 87.7785 133.65 87.7317 133.663 87.6725L133.901 85.9946H136.902L137.17 84.0184C137.185 83.9371 137.185 83.8657 137.185 83.7844C137.185 83.1068 136.722 82.6608 135.967 82.6608V82.6583Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_53",
                                                        d: "M137.807 89.1062H138.929L140.125 80.5907H139.003L137.807 89.1062Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_54",
                                                        d: "M140.346 89.1062H141.468L142.664 80.5907H141.542L140.346 89.1062Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_55",
                                                        d: "M144.631 84.1589C144.688 83.7326 144.927 83.5207 145.34 83.5207H145.978C146.332 83.5207 146.512 83.6858 146.512 83.9938C146.512 84.0505 146.512 84.1022 146.497 84.1589L146.359 85.1741H144.491L144.634 84.1589H144.631ZM146.438 82.6583H145.126C144.287 82.6583 143.649 83.2004 143.528 84.0184L142.997 87.8154C142.984 87.8894 142.984 87.9682 142.984 88.0421C142.984 88.7271 143.447 89.1633 144.203 89.1633H145.51C146.352 89.1633 146.987 88.631 147.105 87.8154L147.235 86.8791H146.113L145.992 87.6725C145.946 88.0988 145.712 88.3107 145.296 88.3107H144.658C144.304 88.3107 144.117 88.1456 144.117 87.8253C144.117 87.7785 144.117 87.7317 144.129 87.6725L144.368 85.9946H147.368L147.637 84.0184C147.651 83.9371 147.651 83.8657 147.651 83.7844C147.651 83.1068 147.189 82.6608 146.433 82.6608L146.438 82.6583Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_56",
                                                        d: "M151.99 82.6583H151.315C150.83 82.6583 150.37 82.9392 150.124 83.4024L150.146 82.7175H149.176L148.275 89.1041H149.388L150.112 84.0308C150.215 83.6883 150.488 83.5232 150.853 83.5232H151.468C151.822 83.5232 152 83.6883 152 83.9963C152 84.0529 151.987 84.1047 151.987 84.1614L151.291 89.1041H152.413L153.122 84.0184C153.144 83.9223 153.144 83.8287 153.144 83.7449C153.144 83.06 152.745 82.6583 151.987 82.6583H151.99Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_57",
                                                        d: "M155.132 89.1628H156.429C157.283 89.1628 157.918 88.6306 158.024 87.815L158.201 86.5978H157.079L156.926 87.6721C156.87 88.0983 156.646 88.3102 156.23 88.3102H155.592C155.238 88.3102 155.051 88.1452 155.051 87.8248C155.051 87.778 155.051 87.7312 155.063 87.6721L155.56 84.1609C155.617 83.7346 155.856 83.5326 156.269 83.5326H156.907C157.261 83.5326 157.441 83.6853 157.441 84.0057C157.441 84.0525 157.441 84.1141 157.426 84.1584L157.288 85.1514H158.408L158.561 84.0278C158.573 83.9465 158.588 83.8627 158.588 83.7937C158.588 83.1211 158.115 82.6702 157.357 82.6702H156.045C155.218 82.6702 154.568 83.2122 154.46 84.0303L153.928 87.815C153.916 87.8889 153.916 87.9677 153.916 88.0417C153.916 88.7267 154.379 89.1628 155.134 89.1628H155.132Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        id: "Vector_58",
                                                        d: "M160.951 84.1589C161.008 83.7326 161.246 83.5207 161.66 83.5207H162.297C162.652 83.5207 162.832 83.6858 162.832 83.9938C162.832 84.0505 162.832 84.1022 162.817 84.1589L162.679 85.1741H160.811L160.953 84.1589H160.951ZM162.758 82.6583H161.446C160.606 82.6583 159.969 83.2004 159.851 84.0184L159.319 87.8154C159.307 87.8894 159.307 87.9682 159.307 88.0421C159.307 88.7271 159.769 89.1633 160.525 89.1633H161.832C162.674 89.1633 163.309 88.631 163.427 87.8154L163.558 86.8791H162.435L162.315 87.6725C162.268 88.0988 162.034 88.3107 161.618 88.3107H160.98C160.626 88.3107 160.439 88.1456 160.439 87.8253C160.439 87.7785 160.439 87.7317 160.451 87.6725L160.69 85.9946H163.691L163.959 84.0184C163.974 83.9371 163.974 83.8657 163.974 83.7844C163.974 83.1068 163.511 82.6608 162.755 82.6608L162.758 82.6583Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductFiltersComponent"], {
                                            filters: filters,
                                            onFiltersChange: setFilters,
                                            categories: categories
                                        }, void 0, false, {
                                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 lg:w-4/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductGrid"], {
                            products: products,
                            loading: loading,
                            error: error,
                            filters: filters
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/app/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/woocommerce-products/src/app/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=woocommerce-products_src_de64e211._.js.map