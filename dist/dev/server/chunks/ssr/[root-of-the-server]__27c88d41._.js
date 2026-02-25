module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/woocommerce-products/src/components/ProductFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFiltersComponent",
    ()=>ProductFiltersComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-ssr] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/slider/dist/chunk-O6IB4TCE.mjs [app-ssr] (ecmascript) <export slider_default as Slider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs [app-ssr] (ecmascript) <export divider_default as Divider>");
"use client";
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
    // Initialize arrays if undefined
    const gorivo = localFilters.gorivo || [];
    const frekvencija = localFilters.frekvencija || [];
    const faza = localFilters.faza || [];
    const emisija = localFilters.emisija || [];
    const SLIDER_MIN = 1;
    const SLIDER_MAX = 1000;
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
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-700",
                        children: "Power Range (kW)"
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-600 font-semibold block mb-1",
                                                children: "Min"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                max: "1000",
                                                value: String(localFilters.minSnaga || 1),
                                                onChange: (e)=>handleSnagaChange([
                                                        Number(e.target.value),
                                                        localFilters.maxSnaga || 1000
                                                    ]),
                                                size: "sm",
                                                variant: "bordered",
                                                classNames: {
                                                    input: "text-sm font-semibold bg-transparent text-[#da0018]",
                                                    inputWrapper: "border-gray-700 hover:border-[#da0018] bg-transparent hover:bg-gray-200"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 124,
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
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                max: "1000",
                                                value: String(localFilters.maxSnaga || 1000),
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
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__["Slider"], {
                                        step: 10,
                                        minValue: 1,
                                        maxValue: 1000,
                                        value: [
                                            localFilters.minSnaga || 1,
                                            localFilters.maxSnaga || 1000
                                        ],
                                        onChange: handleSnagaChange,
                                        className: "w-full custom-power-slider",
                                        style: sliderStyle,
                                        size: "md",
                                        color: "primary",
                                        classNames: {
                                            thumb: "bg-[#da0018] rounded-full border-2 border-white shadow-md hover:bg-[#ff3344] transition-colors",
                                            trackWrapper: "h-2",
                                            track: "bg-gray-200 rounded-full h-2",
                                            filler: "bg-transparent h-2"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 158,
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
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    localFilters.maxSnaga || 1000,
                                                    " kW"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 186,
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
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: gorivoOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: gorivo.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("gorivo", option.key, e.target.checked),
                                        className: "w-4 h-4 rounded border-2 border-[#555] text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors bg-[#2a2a2a] hover:bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 206,
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
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: frekvencijaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: frekvencija.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("frekvencija", option.key, e.target.checked),
                                        className: "w-4 h-4 rounded border-2 border-[#555] text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors bg-[#2a2a2a] hover:bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 226,
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
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: fazaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: faza.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("faza", option.key, e.target.checked),
                                        className: "w-4 h-4 rounded border-2 border-[#555] text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors bg-[#2a2a2a] hover:bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 246,
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
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: emisijaOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: emisija.includes(option.key),
                                        onChange: (e)=>handleAttributeChange("emisija", option.key, e.target.checked),
                                        className: "w-4 h-4 rounded border-2 border-[#555] text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors bg-[#2a2a2a] hover:bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700 font-medium group-hover:text-[#da0018]",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.key, true, {
                                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$divider$2f$dist$2f$chunk$2d$44JHHBS2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__divider_default__as__Divider$3e$__["Divider"], {
                className: "bg-gray-500"
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductFilters.tsx",
        lineNumber: 118,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$filterQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/src/lib/filterQuery.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProductCard({ product, filters }) {
    const qs = filters ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$lib$2f$filterQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filtersToQueryString"])(filters) : "";
    const href = qs ? `/products/${product.id}?${qs}` : `/products/${product.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
            isPressable: true,
            className: "w-full h-full group hover:shadow-2xl transition-all duration-300 border-0 rounded-xl bg-white overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "product-name text-gray-900 mb-3 flex-1",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 26,
                        columnNumber: 11
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
                                        lineNumber: 35,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                                lineNumber: 33,
                                columnNumber: 15
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
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this),
                    product.short_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 line-clamp-4",
                        dangerouslySetInnerHTML: {
                            __html: product.short_description
                        }
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/woocommerce-products/src/components/ProductCard.tsx",
        lineNumber: 19,
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
            className: "flex flex-col items-center justify-center py-32 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#fff] rounded-lg p-8 max-w-md border border-[#333]",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        color: "danger",
                        variant: "flat",
                        onClick: ()=>window.location.reload(),
                        children: "Reset Filters"
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
                className: "mb-6 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "Showing"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-sm text-gray-400",
                            children: products.length
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "products"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                            size: "sm",
                            color: "danger",
                            className: "ml-2"
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        product: product,
                        filters: filters
                    }, product.id, false, {
                        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/woocommerce-products/src/components/ProductGrid.tsx",
        lineNumber: 53,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-ssr] (ecmascript) <export button_default as Button>");
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
;
;
function ProductsOverviewPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
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
            className: "max-w-8xl mx-auto px-2 sm:px-2 lg:px-4 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-full lg:w-80 lg:flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-section max-h-[100vh] overflow-y-auto border border-gray-200 bg-white/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6 pb-4 border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-[#da0018]",
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                isIconOnly: true,
                                                size: "sm",
                                                variant: "light",
                                                color: "danger",
                                                onClick: handleResetFilters,
                                                title: "Reset all filters",
                                                children: "↻"
                                            }, void 0, false, {
                                                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                        lineNumber: 52,
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
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 lg:w-4/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductGrid"], {
                            products: products,
                            loading: loading,
                            error: error
                        }, void 0, false, {
                            fileName: "[project]/woocommerce-products/src/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/woocommerce-products/src/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/woocommerce-products/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/woocommerce-products/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/woocommerce-products/src/app/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27c88d41._.js.map