(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardProvider",
    ()=>CardProvider,
    "useCardContext",
    ()=>useCardContext
]);
// src/card-context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs [app-client] (ecmascript)");
"use client";
;
var [CardProvider, useCardContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "CardContext",
    strict: true,
    errorMessage: "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"
});
;
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-3GIHCET7.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCard",
    ()=>useCard
]);
// src/use-card.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$CLS6PP7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-CLS6PP7O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-aria-button/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$A6KBW6T5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/ripple/dist/chunk-A6KBW6T5.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function useCard(originalProps) {
    var _a, _b, _c, _d;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$CLS6PP7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"].variantKeys);
    const { ref, as, children, onClick, onPress, autoFocus, className, classNames, allowTextSelectionOnPress = true, ...otherProps } = props;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const Component = as || (originalProps.isPressable ? "button" : "div");
    const shouldFilterDOMProps = typeof Component === "string";
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const disableRipple = (_d = (_c = originalProps.disableRipple) != null ? _c : globalContext == null ? void 0 : globalContext.disableRipple) != null ? _d : false;
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const { onClear: onClearRipple, onPress: onRipplePressHandler, ripples } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$A6KBW6T5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRipple"])();
    const handlePress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[handlePress]": (e)=>{
            if (disableRipple || disableAnimation) return;
            domRef.current && onRipplePressHandler(e);
        }
    }["useCard.useCallback[handlePress]"], [
        disableRipple,
        disableAnimation,
        domRef,
        onRipplePressHandler
    ]);
    const { buttonProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAriaButton"])({
        onPress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(onPress, handlePress),
        elementType: as,
        isDisabled: !originalProps.isPressable,
        onClick,
        allowTextSelectionOnPress,
        ...otherProps
    }, domRef);
    const { hoverProps, isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !originalProps.isHoverable,
        ...otherProps
    });
    const { isFocusVisible, isFocused, focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus
    });
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCard.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$CLS6PP7O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"])({
                ...variantProps,
                disableAnimation
            })
    }["useCard.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation
    ]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCard.useMemo[context]": ()=>({
                slots,
                classNames,
                disableAnimation,
                isDisabled: originalProps.isDisabled,
                isFooterBlurred: originalProps.isFooterBlurred,
                fullWidth: originalProps.fullWidth
            })
    }["useCard.useMemo[context]"], [
        slots,
        classNames,
        originalProps.isDisabled,
        originalProps.isFooterBlurred,
        disableAnimation,
        originalProps.fullWidth
    ]);
    const getCardProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[getCardProps]": (props2 = {})=>{
            return {
                ref: domRef,
                className: slots.base({
                    class: baseStyles
                }),
                tabIndex: originalProps.isPressable ? 0 : -1,
                "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered),
                "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isPressed),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isDisabled),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(originalProps.isPressable ? {
                    ...buttonProps,
                    ...focusProps,
                    role: "button"
                } : {}, originalProps.isHoverable ? hoverProps : {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                    enabled: shouldFilterDOMProps
                }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props2))
            };
        }
    }["useCard.useCallback[getCardProps]"], [
        domRef,
        slots,
        baseStyles,
        shouldFilterDOMProps,
        originalProps.isPressable,
        originalProps.isHoverable,
        originalProps.isDisabled,
        isHovered,
        isPressed,
        isFocusVisible,
        buttonProps,
        focusProps,
        hoverProps,
        otherProps
    ]);
    const getRippleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCard.useCallback[getRippleProps]": ()=>({
                ripples,
                onClear: onClearRipple
            })
    }["useCard.useCallback[getRippleProps]"], [
        ripples,
        onClearRipple
    ]);
    return {
        context,
        domRef,
        Component,
        classNames,
        children,
        isHovered,
        isPressed,
        disableAnimation,
        isPressable: originalProps.isPressable,
        isHoverable: originalProps.isHoverable,
        disableRipple,
        handlePress,
        isFocusVisible,
        getCardProps,
        getRippleProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card_default",
    ()=>card_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$3GIHCET7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-3GIHCET7.mjs [app-client] (ecmascript)");
// src/card.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/ripple/dist/chunk-MRKSP4U5.mjs [app-client] (ecmascript) <export ripple_default as Ripple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, context, Component, isPressable, disableAnimation, disableRipple, getCardProps, getRippleProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$3GIHCET7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCard"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getCardProps(),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardProvider"], {
                value: context,
                children
            }),
            isPressable && !disableAnimation && !disableRipple && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__["Ripple"], {
                ...getRippleProps()
            })
        ]
    });
});
Card.displayName = "NextUI.Card";
var card_default = Card;
;
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card_body_default",
    ()=>card_body_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
// src/card-body.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var CardBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    const bodyStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.body, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.body) == null ? void 0 : _a.call(slots, {
            class: bodyStyles
        }),
        ...otherProps,
        children
    });
});
CardBody.displayName = "NextUI.CardBody";
var card_body_default = CardBody;
;
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_body_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card_footer_default",
    ()=>card_footer_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
// src/card-footer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var CardFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    const footerStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.footer, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.footer) == null ? void 0 : _a.call(slots, {
            class: footerStyles
        }),
        ...otherProps,
        children
    });
});
CardFooter.displayName = "NextUI.CardFooter";
var card_footer_default = CardFooter;
;
}),
"[project]/node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs [app-client] (ecmascript) <export card_footer_default as CardFooter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardFooter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$JHUBASYZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_footer_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$JHUBASYZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-GIXI35A3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMON_UNITS",
    ()=>COMMON_UNITS,
    "twMergeConfig",
    ()=>twMergeConfig
]);
// src/utils/tw-merge-config.ts
var COMMON_UNITS = [
    "small",
    "medium",
    "large"
];
var twMergeConfig = {
    theme: {
        opacity: [
            "disabled"
        ],
        spacing: [
            "divider"
        ],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS
    },
    classGroups: {
        shadow: [
            {
                shadow: COMMON_UNITS
            }
        ],
        "font-size": [
            {
                text: [
                    "tiny",
                    ...COMMON_UNITS
                ]
            }
        ],
        "bg-image": [
            "bg-stripe-gradient-default",
            "bg-stripe-gradient-primary",
            "bg-stripe-gradient-secondary",
            "bg-stripe-gradient-success",
            "bg-stripe-gradient-warning",
            "bg-stripe-gradient-danger"
        ]
    }
};
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tv",
    ()=>tv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GIXI35A3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GIXI35A3.mjs [app-client] (ecmascript)");
// src/utils/tv.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)");
;
;
var tv = (options, config)=>{
    var _a, _b, _c;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])(options, {
        ...config,
        twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
        twMergeConfig: {
            ...config == null ? void 0 : config.twMergeConfig,
            theme: {
                ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GIXI35A3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMergeConfig"].theme
            },
            classGroups: {
                ...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GIXI35A3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMergeConfig"].classGroups
            }
        }
    });
};
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absoluteFullClasses",
    ()=>absoluteFullClasses,
    "baseStyles",
    ()=>baseStyles,
    "collapseAdjacentVariantBorders",
    ()=>collapseAdjacentVariantBorders,
    "dataFocusVisibleClasses",
    ()=>dataFocusVisibleClasses,
    "focusVisibleClasses",
    ()=>focusVisibleClasses,
    "groupDataFocusVisibleClasses",
    ()=>groupDataFocusVisibleClasses,
    "hiddenInputClasses",
    ()=>hiddenInputClasses,
    "ringClasses",
    ()=>ringClasses,
    "translateCenterClasses",
    ()=>translateCenterClasses
]);
// src/utils/classes.ts
var baseStyles = (prefix)=>({
        color: `hsl(var(--${prefix}-foreground))`,
        backgroundColor: `hsl(var(--${prefix}-background))`
    });
var focusVisibleClasses = [
    "focus-visible:z-10",
    "focus-visible:outline-2",
    "focus-visible:outline-focus",
    "focus-visible:outline-offset-2"
];
var dataFocusVisibleClasses = [
    "outline-none",
    "data-[focus-visible=true]:z-10",
    "data-[focus-visible=true]:outline-2",
    "data-[focus-visible=true]:outline-focus",
    "data-[focus-visible=true]:outline-offset-2"
];
var groupDataFocusVisibleClasses = [
    "outline-none",
    "group-data-[focus-visible=true]:z-10",
    "group-data-[focus-visible=true]:ring-2",
    "group-data-[focus-visible=true]:ring-focus",
    "group-data-[focus-visible=true]:ring-offset-2",
    "group-data-[focus-visible=true]:ring-offset-background"
];
var ringClasses = [
    "outline-none",
    "ring-2",
    "ring-focus",
    "ring-offset-2",
    "ring-offset-background"
];
var translateCenterClasses = [
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2"
];
var absoluteFullClasses = [
    "absolute",
    "inset-0"
];
var collapseAdjacentVariantBorders = {
    default: [
        "[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ],
    primary: [
        "[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ],
    secondary: [
        "[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ],
    success: [
        "[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ],
    warning: [
        "[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ],
    danger: [
        "[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]"
    ]
};
var hiddenInputClasses = [
    "[--cursor-hit-x:8px]",
    "font-inherit",
    "text-[100%]",
    "leading-[1.15]",
    "m-0",
    "p-0",
    "overflow-visible",
    "box-border",
    "absolute",
    "top-0",
    "start-[calc(var(--cursor-hit-x)*-1)]",
    "w-[calc(100%+var(--cursor-hit-x)*2)]",
    "h-full",
    "opacity-[0.0001]",
    "z-[1]",
    "cursor-pointer",
    "disabled:cursor-default"
];
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-CLS6PP7O.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "card",
    ()=>card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)");
;
;
// src/components/card.ts
var card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex",
            "flex-col",
            "relative",
            "overflow-hidden",
            "h-auto",
            "outline-none",
            "text-foreground",
            "box-border",
            "bg-content1",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        header: [
            "flex",
            "p-3",
            "z-10",
            "w-full",
            "justify-start",
            "items-center",
            "shrink-0",
            "overflow-inherit",
            "color-inherit",
            "subpixel-antialiased"
        ],
        body: [
            "relative",
            "flex",
            "flex-1",
            "w-full",
            "p-3",
            "flex-auto",
            "flex-col",
            "place-content-inherit",
            "align-items-inherit",
            "h-auto",
            "break-words",
            "text-left",
            "overflow-y-auto",
            "subpixel-antialiased"
        ],
        footer: [
            "p-3",
            "h-auto",
            "flex",
            "w-full",
            "items-center",
            "overflow-hidden",
            "color-inherit",
            "subpixel-antialiased"
        ]
    },
    variants: {
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        },
        radius: {
            none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none"
            },
            sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small"
            },
            md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium"
            },
            lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            }
        },
        isHoverable: {
            true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"
            }
        },
        isPressable: {
            true: {
                base: "cursor-pointer"
            }
        },
        isBlurred: {
            true: {
                base: [
                    "bg-background/80",
                    "dark:bg-background/20",
                    "backdrop-blur-md",
                    "backdrop-saturate-150"
                ]
            }
        },
        isFooterBlurred: {
            true: {
                footer: [
                    "bg-background/10",
                    "backdrop-blur",
                    "backdrop-saturate-150"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled cursor-not-allowed"
            }
        },
        disableAnimation: {
            true: "",
            false: {
                base: "transition-transform-background motion-reduce:transition-none"
            }
        }
    },
    compoundVariants: [
        {
            isPressable: true,
            class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent"
        }
    ],
    defaultVariants: {
        radius: "lg",
        shadow: "md",
        fullWidth: false,
        isHoverable: false,
        isPressable: false,
        isDisabled: false,
        isFooterBlurred: false
    }
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-TOQXZATI.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "image",
    ()=>image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/image.ts
var image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        wrapper: "relative shadow-black/5",
        zoomedWrapper: "relative overflow-hidden rounded-inherit",
        img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
        blurredImg: [
            "absolute",
            "z-0",
            "inset-0",
            "w-full",
            "h-full",
            "object-cover",
            "filter",
            "blur-lg",
            "scale-105",
            "saturate-150",
            "opacity-30",
            "translate-y-1"
        ]
    },
    variants: {
        radius: {
            none: {},
            sm: {},
            md: {},
            lg: {},
            full: {}
        },
        shadow: {
            none: {
                wrapper: "shadow-none",
                img: "shadow-none"
            },
            sm: {
                wrapper: "shadow-small",
                img: "shadow-small"
            },
            md: {
                wrapper: "shadow-medium",
                img: "shadow-medium"
            },
            lg: {
                wrapper: "shadow-large",
                img: "shadow-large"
            }
        },
        isZoomed: {
            true: {
                img: [
                    "object-cover",
                    "transform",
                    "hover:scale-125"
                ]
            }
        },
        showSkeleton: {
            true: {
                wrapper: [
                    "group",
                    "relative",
                    "overflow-hidden",
                    "bg-content3 dark:bg-content2"
                ],
                img: "opacity-0"
            }
        },
        disableAnimation: {
            true: {
                img: "transition-none"
            },
            false: {
                img: "transition-transform-opacity motion-reduce:transition-none !duration-300"
            }
        }
    },
    defaultVariants: {
        radius: "lg",
        shadow: "none",
        isZoomed: false,
        isBlurred: false,
        showSkeleton: false
    },
    compoundVariants: [
        {
            showSkeleton: true,
            disableAnimation: false,
            class: {
                wrapper: [
                    "before:opacity-100",
                    "before:absolute",
                    "before:inset-0",
                    "before:-translate-x-full",
                    "before:animate-[shimmer_2s_infinite]",
                    "before:border-t",
                    "before:border-content4/30",
                    "before:bg-gradient-to-r",
                    "before:from-transparent",
                    "before:via-content4",
                    "dark:before:via-default-700/10",
                    "before:to-transparent",
                    "after:opacity-100",
                    "after:absolute",
                    "after:inset-0",
                    "after:-z-10",
                    "after:bg-content3",
                    "dark:after:bg-content2"
                ]
            }
        }
    ],
    compoundSlots: [
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "none",
            class: "rounded-none"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "full",
            class: "rounded-full"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "sm",
            class: "rounded-small"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "md",
            class: "rounded-md"
        },
        {
            slots: [
                "wrapper",
                "img",
                "blurredImg",
                "zoomedWrapper"
            ],
            radius: "lg",
            class: "rounded-large"
        }
    ]
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorVariants",
    ()=>colorVariants
]);
// src/utils/variants.ts
var solid = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-danger text-danger-foreground",
    foreground: "bg-foreground text-background"
};
var shadow = {
    default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
    primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
    success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
    warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
    danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
    foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
    default: "bg-transparent border-default text-foreground",
    primary: "bg-transparent border-primary text-primary",
    secondary: "bg-transparent border-secondary text-secondary",
    success: "bg-transparent border-success text-success",
    warning: "bg-transparent border-warning text-warning",
    danger: "bg-transparent border-danger text-danger",
    foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
    default: "bg-default/40 text-default-700",
    primary: "bg-primary/20 text-primary-600",
    secondary: "bg-secondary/20 text-secondary-600",
    success: "bg-success/20 text-success-700 dark:text-success",
    warning: "bg-warning/20 text-warning-700 dark:text-warning",
    danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
    foreground: "bg-foreground/10 text-foreground"
};
var faded = {
    default: "border-default bg-default-100 text-default-foreground",
    primary: "border-default bg-default-100 text-primary",
    secondary: "border-default bg-default-100 text-secondary",
    success: "border-default bg-default-100 text-success",
    warning: "border-default bg-default-100 text-warning",
    danger: "border-default bg-default-100 text-danger",
    foreground: "border-default bg-default-100 text-foreground"
};
var light = {
    default: "bg-transparent text-default-foreground",
    primary: "bg-transparent text-primary",
    secondary: "bg-transparent text-secondary",
    success: "bg-transparent text-success",
    warning: "bg-transparent text-warning",
    danger: "bg-transparent text-danger",
    foreground: "bg-transparent text-foreground"
};
var ghost = {
    default: "border-default text-default-foreground",
    primary: "border-primary text-primary",
    secondary: "border-secondary text-secondary",
    success: "border-success text-success",
    warning: "border-warning text-warning",
    danger: "border-danger text-danger",
    foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
    solid,
    shadow,
    bordered,
    flat,
    faded,
    light,
    ghost
};
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-GH4RNLJX.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chip",
    ()=>chip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)");
;
;
;
// src/components/chip.ts
var chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "relative",
            "max-w-fit",
            "min-w-min",
            "inline-flex",
            "items-center",
            "justify-between",
            "box-border",
            "whitespace-nowrap"
        ],
        content: "flex-1 text-inherit font-normal",
        dot: [
            "w-2",
            "h-2",
            "ml-1",
            "rounded-full"
        ],
        avatar: "flex-shrink-0",
        closeButton: [
            "z-10",
            "appearance-none",
            "outline-none",
            "select-none",
            "transition-opacity",
            "opacity-70",
            "hover:opacity-100",
            "cursor-pointer",
            "active:opacity-disabled",
            "tap-highlight-transparent"
        ]
    },
    variants: {
        variant: {
            solid: {},
            bordered: {
                base: "border-medium bg-transparent"
            },
            light: {
                base: "bg-transparent"
            },
            flat: {},
            faded: {
                base: "border-medium"
            },
            shadow: {},
            dot: {
                base: "border-medium border-default text-foreground bg-transparent"
            }
        },
        color: {
            default: {
                dot: "bg-default-400"
            },
            primary: {
                dot: "bg-primary"
            },
            secondary: {
                dot: "bg-secondary"
            },
            success: {
                dot: "bg-success"
            },
            warning: {
                dot: "bg-warning"
            },
            danger: {
                dot: "bg-danger"
            }
        },
        size: {
            sm: {
                base: "px-1 h-6 text-tiny",
                content: "px-1",
                closeButton: "text-medium",
                avatar: "w-4 h-4"
            },
            md: {
                base: "px-1 h-7 text-small",
                content: "px-2",
                closeButton: "text-large",
                avatar: "w-5 h-5"
            },
            lg: {
                base: "px-2 h-8 text-medium",
                content: "px-2",
                closeButton: "text-xl",
                avatar: "w-6 h-6"
            }
        },
        radius: {
            none: {
                base: "rounded-none"
            },
            sm: {
                base: "rounded-small"
            },
            md: {
                base: "rounded-medium"
            },
            lg: {
                base: "rounded-large"
            },
            full: {
                base: "rounded-full"
            }
        },
        isOneChar: {
            true: {},
            false: {}
        },
        isCloseable: {
            true: {},
            false: {}
        },
        hasStartContent: {
            true: {}
        },
        hasEndContent: {
            true: {}
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none"
            }
        },
        isCloseButtonFocusVisible: {
            true: {
                closeButton: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ringClasses"],
                    "ring-1",
                    "rounded-full"
                ]
            }
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
        radius: "full",
        isDisabled: false
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.default
            }
        },
        {
            variant: "solid",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary
            }
        },
        {
            variant: "solid",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary
            }
        },
        {
            variant: "solid",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success
            }
        },
        {
            variant: "solid",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning
            }
        },
        {
            variant: "solid",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger
            }
        },
        {
            variant: "shadow",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.default
            }
        },
        {
            variant: "shadow",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.primary
            }
        },
        {
            variant: "shadow",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.secondary
            }
        },
        {
            variant: "shadow",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.success
            }
        },
        {
            variant: "shadow",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.warning
            }
        },
        {
            variant: "shadow",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.danger
            }
        },
        {
            variant: "bordered",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.default
            }
        },
        {
            variant: "bordered",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.primary
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.secondary
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.success
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.warning
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.danger
            }
        },
        {
            variant: "flat",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.default
            }
        },
        {
            variant: "flat",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.primary
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.secondary
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.success
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.warning
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.danger
            }
        },
        {
            variant: "faded",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.default
            }
        },
        {
            variant: "faded",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.primary
            }
        },
        {
            variant: "faded",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.secondary
            }
        },
        {
            variant: "faded",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.success
            }
        },
        {
            variant: "faded",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.warning
            }
        },
        {
            variant: "faded",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.danger
            }
        },
        {
            variant: "light",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.default
            }
        },
        {
            variant: "light",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.primary
            }
        },
        {
            variant: "light",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.secondary
            }
        },
        {
            variant: "light",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.success
            }
        },
        {
            variant: "light",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.warning
            }
        },
        {
            variant: "light",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.danger
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "sm",
            class: {
                base: "w-5 h-5 min-w-5 min-h-5"
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "md",
            class: {
                base: "w-6 h-6 min-w-6 min-h-6"
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "lg",
            class: {
                base: "w-7 h-7 min-w-7 min-h-7"
            }
        },
        {
            isOneChar: true,
            isCloseable: false,
            hasStartContent: false,
            hasEndContent: false,
            class: {
                base: "px-0 justify-center",
                content: "px-0 flex-none"
            }
        },
        {
            isOneChar: true,
            isCloseable: true,
            hasStartContent: false,
            hasEndContent: false,
            class: {
                base: "w-auto"
            }
        },
        {
            isOneChar: true,
            variant: "dot",
            class: {
                base: "w-auto h-7 px-1 items-center",
                content: "px-2"
            }
        },
        {
            hasStartContent: true,
            size: "sm",
            class: {
                content: "pl-0.5"
            }
        },
        {
            hasStartContent: true,
            size: [
                "md",
                "lg"
            ],
            class: {
                content: "pl-1"
            }
        },
        {
            hasEndContent: true,
            size: "sm",
            class: {
                content: "pr-0.5"
            }
        },
        {
            hasEndContent: true,
            size: [
                "md",
                "lg"
            ],
            class: {
                content: "pr-1"
            }
        }
    ]
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-DBPAK7QN.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spinner",
    ()=>spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/spinner.ts
var spinner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "relative inline-flex flex-col gap-2 items-center justify-center",
        wrapper: "relative flex",
        circle1: [
            "absolute",
            "w-full",
            "h-full",
            "rounded-full",
            "animate-spinner-ease-spin",
            "border-2",
            "border-solid",
            "border-t-transparent",
            "border-l-transparent",
            "border-r-transparent"
        ],
        circle2: [
            "absolute",
            "w-full",
            "h-full",
            "rounded-full",
            "opacity-75",
            "animate-spinner-linear-spin",
            "border-2",
            "border-dotted",
            "border-t-transparent",
            "border-l-transparent",
            "border-r-transparent"
        ],
        label: "text-foreground dark:text-foreground-dark font-regular"
    },
    variants: {
        size: {
            sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                label: "text-small"
            },
            md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-medium"
            },
            lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-large"
            }
        },
        color: {
            current: {
                circle1: "border-b-current",
                circle2: "border-b-current"
            },
            white: {
                circle1: "border-b-white",
                circle2: "border-b-white"
            },
            default: {
                circle1: "border-b-default",
                circle2: "border-b-default"
            },
            primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary"
            },
            secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary"
            },
            success: {
                circle1: "border-b-success",
                circle2: "border-b-success"
            },
            warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning"
            },
            danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger"
            }
        },
        labelColor: {
            foreground: {
                label: "text-foreground"
            },
            primary: {
                label: "text-primary"
            },
            secondary: {
                label: "text-secondary"
            },
            success: {
                label: "text-success"
            },
            warning: {
                label: "text-warning"
            },
            danger: {
                label: "text-danger"
            }
        }
    },
    defaultVariants: {
        size: "md",
        color: "primary",
        labelColor: "foreground"
    }
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-PMUB6T6D.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbar",
    ()=>navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)");
;
;
// src/components/navbar.ts
var navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex",
            "z-40",
            "w-full",
            "h-auto",
            "items-center",
            "justify-center",
            "data-[menu-open=true]:border-none"
        ],
        wrapper: [
            "z-40",
            "flex",
            "px-6",
            "gap-4",
            "w-full",
            "flex-row",
            "relative",
            "flex-nowrap",
            "items-center",
            "justify-between",
            "h-[var(--navbar-height)]"
        ],
        toggle: [
            "group",
            "flex",
            "items-center",
            "justify-center",
            "w-6",
            "h-full",
            "outline-none",
            "rounded-small",
            "tap-highlight-transparent",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        srOnly: [
            "sr-only"
        ],
        toggleIcon: [
            "w-full",
            "h-full",
            "pointer-events-none",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "text-inherit",
            "group-data-[pressed=true]:opacity-70",
            "transition-opacity",
            "before:content-['']",
            "before:block",
            "before:h-px",
            "before:w-6",
            "before:bg-current",
            "before:transition-transform",
            "before:duration-150",
            "before:-translate-y-1",
            "before:rotate-0",
            "group-data-[open=true]:before:translate-y-px",
            "group-data-[open=true]:before:rotate-45",
            "after:content-['']",
            "after:block",
            "after:h-px",
            "after:w-6",
            "after:bg-current",
            "after:transition-transform",
            "after:duration-150",
            "after:translate-y-1",
            "after:rotate-0",
            "group-data-[open=true]:after:translate-y-0",
            "group-data-[open=true]:after:-rotate-45"
        ],
        brand: [
            "flex",
            "basis-0",
            "flex-row",
            "flex-grow",
            "flex-nowrap",
            "justify-start",
            "bg-transparent",
            "items-center",
            "no-underline",
            "text-medium",
            "whitespace-nowrap",
            "box-border"
        ],
        content: [
            "flex",
            "gap-4",
            "h-full",
            "flex-row",
            "flex-nowrap",
            "items-center",
            "data-[justify=start]:justify-start",
            "data-[justify=start]:flex-grow",
            "data-[justify=start]:basis-0",
            "data-[justify=center]:justify-center",
            "data-[justify=end]:justify-end",
            "data-[justify=end]:flex-grow",
            "data-[justify=end]:basis-0"
        ],
        item: [
            "text-medium",
            "whitespace-nowrap",
            "box-border",
            "list-none",
            "data-[active=true]:font-semibold"
        ],
        menu: [
            "z-30",
            "px-6",
            "pt-2",
            "fixed",
            "flex",
            "max-w-full",
            "top-[var(--navbar-height)]",
            "inset-x-0",
            "bottom-0",
            "w-screen",
            "flex-col",
            "gap-2",
            "overflow-y-auto"
        ],
        menuItem: [
            "text-large",
            "data-[active=true]:font-semibold"
        ]
    },
    variants: {
        position: {
            static: {
                base: "static"
            },
            sticky: {
                base: "sticky top-0 inset-x-0"
            }
        },
        maxWidth: {
            sm: {
                wrapper: "max-w-[640px]"
            },
            md: {
                wrapper: "max-w-[768px]"
            },
            lg: {
                wrapper: "max-w-[1024px]"
            },
            xl: {
                wrapper: "max-w-[1280px]"
            },
            "2xl": {
                wrapper: "max-w-[1536px]"
            },
            full: {
                wrapper: "max-w-full"
            }
        },
        hideOnScroll: {
            true: {
                base: [
                    "sticky",
                    "top-0",
                    "inset-x-0"
                ]
            }
        },
        isBordered: {
            true: {
                base: [
                    "border-b",
                    "border-divider"
                ]
            }
        },
        isBlurred: {
            false: {
                base: "bg-background",
                menu: "bg-background"
            },
            true: {
                base: [
                    "backdrop-blur-lg",
                    "data-[menu-open=true]:backdrop-blur-xl",
                    "backdrop-saturate-150",
                    "bg-background/70"
                ],
                menu: [
                    "backdrop-blur-xl",
                    "backdrop-saturate-150",
                    "bg-background/70"
                ]
            }
        },
        disableAnimation: {
            true: {
                menu: [
                    "hidden",
                    "h-[calc(100dvh_-_var(--navbar-height))]",
                    "data-[open=true]:flex"
                ]
            }
        }
    },
    defaultVariants: {
        maxWidth: "lg",
        position: "sticky",
        isBlurred: true
    }
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-FIMGFFVI.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "button",
    ()=>button,
    "buttonGroup",
    ()=>buttonGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)");
;
;
;
// src/components/button.ts
var button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: [
        "z-0",
        "group",
        "relative",
        "inline-flex",
        "items-center",
        "justify-center",
        "box-border",
        "appearance-none",
        "outline-none",
        "select-none",
        "whitespace-nowrap",
        "min-w-max",
        "font-normal",
        "subpixel-antialiased",
        "overflow-hidden",
        "tap-highlight-transparent",
        "data-[pressed=true]:scale-[0.97]",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
    ],
    variants: {
        variant: {
            solid: "",
            bordered: "border-medium bg-transparent",
            light: "bg-transparent",
            flat: "",
            faded: "border-medium",
            shadow: "",
            ghost: "border-medium bg-transparent"
        },
        size: {
            sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
            md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
            lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            success: "",
            warning: "",
            danger: ""
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-small",
            md: "rounded-medium",
            lg: "rounded-large",
            full: "rounded-full"
        },
        fullWidth: {
            true: "w-full"
        },
        isDisabled: {
            true: "opacity-disabled pointer-events-none"
        },
        isInGroup: {
            true: "[&:not(:first-child):not(:last-child)]:rounded-none"
        },
        isIconOnly: {
            true: "px-0 !gap-0",
            false: "[&>svg]:max-w-[theme(spacing.8)]"
        },
        disableAnimation: {
            true: "!transition-none data-[pressed=true]:scale-100",
            false: "transition-transform-colors-opacity motion-reduce:transition-none"
        }
    },
    defaultVariants: {
        size: "md",
        variant: "solid",
        color: "default",
        fullWidth: false,
        isDisabled: false,
        isInGroup: false
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.default
        },
        {
            variant: "solid",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary
        },
        {
            variant: "solid",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary
        },
        {
            variant: "solid",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success
        },
        {
            variant: "solid",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning
        },
        {
            variant: "solid",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger
        },
        {
            variant: "shadow",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.default
        },
        {
            variant: "shadow",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.primary
        },
        {
            variant: "shadow",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.secondary
        },
        {
            variant: "shadow",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.success
        },
        {
            variant: "shadow",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.warning
        },
        {
            variant: "shadow",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.danger
        },
        {
            variant: "bordered",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.default
        },
        {
            variant: "bordered",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.primary
        },
        {
            variant: "bordered",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.secondary
        },
        {
            variant: "bordered",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.success
        },
        {
            variant: "bordered",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.warning
        },
        {
            variant: "bordered",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.danger
        },
        {
            variant: "flat",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.default
        },
        {
            variant: "flat",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.primary
        },
        {
            variant: "flat",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.secondary
        },
        {
            variant: "flat",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.success
        },
        {
            variant: "flat",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.warning
        },
        {
            variant: "flat",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.danger
        },
        {
            variant: "faded",
            color: "default",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.default
        },
        {
            variant: "faded",
            color: "primary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.primary
        },
        {
            variant: "faded",
            color: "secondary",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.secondary
        },
        {
            variant: "faded",
            color: "success",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.success
        },
        {
            variant: "faded",
            color: "warning",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.warning
        },
        {
            variant: "faded",
            color: "danger",
            class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.danger
        },
        {
            variant: "light",
            color: "default",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.default,
                "data-[hover=true]:bg-default/40"
            ]
        },
        {
            variant: "light",
            color: "primary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.primary,
                "data-[hover=true]:bg-primary/20"
            ]
        },
        {
            variant: "light",
            color: "secondary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.secondary,
                "data-[hover=true]:bg-secondary/20"
            ]
        },
        {
            variant: "light",
            color: "success",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.success,
                "data-[hover=true]:bg-success/20"
            ]
        },
        {
            variant: "light",
            color: "warning",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.warning,
                "data-[hover=true]:bg-warning/20"
            ]
        },
        {
            variant: "light",
            color: "danger",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.danger,
                "data-[hover=true]:bg-danger/20"
            ]
        },
        {
            variant: "ghost",
            color: "default",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.default,
                "data-[hover=true]:!bg-default"
            ]
        },
        {
            variant: "ghost",
            color: "primary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.primary,
                "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "secondary",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.secondary,
                "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "success",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.success,
                "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "warning",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.warning,
                "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
            ]
        },
        {
            variant: "ghost",
            color: "danger",
            class: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].ghost.danger,
                "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
            ]
        },
        {
            isInGroup: true,
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            size: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        },
        {
            isInGroup: true,
            size: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            size: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        },
        {
            isInGroup: true,
            isRounded: true,
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        },
        {
            isInGroup: true,
            radius: "none",
            class: "rounded-none first:rounded-s-none last:rounded-e-none"
        },
        {
            isInGroup: true,
            radius: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small"
        },
        {
            isInGroup: true,
            radius: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
        },
        {
            isInGroup: true,
            radius: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large"
        },
        {
            isInGroup: true,
            radius: "full",
            class: "rounded-none first:rounded-s-full last:rounded-e-full"
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "default",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].default
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "primary",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].primary
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "secondary",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].secondary
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "success",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].success
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "warning",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].warning
        },
        {
            isInGroup: true,
            variant: [
                "ghost",
                "bordered"
            ],
            color: "danger",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collapseAdjacentVariantBorders"].danger
        },
        {
            isIconOnly: true,
            size: "sm",
            class: "min-w-8 w-8 h-8"
        },
        {
            isIconOnly: true,
            size: "md",
            class: "min-w-10 w-10 h-10"
        },
        {
            isIconOnly: true,
            size: "lg",
            class: "min-w-12 w-12 h-12"
        },
        {
            variant: [
                "solid",
                "faded",
                "flat",
                "bordered",
                "shadow"
            ],
            class: "data-[hover=true]:opacity-hover"
        }
    ]
});
var buttonGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "inline-flex items-center justify-center h-auto",
    variants: {
        fullWidth: {
            true: "w-full"
        }
    },
    defaultVariants: {
        fullWidth: false
    }
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-3ZDIPBHM.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "input",
    ()=>input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH5E4FQB.mjs [app-client] (ecmascript)");
;
;
// src/components/input.ts
var input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "group flex flex-col data-[hidden=true]:hidden",
        label: [
            "absolute",
            "z-10",
            "pointer-events-none",
            "origin-top-left",
            "flex-shrink-0",
            "rtl:origin-top-right",
            "subpixel-antialiased",
            "block",
            "text-small",
            "text-foreground-500"
        ],
        mainWrapper: "h-full",
        inputWrapper: "relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",
        innerWrapper: "inline-flex w-full items-center h-full box-border",
        input: [
            "w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none",
            "data-[has-start-content=true]:ps-1.5",
            "data-[has-end-content=true]:pe-1.5",
            "file:cursor-pointer file:bg-transparent file:border-0",
            "autofill:bg-transparent bg-clip-text"
        ],
        clearButton: [
            "p-2",
            "-m-2",
            "z-10",
            "absolute",
            "end-3",
            "start-auto",
            "pointer-events-none",
            "appearance-none",
            "outline-none",
            "select-none",
            "opacity-0",
            "hover:!opacity-100",
            "cursor-pointer",
            "active:!opacity-70",
            "rounded-full",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
        description: "text-tiny text-foreground-400",
        errorMessage: "text-tiny text-danger"
    },
    variants: {
        variant: {
            flat: {
                inputWrapper: [
                    "bg-default-100",
                    "data-[hover=true]:bg-default-200",
                    "group-data-[focus=true]:bg-default-100"
                ]
            },
            faded: {
                inputWrapper: [
                    "bg-default-100",
                    "border-medium",
                    "border-default-200",
                    "data-[hover=true]:border-default-400 focus-within:border-default-400"
                ],
                value: "group-data-[has-value=true]:text-default-foreground"
            },
            bordered: {
                inputWrapper: [
                    "border-medium",
                    "border-default-200",
                    "data-[hover=true]:border-default-400",
                    "group-data-[focus=true]:border-default-foreground"
                ]
            },
            underlined: {
                inputWrapper: [
                    "!px-1",
                    "!pb-0",
                    "!gap-0",
                    "relative",
                    "box-border",
                    "border-b-medium",
                    "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
                    "border-default-200",
                    "!rounded-none",
                    "hover:border-default-300",
                    "after:content-['']",
                    "after:w-0",
                    "after:origin-center",
                    "after:bg-default-foreground",
                    "after:absolute",
                    "after:left-1/2",
                    "after:-translate-x-1/2",
                    "after:-bottom-[2px]",
                    "after:h-[2px]",
                    "group-data-[focus=true]:after:w-full"
                ],
                innerWrapper: "pb-1",
                label: "group-data-[filled-within=true]:text-foreground"
            }
        },
        color: {
            default: {},
            primary: {},
            secondary: {},
            success: {},
            warning: {},
            danger: {}
        },
        size: {
            sm: {
                label: "text-tiny",
                inputWrapper: "h-8 min-h-8 px-2 rounded-small",
                input: "text-small",
                clearButton: "text-medium"
            },
            md: {
                inputWrapper: "h-10 min-h-10 rounded-medium",
                input: "text-small",
                clearButton: "text-large"
            },
            lg: {
                label: "text-medium",
                inputWrapper: "h-12 min-h-12 rounded-large",
                input: "text-medium",
                clearButton: "text-large"
            }
        },
        radius: {
            none: {
                inputWrapper: "rounded-none"
            },
            sm: {
                inputWrapper: "rounded-small"
            },
            md: {
                inputWrapper: "rounded-medium"
            },
            lg: {
                inputWrapper: "rounded-large"
            },
            full: {
                inputWrapper: "rounded-full"
            }
        },
        labelPlacement: {
            outside: {
                mainWrapper: "flex flex-col"
            },
            "outside-left": {
                base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
                inputWrapper: "flex-1",
                mainWrapper: "flex flex-col",
                label: "relative text-foreground pe-2 ps-2 pointer-events-auto"
            },
            inside: {
                label: "cursor-text",
                inputWrapper: "flex-col items-start justify-center gap-0",
                innerWrapper: "group-data-[has-label=true]:items-end"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            },
            false: {}
        },
        isClearable: {
            true: {
                input: "peer pe-6 input-search-cancel-button-none",
                clearButton: [
                    "peer-data-[filled=true]:pointer-events-auto",
                    "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block",
                    "peer-data-[filled=true]:scale-100"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none",
                inputWrapper: "pointer-events-none",
                label: "pointer-events-none"
            }
        },
        isInvalid: {
            true: {
                label: "!text-danger",
                input: "!placeholder:text-danger !text-danger"
            }
        },
        isRequired: {
            true: {
                label: "after:content-['*'] after:text-danger after:ms-0.5"
            }
        },
        isMultiline: {
            true: {
                label: "relative",
                inputWrapper: "!h-auto",
                innerWrapper: "items-start group-data-[has-label=true]:items-start",
                input: "resize-none data-[hide-scroll=true]:scrollbar-hide",
                clearButton: "absolute top-2 right-2 rtl:right-auto rtl:left-2 z-10"
            }
        },
        disableAnimation: {
            true: {
                input: "transition-none",
                inputWrapper: "transition-none",
                label: "transition-none"
            },
            false: {
                inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
                label: [
                    "will-change-auto",
                    "!duration-200",
                    "!ease-out",
                    "motion-reduce:transition-none",
                    "transition-[transform,color,left,opacity]"
                ],
                clearButton: [
                    "scale-90",
                    "ease-out",
                    "duration-150",
                    "transition-[opacity,transform]",
                    "motion-reduce:transition-none",
                    "motion-reduce:scale-100"
                ]
            }
        }
    },
    defaultVariants: {
        variant: "flat",
        color: "default",
        size: "md",
        fullWidth: true,
        labelPlacement: "inside",
        isDisabled: false,
        isMultiline: false
    },
    compoundVariants: [
        {
            variant: "flat",
            color: "default",
            class: {
                input: "group-data-[has-value=true]:text-default-foreground"
            }
        },
        {
            variant: "flat",
            color: "primary",
            class: {
                inputWrapper: [
                    "bg-primary-100",
                    "data-[hover=true]:bg-primary-50",
                    "text-primary",
                    "group-data-[focus=true]:bg-primary-50",
                    "placeholder:text-primary"
                ],
                input: "placeholder:text-primary",
                label: "text-primary"
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                inputWrapper: [
                    "bg-secondary-100",
                    "text-secondary",
                    "data-[hover=true]:bg-secondary-50",
                    "group-data-[focus=true]:bg-secondary-50",
                    "placeholder:text-secondary"
                ],
                input: "placeholder:text-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                inputWrapper: [
                    "bg-success-100",
                    "text-success-600",
                    "dark:text-success",
                    "placeholder:text-success-600",
                    "dark:placeholder:text-success",
                    "data-[hover=true]:bg-success-50",
                    "group-data-[focus=true]:bg-success-50"
                ],
                input: "placeholder:text-success-600 dark:placeholder:text-success",
                label: "text-success-600 dark:text-success"
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                inputWrapper: [
                    "bg-warning-100",
                    "text-warning-600",
                    "dark:text-warning",
                    "placeholder:text-warning-600",
                    "dark:placeholder:text-warning",
                    "data-[hover=true]:bg-warning-50",
                    "group-data-[focus=true]:bg-warning-50"
                ],
                input: "placeholder:text-warning-600 dark:placeholder:text-warning",
                label: "text-warning-600 dark:text-warning"
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                inputWrapper: [
                    "bg-danger-100",
                    "text-danger",
                    "dark:text-danger-500",
                    "placeholder:text-danger",
                    "dark:placeholder:text-danger-500",
                    "data-[hover=true]:bg-danger-50",
                    "group-data-[focus=true]:bg-danger-50"
                ],
                input: "placeholder:text-danger dark:placeholder:text-danger-500",
                label: "text-danger dark:text-danger-500"
            }
        },
        {
            variant: "faded",
            color: "primary",
            class: {
                label: "text-primary",
                inputWrapper: "data-[hover=true]:border-primary focus-within:border-primary"
            }
        },
        {
            variant: "faded",
            color: "secondary",
            class: {
                label: "text-secondary",
                inputWrapper: "data-[hover=true]:border-secondary focus-within:border-secondary"
            }
        },
        {
            variant: "faded",
            color: "success",
            class: {
                label: "text-success",
                inputWrapper: "data-[hover=true]:border-success focus-within:border-success"
            }
        },
        {
            variant: "faded",
            color: "warning",
            class: {
                label: "text-warning",
                inputWrapper: "data-[hover=true]:border-warning focus-within:border-warning"
            }
        },
        {
            variant: "faded",
            color: "danger",
            class: {
                label: "text-danger",
                inputWrapper: "data-[hover=true]:border-danger focus-within:border-danger"
            }
        },
        {
            variant: "underlined",
            color: "default",
            class: {
                input: "group-data-[has-value=true]:text-foreground"
            }
        },
        {
            variant: "underlined",
            color: "primary",
            class: {
                inputWrapper: "after:bg-primary",
                label: "text-primary"
            }
        },
        {
            variant: "underlined",
            color: "secondary",
            class: {
                inputWrapper: "after:bg-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "underlined",
            color: "success",
            class: {
                inputWrapper: "after:bg-success",
                label: "text-success"
            }
        },
        {
            variant: "underlined",
            color: "warning",
            class: {
                inputWrapper: "after:bg-warning",
                label: "text-warning"
            }
        },
        {
            variant: "underlined",
            color: "danger",
            class: {
                inputWrapper: "after:bg-danger",
                label: "text-danger"
            }
        },
        {
            variant: "bordered",
            color: "primary",
            class: {
                inputWrapper: "group-data-[focus=true]:border-primary",
                label: "text-primary"
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                inputWrapper: "group-data-[focus=true]:border-secondary",
                label: "text-secondary"
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                inputWrapper: "group-data-[focus=true]:border-success",
                label: "text-success"
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                inputWrapper: "group-data-[focus=true]:border-warning",
                label: "text-warning"
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                inputWrapper: "group-data-[focus=true]:border-danger",
                label: "text-danger"
            }
        },
        {
            labelPlacement: "inside",
            color: "default",
            class: {
                label: "group-data-[filled-within=true]:text-default-600"
            }
        },
        {
            labelPlacement: "outside",
            color: "default",
            class: {
                label: "group-data-[filled-within=true]:text-foreground"
            }
        },
        {
            radius: "full",
            size: [
                "sm"
            ],
            class: {
                inputWrapper: "px-3"
            }
        },
        {
            radius: "full",
            size: "md",
            class: {
                inputWrapper: "px-4"
            }
        },
        {
            radius: "full",
            size: "lg",
            class: {
                inputWrapper: "px-5"
            }
        },
        {
            disableAnimation: false,
            variant: [
                "faded",
                "bordered"
            ],
            class: {
                inputWrapper: "transition-colors motion-reduce:transition-none"
            }
        },
        {
            disableAnimation: false,
            variant: "underlined",
            class: {
                inputWrapper: "after:transition-width motion-reduce:after:transition-none"
            }
        },
        {
            variant: [
                "flat",
                "faded"
            ],
            class: {
                inputWrapper: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH5E4FQB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupDataFocusVisibleClasses"]
                ]
            }
        },
        {
            isInvalid: true,
            variant: "flat",
            class: {
                inputWrapper: [
                    "!bg-danger-50",
                    "data-[hover=true]:!bg-danger-100",
                    "group-data-[focus=true]:!bg-danger-50"
                ]
            }
        },
        {
            isInvalid: true,
            variant: "bordered",
            class: {
                inputWrapper: "!border-danger group-data-[focus=true]:!border-danger"
            }
        },
        {
            isInvalid: true,
            variant: "underlined",
            class: {
                inputWrapper: "after:!bg-danger"
            }
        },
        {
            labelPlacement: "inside",
            size: "sm",
            class: {
                inputWrapper: "h-12 py-1.5 px-3"
            }
        },
        {
            labelPlacement: "inside",
            size: "md",
            class: {
                inputWrapper: "h-14 py-2"
            }
        },
        {
            labelPlacement: "inside",
            size: "lg",
            class: {
                inputWrapper: "h-16 py-2.5 gap-0"
            }
        },
        {
            labelPlacement: "inside",
            size: "sm",
            variant: [
                "bordered",
                "faded"
            ],
            class: {
                inputWrapper: "py-1"
            }
        },
        {
            labelPlacement: [
                "inside",
                "outside"
            ],
            class: {
                label: [
                    "group-data-[filled-within=true]:pointer-events-auto"
                ]
            }
        },
        {
            labelPlacement: "outside",
            isMultiline: false,
            class: {
                base: "relative justify-end",
                label: [
                    "pb-0",
                    "z-20",
                    "top-1/2",
                    "-translate-y-1/2",
                    "group-data-[filled-within=true]:start-0"
                ]
            }
        },
        {
            labelPlacement: [
                "inside"
            ],
            class: {
                label: [
                    "group-data-[filled-within=true]:scale-85"
                ]
            }
        },
        {
            labelPlacement: [
                "inside"
            ],
            variant: "flat",
            class: {
                innerWrapper: "pb-0.5"
            }
        },
        {
            variant: "underlined",
            size: "sm",
            class: {
                innerWrapper: "pb-1"
            }
        },
        {
            variant: "underlined",
            size: [
                "md",
                "lg"
            ],
            class: {
                innerWrapper: "pb-1.5"
            }
        },
        {
            labelPlacement: "inside",
            size: [
                "sm",
                "md"
            ],
            class: {
                label: "text-small"
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: false,
            size: "lg",
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: [
                "faded",
                "bordered"
            ],
            isMultiline: false,
            size: "lg",
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: "underlined",
            isMultiline: false,
            size: "sm",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: "underlined",
            isMultiline: false,
            size: "md",
            class: {
                label: [
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]"
                ]
            }
        },
        {
            labelPlacement: "inside",
            variant: "underlined",
            size: "lg",
            isMultiline: false,
            class: {
                label: [
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]"
                ]
            }
        },
        {
            labelPlacement: "outside",
            size: "sm",
            isMultiline: false,
            class: {
                label: [
                    "start-2",
                    "text-tiny",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]"
            }
        },
        {
            labelPlacement: "outside",
            size: "md",
            isMultiline: false,
            class: {
                label: [
                    "start-3",
                    "end-auto",
                    "text-small",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
            }
        },
        {
            labelPlacement: "outside",
            size: "lg",
            isMultiline: false,
            class: {
                label: [
                    "start-3",
                    "end-auto",
                    "text-medium",
                    "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]"
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]"
            }
        },
        {
            labelPlacement: "outside-left",
            size: "sm",
            class: {
                label: "group-data-[has-helper=true]:pt-2"
            }
        },
        {
            labelPlacement: "outside-left",
            size: "md",
            class: {
                label: "group-data-[has-helper=true]:pt-3"
            }
        },
        {
            labelPlacement: "outside-left",
            size: "lg",
            class: {
                label: "group-data-[has-helper=true]:pt-4"
            }
        },
        {
            labelPlacement: [
                "outside",
                "outside-left"
            ],
            isMultiline: true,
            class: {
                inputWrapper: "py-2"
            }
        },
        {
            labelPlacement: "outside",
            isMultiline: true,
            class: {
                label: "pb-1.5"
            }
        },
        {
            labelPlacement: "inside",
            isMultiline: true,
            class: {
                label: "pb-0.5",
                input: "pt-0"
            }
        },
        {
            isMultiline: true,
            disableAnimation: false,
            class: {
                input: "transition-height !duration-100 motion-reduce:transition-none"
            }
        },
        {
            labelPlacement: [
                "inside",
                "outside"
            ],
            class: {
                label: [
                    "pe-2",
                    "max-w-full",
                    "text-ellipsis",
                    "overflow-hidden"
                ]
            }
        },
        {
            isMultiline: true,
            radius: "full",
            class: {
                inputWrapper: "data-[has-multiple-rows=true]:rounded-large"
            }
        },
        {
            isClearable: true,
            isMultiline: true,
            class: {
                clearButton: [
                    "group-data-[has-value=true]:opacity-70 group-data-[has-value=true]:block",
                    "group-data-[has-value=true]:scale-100",
                    "group-data-[has-value=true]:pointer-events-auto"
                ]
            }
        }
    ]
});
;
}),
"[project]/node_modules/@nextui-org/theme/dist/chunk-E257OVH3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "form",
    ()=>form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-UWE6H66T.mjs [app-client] (ecmascript)");
;
// src/components/form.ts
var form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$UWE6H66T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "flex flex-col gap-2 items-start"
});
;
}),
"[project]/node_modules/tailwind-variants/dist/chunk-JXBJZR5A.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>l,
    "b",
    ()=>u,
    "c",
    ()=>x,
    "d",
    ()=>A,
    "e",
    ()=>y,
    "f",
    ()=>a,
    "g",
    ()=>p,
    "h",
    ()=>g
]);
var l = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e)=>!e || typeof e != "object" || Object.keys(e).length === 0, x = (e, o)=>JSON.stringify(e) === JSON.stringify(o), A = (e)=>typeof e == "boolean";
function i(e, o) {
    e.forEach(function(r) {
        Array.isArray(r) ? i(r, o) : o.push(r);
    });
}
function y(e) {
    let o = [];
    return i(e, o), o;
}
var a = (...e)=>y(e).filter(Boolean), p = (e, o)=>{
    let r = {}, c = Object.keys(e), f = Object.keys(o);
    for (let t of c)if (f.includes(t)) {
        let s = e[t], n = o[t];
        typeof s == "object" && typeof n == "object" ? r[t] = p(s, n) : Array.isArray(s) || Array.isArray(n) ? r[t] = a(n, s) : r[t] = n + " " + s;
    } else r[t] = e[t];
    for (let t of f)c.includes(t) || (r[t] = o[t]);
    return r;
}, g = (e)=>!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
;
}),
"[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>w,
    "cnBase",
    ()=>N,
    "createTV",
    ()=>le,
    "defaultConfig",
    ()=>se,
    "tv",
    ()=>ie,
    "voidEmpty",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/chunk-JXBJZR5A.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$lib$2f$tw$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/tw-merge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$lib$2f$extend$2d$tailwind$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs [app-client] (ecmascript)");
;
;
var se = {
    twMerge: !0,
    twMergeConfig: {},
    responsiveVariants: !1
}, _ = (s)=>s || void 0, N = (...s)=>_((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(s).filter(Boolean).join(" ")), q = null, M = {}, F = !1, w = (...s)=>(b$1)=>b$1.twMerge ? ((!q || F) && (F = !1, q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(M) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$lib$2f$tw$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$lib$2f$extend$2d$tailwind$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTailwindMerge"])(M)), _(q(N(s)))) : N(s), Z = (s, b)=>{
    for(let e in b)s.hasOwnProperty(e) ? s[e] = N(s[e], b[e]) : s[e] = b[e];
    return s;
}, ie = (s, b$1)=>{
    let { extend: e = null, slots: j = {}, variants: U = {}, compoundVariants: C = [], compoundSlots: V = [], defaultVariants: W = {} } = s, m = {
        ...se,
        ...b$1
    }, S = e != null && e.base ? N(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e.variants) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(U, e.variants) : U, A = e != null && e.defaultVariants && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e.defaultVariants) ? {
        ...e.defaultVariants,
        ...W
    } : W;
    !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(m.twMergeConfig) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(m.twMergeConfig, M) && (F = !0, M = m.twMergeConfig);
    let O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e == null ? void 0 : e.slots), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(j) ? {} : {
        base: N(s == null ? void 0 : s.base, O && (e == null ? void 0 : e.base)),
        ...j
    }, h$1 = O ? $ : Z({
        ...e == null ? void 0 : e.slots
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])($) ? {
        base: s == null ? void 0 : s.base
    } : $), v = (l)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(g$1) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(j) && O) return w(S, l == null ? void 0 : l.class, l == null ? void 0 : l.className)(m);
        if (C && !Array.isArray(C)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
        if (V && !Array.isArray(V)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof V}`);
        let K = (t, n, a = [], i)=>{
            let r = a;
            if (typeof n == "string") r = r.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(n).split(" ").map((c)=>`${t}:${c}`));
            else if (Array.isArray(n)) r = r.concat(n.reduce((c, f)=>c.concat(`${t}:${f}`), []));
            else if (typeof n == "object" && typeof i == "string") {
                for(let c in n)if (n.hasOwnProperty(c) && c === i) {
                    let f = n[c];
                    if (f && typeof f == "string") {
                        let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(f);
                        r[i] ? r[i] = r[i].concat(o.split(" ").map((u)=>`${t}:${u}`)) : r[i] = o.split(" ").map((u)=>`${t}:${u}`);
                    } else Array.isArray(f) && f.length > 0 && (r[i] = f.reduce((o, u)=>o.concat(`${t}:${u}`), []));
                }
            }
            return r;
        }, z = (t, n = g$1, a$1 = null, i = null)=>{
            var J;
            let r = n[t];
            if (!r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r)) return null;
            let c = (J = i == null ? void 0 : i[t]) != null ? J : l == null ? void 0 : l[t];
            if (c === null) return null;
            let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(c), o = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, u = A == null ? void 0 : A[t], d = [];
            if (typeof f == "object" && o) for (let [k, L] of Object.entries(f)){
                let ae = r[L];
                if (k === "initial") {
                    u = L;
                    continue;
                }
                Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(k) || (d = K(k, ae, d, a$1));
            }
            let T = r[f] || r[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(u)];
            return typeof d == "object" && typeof a$1 == "string" && d[a$1] ? Z(d, T) : d.length > 0 ? (d.push(T), d) : T;
        }, P = ()=>g$1 ? Object.keys(g$1).map((t)=>z(t, g$1)) : null, p = (t, n)=>{
            if (!g$1 || typeof g$1 != "object") return null;
            let a = new Array;
            for(let i in g$1){
                let r = z(i, g$1, t, n), c = t === "base" && typeof r == "string" ? r : r && r[t];
                c && (a[a.length] = c);
            }
            return a;
        }, D = {};
        for(let t in l)l[t] !== void 0 && (D[t] = l[t]);
        let G = (t, n)=>{
            var i;
            let a = typeof (l == null ? void 0 : l[t]) == "object" ? {
                [t]: (i = l[t]) == null ? void 0 : i.initial
            } : {};
            return {
                ...A,
                ...D,
                ...a,
                ...n
            };
        }, H = (t = [], n)=>{
            let a = [];
            for (let { class: i, className: r, ...c } of t){
                let f = !0;
                for (let [o, u] of Object.entries(c)){
                    let d = G(o, n);
                    if (Array.isArray(u)) {
                        if (!u.includes(d[o])) {
                            f = !1;
                            break;
                        }
                    } else if (d[o] !== u) {
                        f = !1;
                        break;
                    }
                }
                f && (i && a.push(i), r && a.push(r));
            }
            return a;
        }, I = (t)=>{
            let n = H(C, t), a = H(e == null ? void 0 : e.compoundVariants, t);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(a, n);
        }, ee = (t)=>{
            let n = I(t);
            if (!Array.isArray(n)) return n;
            let a = {};
            for (let i of n)if (typeof i == "string" && (a.base = w(a.base, i)(m)), typeof i == "object") for (let [r, c] of Object.entries(i))a[r] = w(a[r], c)(m);
            return a;
        }, te = (t)=>{
            if (V.length < 1) return null;
            let n = {};
            for (let { slots: a = [], class: i, className: r, ...c } of V){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(c)) {
                    let f = !0;
                    for (let o of Object.keys(c)){
                        let u = G(o, t)[o];
                        if (u === void 0 || (Array.isArray(c[o]) ? !c[o].includes(u) : c[o] !== u)) {
                            f = !1;
                            break;
                        }
                    }
                    if (!f) continue;
                }
                for (let f of a)n[f] = n[f] || [], n[f].push([
                    i,
                    r
                ]);
            }
            return n;
        };
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(j) || !O) {
            let t = {};
            if (typeof h$1 == "object" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(h$1)) for (let n of Object.keys(h$1))t[n] = (a)=>{
                var i, r;
                return w(h$1[n], p(n, a), ((i = ee(a)) != null ? i : [])[n], ((r = te(a)) != null ? r : [])[n], a == null ? void 0 : a.class, a == null ? void 0 : a.className)(m);
            };
            return t;
        }
        return w(S, P(), I(), l == null ? void 0 : l.class, l == null ? void 0 : l.className)(m);
    }, x = ()=>{
        if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
    };
    return v.variantKeys = x(), v.extend = e, v.base = S, v.slots = h$1, v.variants = g$1, v.defaultVariants = A, v.compoundSlots = V, v.compoundVariants = C, v;
}, le = (s)=>(b, e)=>ie(b, e ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$JXBJZR5A$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(s, e) : s);
;
}),
"[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chain",
    ()=>$ff5963eb1fccf552$export$e08e3b67e392101e
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}
;
 //# sourceMappingURL=chain.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLayoutEffect",
    ()=>$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useLayoutEffect : ()=>{};
;
 //# sourceMappingURL=useLayoutEffect.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectEvent",
    ()=>$8ae05eaa5c114e9c$export$7f54fc3180508a52
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}
;
 //# sourceMappingURL=useEffectEvent.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValueEffect",
    ()=>$1dbecbe27a04f9af$export$14d238f342723f25
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}
;
 //# sourceMappingURL=useValueEffect.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeIds",
    ()=>$bdb11010cef70236$export$cd8c9cb68f842629,
    "useId",
    ()=>$bdb11010cef70236$export$f680877a34711e37,
    "useSlotId",
    ()=>$bdb11010cef70236$export$b4cc09c592e8fdb8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultId);
    let nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRSafeId"])(value);
    let updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) {
        // TS not smart enough to know that `has` means the value exists
        if ($bdb11010cef70236$var$idsUpdaterMap.has(res) && !$bdb11010cef70236$var$idsUpdaterMap.get(res).includes(updateValue)) $bdb11010cef70236$var$idsUpdaterMap.set(res, [
            ...$bdb11010cef70236$var$idsUpdaterMap.get(res),
            updateValue
        ]);
        else $bdb11010cef70236$var$idsUpdaterMap.set(res, [
            updateValue
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdsA) {
        setIdsA.forEach((fn)=>fn(idB));
        return idB;
    }
    let setIdsB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdsB) {
        setIdsB.forEach((fn)=>fn(idA));
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueEffect"])(id);
    let updateId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}
;
 //# sourceMappingURL=useId.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeProps",
    ()=>$3ef42575df84b30b$export$9d1611c77c2fe928
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIds"])(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}
;
 //# sourceMappingURL=mergeProps.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isVirtualClick",
    ()=>$6a7db85432448f7f$export$60278871457622de,
    "isVirtualPointerEvent",
    ()=>$6a7db85432448f7f$export$29bf1b5f2c56cf63
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}
;
 //# sourceMappingURL=isVirtualEvent.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOwnerDocument",
    ()=>$431fbd86ca7dc216$export$b204af158042fbac,
    "getOwnerWindow",
    ()=>$431fbd86ca7dc216$export$f21a1ffae260145a
]);
const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
;
 //# sourceMappingURL=domHelpers.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDOMProps",
    ()=>$65484d02dcb7eb3e$export$457c3d6518dd4c6f
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}
;
 //# sourceMappingURL=filterDOMProps.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/runAfterTransition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runAfterTransition",
    ()=>$bbed8b41f857bcc0$export$24490316f764c430
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}
;
 //# sourceMappingURL=runAfterTransition.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncRef",
    ()=>$e7801be82b4b2a53$export$4debdb1a3f0fa79e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}
;
 //# sourceMappingURL=useSyncRef.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useObjectRef",
    ()=>$df56164dff5785e2$export$4338b53315abf666
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === 'function') forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}
;
 //# sourceMappingURL=useObjectRef.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalListeners",
    ()=>$03deb23ff14920c4$export$4eaf04e54aa8eed6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    let addGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}
;
 //# sourceMappingURL=useGlobalListeners.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useResizeObserver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResizeObserver",
    ()=>$9daab02d461809db$export$683480f191c0e3ea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, box: box, onResize: onResize } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element, {
                box: box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref,
        box
    ]);
}
;
 //# sourceMappingURL=useResizeObserver.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/isScrollable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isScrollable",
    ()=>$cc38e7bd3fc7b213$export$2bb74740c4e19def
]);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}
;
 //# sourceMappingURL=isScrollable.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/getScrollParent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getScrollParent",
    ()=>$62d8ded9296f3872$export$cfa2225e87938781
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/isScrollable.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}
;
 //# sourceMappingURL=getScrollParent.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useFormReset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormReset",
    ()=>$99facab73266f662$export$5add1d006293d136
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialValue);
    let handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}
;
 //# sourceMappingURL=useFormReset.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/useLabels.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabels",
    ()=>$313b98861ee5dd6c$export$d6875122194c7b44
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}
;
 //# sourceMappingURL=useLabels.module.js.map
}),
"[project]/node_modules/@react-aria/utils/dist/mergeRefs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeRefs",
    ()=>$5dc95899b306f630$export$c9058316764c140e
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}
;
 //# sourceMappingURL=mergeRefs.module.js.map
}),
"[project]/node_modules/@react-aria/utils/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWindowFocusTracking",
    ()=>$507fabe10e71c6fb$export$2f1888112f558a7d,
    "getInteractionModality",
    ()=>$507fabe10e71c6fb$export$630ff653c5ada6a9,
    "hasSetupGlobalListeners",
    ()=>$507fabe10e71c6fb$export$d90243b58daecda7,
    "isFocusVisible",
    ()=>$507fabe10e71c6fb$export$b9b3dfddab17db27,
    "setInteractionModality",
    ()=>$507fabe10e71c6fb$export$8397ddfc504fdb9a,
    "useFocusVisible",
    ()=>$507fabe10e71c6fb$export$ffd9e5021c1fb2d6,
    "useFocusVisibleListener",
    ()=>$507fabe10e71c6fb$export$ec71b4b83ac08ec3,
    "useInteractionModality",
    ()=>$507fabe10e71c6fb$export$98e20ec92f614cfe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element))) return;
    const windowObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element);
    const documentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element);
    const documentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])($507fabe10e71c6fb$var$currentModality);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSSR"])() ? null : modality;
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    var _e_target;
    const IHTMLInputElement = typeof window !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLTextAreaElement || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLElement && (e === null || e === void 0 ? void 0 : e.target.isContentEditable);
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
;
 //# sourceMappingURL=useFocusVisible.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyntheticFocusEvent",
    ()=>$8a9cb279dc87e130$export$905e7fc544a71f36,
    "useSyntheticBlurEvent",
    ()=>$8a9cb279dc87e130$export$715c682d09d639cc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}
;
 //# sourceMappingURL=utils.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/useFocus.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocus",
    ()=>$a1ea59d68270f0dd$export$f8168d8dd8fd66e6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyntheticBlurEvent"])(onBlur);
    const onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.target);
        if (e.target === e.currentTarget && ownerDocument.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}
;
 //# sourceMappingURL=useFocus.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusWithin",
    ()=>$9ab94262bd0047c7$export$420e68273165f4ec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isFocusWithin: false
    });
    let onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyntheticBlurEvent"])(onBlur);
    let onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These should not have been null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}
;
 //# sourceMappingURL=useFocusWithin.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHover",
    ()=>$6179b936705e76d3$export$ae780daf29e6d456
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}
;
 //# sourceMappingURL=useHover.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/createEventHandler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventHandler",
    ()=>$93925083ecbb358c$export$48d1ea6320830260
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}
;
 //# sourceMappingURL=createEventHandler.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/useKeyboard.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboard",
    ()=>$46d819fcbaf35654$export$8f71654801c2f7cd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$createEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/createEventHandler.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$createEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(props.onKeyDown),
            onKeyUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$createEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(props.onKeyUp)
        }
    };
}
;
 //# sourceMappingURL=useKeyboard.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/textSelection.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disableTextSelection",
    ()=>$14c0b72509d70225$export$16a4697467175487,
    "restoreTextSelection",
    ()=>$14c0b72509d70225$export$b0d6fa1ab32e3295
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$runAfterTransition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/runAfterTransition.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) {
        if ($14c0b72509d70225$var$state === 'default') {
            const documentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$runAfterTransition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAfterTransition"])(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    const documentObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            if (target.style.userSelect === 'none') target.style.userSelect = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}
;
 //# sourceMappingURL=textSelection.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PressResponderContext",
    ()=>$ae1eeba8b9eafd08$export$5165eccb35aaadb5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';
;
 //# sourceMappingURL=context.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePress",
    ()=>$f6c31cce2adf654f$export$45712eceda6fad21
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/textSelection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/openLink.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressResponderContext"]));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(contextProps, props);
        register();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRef"])(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent, state){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        var _state_target;
        let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
        const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol('linkClicked');
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useGlobalListeners$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalListeners"])();
    let triggerPressStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.ignoreClickAfterPress = true;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreTextSelection"])(state.target);
        }
    });
    let cancelOnPointerExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                        // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                        let originalTarget = e.currentTarget;
                        let pressUp = (e)=>{
                            if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && originalTarget.contains(e.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
                        };
                        addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.currentTarget), 'keyup', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(pressUp, onKeyUp), true);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openLink"]).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled && !preventFocusOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.currentTarget);
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUp(e, 'virtual');
                        let stopPressEnd = triggerPressEnd(e, 'virtual');
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                let target = e.target;
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', state.target.contains(target));
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$openLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openLink"])(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === 'Meta' && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualPointerEvent"])(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled && !preventFocusOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.currentTarget);
                    if (!allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableTextSelection"])(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.currentTarget), 'pointermove', onPointerMove, false);
                    addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreTextSelection"])(state.target);
                    // Prevent subsequent touchend event from triggering onClick on unrelated elements on Android. See below.
                    // Both 'touch' and 'pen' pointerTypes trigger onTouchEnd, but 'mouse' does not.
                    if ('ontouchend' in state.target && e.pointerType !== 'mouse') addGlobalListener(state.target, 'touchend', onTouchEnd, {
                        once: true
                    });
                }
            };
            // This is a workaround for an Android Chrome/Firefox issue where click events are fired on an incorrect element
            // if the original target is removed during onPointerUp (before onClick).
            // https://github.com/adobe/react-spectrum/issues/1513
            // https://issues.chromium.org/issues/40732224
            // Note: this event must be registered directly on the element, not via React props in order to work.
            // https://github.com/facebook/react/issues/9809
            let onTouchEnd = (e)=>{
                // Don't preventDefault if we actually want the default (e.g. submit/link click).
                if ($f6c31cce2adf654f$var$shouldPreventDefaultUp(e.currentTarget)) e.preventDefault();
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e.currentTarget)) e.preventDefault();
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isVirtualEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(e.nativeEvent) ? 'virtual' : 'mouse';
                if (!isDisabled && !preventFocusOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.currentTarget);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e.currentTarget), 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || 'mouse');
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled && !preventFocusOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(e.currentTarget);
                if (!allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableTextSelection"])(state.target);
                let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(e.currentTarget), 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreTextSelection"])(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            var _ref_current_target;
            if (!allowTextSelectionOnPress) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$textSelection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreTextSelection"])((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : undefined);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultDown(target) {
    // We cannot prevent default if the target is a draggable element.
    return !(target instanceof HTMLElement) || !target.hasAttribute('draggable');
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}
;
 //# sourceMappingURL=usePress.module.js.map
}),
"[project]/node_modules/@react-aria/interactions/dist/PressResponder.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearPressResponder",
    ()=>$f1ab8c75478c6f73$export$cf75428e0b9ed1ea,
    "PressResponder",
    ()=>$f1ab8c75478c6f73$export$3351871ee4b288b8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressResponderContext"]));
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectRef"])(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRef"])(prevContext, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressResponderContext"]).Provider, {
        value: context
    }, children);
});
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressResponderContext"]).Provider, {
        value: context
    }, children);
}
;
 //# sourceMappingURL=PressResponder.module.js.map
}),
"[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusRing",
    ()=>$f7dceffc5ad7768b$export$4e328f61c538687f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusWithin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isFocused: false,
        isFocusVisible: autoFocus || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusVisible"])()
    });
    let [isFocused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [isFocusVisibleState, setFocusVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusVisibleListener"])((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocus"])({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusWithin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusWithin"])({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}
;
 //# sourceMappingURL=useFocusRing.module.js.map
}),
"[project]/node_modules/@react-aria/focus/dist/focusSafely.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusSafely",
    ()=>$6a99195332edec8b$export$80f3e147d781571c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$runAfterTransition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/runAfterTransition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInteractionModality"])() === 'virtual') {
        let lastFocusedElement = ownerDocument.activeElement;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$runAfterTransition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAfterTransition"])(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(element);
        });
    } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(element);
}
;
 //# sourceMappingURL=focusSafely.module.js.map
}),
"[project]/node_modules/@react-aria/focus/dist/useFocusable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusableProvider",
    ()=>$e6afbd83fe6ebbd2$export$13f3202a3e5ddd5,
    "useFocusable",
    ()=>$e6afbd83fe6ebbd2$export$4c014de7c8940b4c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$focusSafely$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/focusSafely.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useKeyboard.mjs [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($e6afbd83fe6ebbd2$var$FocusableContext) || {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useSyncRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRef"])(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children, ...otherProps } = props;
    let objRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children);
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocus"])(props);
    let { keyboardProps: keyboardProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useKeyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboard"])(props);
    let interactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.autoFocus);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoFocusRef.current && domRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$focusSafely$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusSafely"])(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}
;
 //# sourceMappingURL=useFocusable.module.js.map
}),
"[project]/node_modules/@react-aria/focus/dist/isElementVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementVisible",
    ()=>$645f2e67b85a24c9$export$e989c0fffaa6b27a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    const windowObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}
;
 //# sourceMappingURL=isElementVisible.module.js.map
}),
"[project]/node_modules/@react-aria/focus/dist/FocusScope.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>$9bf71ea28793e738$export$20e40289641fbbb6,
    "createFocusManager",
    ()=>$9bf71ea28793e738$export$c5251b9e124bf29,
    "focusScopeTree",
    ()=>$9bf71ea28793e738$export$d06fae2ee68b101e,
    "getFocusableTreeWalker",
    ()=>$9bf71ea28793e738$export$2d6ec8fc375ceafa,
    "isElementInChildOfActiveScope",
    ()=>$9bf71ea28793e738$export$1258395f99bf9cbf,
    "isFocusable",
    ()=>$9bf71ea28793e738$export$4c063cf1350e6fed,
    "useFocusManager",
    ()=>$9bf71ea28793e738$export$10c5169755ce7bd7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$focusSafely$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/focusSafely.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$isElementVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/isElementVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createContext(null);
const $9bf71ea28793e738$var$RESTORE_FOCUS_EVENT = 'react-aria-focus-scope-restore';
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children, contain: contain, restoreFocus: restoreFocus, autoFocus: autoFocus } = props;
    let startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    let { parentNode: parentNode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (node) node.contain = !!contain;
    }, [
        contain
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        var _startRef_current;
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
        let nodes = [];
        let stopPropagation = (e)=>e.stopPropagation();
        while(node && node !== endRef.current){
            nodes.push(node);
            // Stop custom restore focus event from propagating to parent focus scopes.
            node.addEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
        return ()=>{
            for (let node of nodes)node.removeEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
        };
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // This needs to be an effect so that activeScope is updated after the FocusScope tree is complete.
    // It cannot be a useLayoutEffect because the parent of this node hasn't been attached in the tree yet.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scopeRef.current ? scopeRef.current[0] : undefined).activeElement;
        let scope = null;
        if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
            // We need to traverse the focusScope tree and find the bottom most scope that
            // contains the active element and set that as the activeScope.
            for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if (node.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
            if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
        }
    }, [
        scopeRef
    ]);
    // This layout effect cleanup is so that the tree node is removed synchronously with react before the RAF
    // in useRestoreFocus cleanup runs.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        return ()=>{
            var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
            var _focusScopeTree_getTreeNode_parent_scopeRef;
            // Scope may have been re-parented.
            let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
        };
    }, [
        scopeRef
    ]);
    let focusManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var _useContext;
    return (_useContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($9bf71ea28793e738$var$FocusContext)) === null || _useContext === void 0 ? void 0 : _useContext.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scope[0]).activeElement;
            let sentinel = scope[0].previousElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scope[0]).activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$export$4c063cf1350e6fed(element) {
    return element.matches($9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR);
}
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    let raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = undefined;
            }
            return;
        }
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scope ? scope[0] : undefined);
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = ownerDocument.activeElement;
            let scope = scopeRef.current;
            if (!scope || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: true
            }, scope);
            if (!focusedElement) return;
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (ownerDocument.activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    if (ownerDocument.body.contains(e.target)) {
                        var _focusedNode_current;
                        focusedNode.current = e.target;
                        (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        ownerDocument.addEventListener('keydown', onKeyDown, false);
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusout', onBlur, false));
        return ()=>{
            ownerDocument.removeEventListener('keydown', onKeyDown, false);
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusout', onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest('[data-react-aria-top-layer]')) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$focusSafely$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusSafely"])(element);
    } catch  {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch  {
    // ignore
    }
}
function $9bf71ea28793e738$var$getFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    return nextNode;
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    $9bf71ea28793e738$var$focusElement($9bf71ea28793e738$var$getFirstInScope(scope, tabbable));
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useRef(autoFocus);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scopeRef.current ? scopeRef.current[0] : undefined);
            if (!$9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scope ? scope[0] : undefined);
        let onFocus = (e)=>{
            let target = e.target;
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    // eslint-disable-next-line no-restricted-globals
    const nodeToRestoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scopeRef.current ? scopeRef.current[0] : undefined).activeElement : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let scope = scopeRef.current;
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scope ? scope[0] : undefined);
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = ownerDocument.activeElement;
            if (!$9bf71ea28793e738$var$isElementInChildScope(focusedElement, scopeRef) || !$9bf71ea28793e738$var$shouldRestoreFocus(scopeRef)) return;
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nodeToRestore || !ownerDocument.body.contains(nodeToRestore) || nodeToRestore === ownerDocument.body) {
                nodeToRestore = undefined;
                treeNode.nodeToRestore = undefined;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef))
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) ownerDocument.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) ownerDocument.removeEventListener('keydown', onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const ownerDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (!treeNode) return;
        var _nodeToRestoreRef_current;
        treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : undefined;
        return ()=>{
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            if (restoreFocus && nodeToRestore && (ownerDocument.activeElement && $9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement, scopeRef) || ownerDocument.activeElement === ownerDocument.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (ownerDocument.activeElement === ownerDocument.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
                                $9bf71ea28793e738$var$restoreFocusToElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && treeNode.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                let node = $9bf71ea28793e738$var$getFirstInScope(treeNode.scopeRef.current, true);
                                $9bf71ea28793e738$var$restoreFocusToElement(node);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$var$restoreFocusToElement(node) {
    // Dispatch a custom event that parent elements can intercept to customize focus restoration.
    // For example, virtualized collection components reuse DOM elements, so the original element
    // might still exist in the DOM but representing a different item.
    if (node.dispatchEvent(new CustomEvent($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, {
        bubbles: true,
        cancelable: true
    }))) $9bf71ea28793e738$var$focusElement(node);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(root).createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$isElementVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(root).activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(root).activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next !== null && next !== void 0 ? next : null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = $9bf71ea28793e738$var$last(walker);
                if (!lastNode) return null;
                previousNode = lastNode;
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode !== null && previousNode !== void 0 ? previousNode : null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next !== null && next !== void 0 ? next : null;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last)
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        if (!parentNode) return;
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        var _node_parent;
        let newTree = new $9bf71ea28793e738$var$Tree();
        var _node_parent_scopeRef;
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();
;
 //# sourceMappingURL=FocusScope.module.js.map
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/node_modules/@nextui-org/use-aria-button/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAriaButton",
    ()=>useAriaButton
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$GSANFGKG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-GSANFGKG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)");
;
;
;
;
function useAriaButton(props, ref) {
    let { elementType = "button", isDisabled, onPress, onPressStart, onPressEnd, onPressChange, preventFocusOnPress, allowFocusWhenDisabled, onClick: deprecatedOnClick, href, target, rel, type = "button", allowTextSelectionOnPress } = props;
    let additionalProps;
    if (elementType === "button") {
        additionalProps = {
            type,
            disabled: isDisabled
        };
    } else {
        additionalProps = {
            role: "button",
            tabIndex: isDisabled ? void 0 : 0,
            href: elementType === "a" && !isDisabled ? href : void 0,
            target: elementType === "a" ? target : void 0,
            type: elementType === "input" ? type : void 0,
            disabled: elementType === "input" ? isDisabled : void 0,
            "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
            rel: elementType === "a" ? rel : void 0
        };
    }
    let isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])();
    if (deprecatedOnClick && typeof deprecatedOnClick === "function") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$GSANFGKG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("onClick is deprecated, please use onPress instead. See: https://github.com/nextui-org/nextui/issues/4292", "useButton");
    }
    const handlePress = (e)=>{
        if (isMobile) {
            deprecatedOnClick == null ? void 0 : deprecatedOnClick(e);
        }
        onPress == null ? void 0 : onPress(e);
    };
    let { pressProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePress"])({
        onPressStart,
        onPressEnd,
        onPressChange,
        onPress: handlePress,
        isDisabled,
        preventFocusOnPress,
        allowTextSelectionOnPress,
        ref
    });
    let { focusableProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusable"])(props, ref);
    if (allowFocusWhenDisabled) {
        focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    }
    let buttonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(focusableProps, pressProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        labelable: true
    }));
    return {
        isPressed,
        buttonProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(additionalProps, buttonProps, {
            "aria-haspopup": props["aria-haspopup"],
            "aria-expanded": props["aria-expanded"],
            "aria-controls": props["aria-controls"],
            "aria-pressed": props["aria-pressed"],
            onClick: (e)=>{
                if (type === "button" && isMobile) {
                    return;
                }
                deprecatedOnClick == null ? void 0 : deprecatedOnClick(e);
            }
        })
    };
}
;
}),
"[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forwardRef",
    ()=>forwardRef,
    "isNextUIEl",
    ()=>isNextUIEl,
    "mapPropsVariants",
    ()=>mapPropsVariants,
    "mapPropsVariantsWithCommon",
    ()=>mapPropsVariantsWithCommon,
    "toIterator",
    ()=>toIterator
]);
// src/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function forwardRef(component) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(component);
}
var toIterator = (obj)=>{
    return {
        ...obj,
        [Symbol.iterator]: function() {
            const keys = Object.keys(this);
            let index = 0;
            return {
                next: ()=>{
                    if (index >= keys.length) {
                        return {
                            done: true
                        };
                    }
                    const key = keys[index];
                    const value = this[key];
                    index++;
                    return {
                        value: {
                            key,
                            value
                        },
                        done: false
                    };
                }
            };
        }
    };
};
var mapPropsVariants = (props, variantKeys, removeVariantProps = true)=>{
    if (!variantKeys) {
        return [
            props,
            {}
        ];
    }
    const picked = variantKeys.reduce((acc, key)=>{
        if (key in props) {
            return {
                ...acc,
                [key]: props[key]
            };
        } else {
            return acc;
        }
    }, {});
    if (removeVariantProps) {
        const omitted = Object.keys(props).filter((key)=>!variantKeys.includes(key)).reduce((acc, key)=>({
                ...acc,
                [key]: props[key]
            }), {});
        return [
            omitted,
            picked
        ];
    } else {
        return [
            props,
            picked
        ];
    }
};
var mapPropsVariantsWithCommon = (originalProps, variantKeys, commonKeys)=>{
    const props = Object.keys(originalProps).filter((key)=>!variantKeys.includes(key) || (commonKeys == null ? void 0 : commonKeys.includes(key))).reduce((acc, key)=>({
            ...acc,
            [key]: originalProps[key]
        }), {});
    const variants = variantKeys.reduce((acc, key)=>({
            ...acc,
            [key]: originalProps[key]
        }), {});
    return [
        props,
        variants
    ];
};
var isNextUIEl = (component)=>{
    var _a, _b, _c;
    return !!((_c = (_b = (_a = component.type) == null ? void 0 : _a.render) == null ? void 0 : _b.displayName) == null ? void 0 : _c.includes("NextUI"));
};
;
}),
"[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RFWDHYLZ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMEventNames",
    ()=>DOMEventNames,
    "DOMPropNames",
    ()=>DOMPropNames
]);
// src/dom-props.ts
var DOMPropNames = /* @__PURE__ */ new Set([
    "id",
    "type",
    "style",
    "title",
    "role",
    "tabIndex",
    "htmlFor",
    "width",
    "height",
    "abbr",
    "accept",
    "acceptCharset",
    "accessKey",
    "action",
    "allowFullScreen",
    "allowTransparency",
    "alt",
    "async",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "challenge",
    "charset",
    "checked",
    "cite",
    "class",
    "className",
    "cols",
    "colSpan",
    "command",
    "content",
    "contentEditable",
    "contextMenu",
    "controls",
    "coords",
    "crossOrigin",
    "data",
    "dateTime",
    "default",
    "defer",
    "dir",
    "disabled",
    "download",
    "draggable",
    "dropzone",
    "encType",
    "enterKeyHint",
    "for",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "headers",
    "hidden",
    "high",
    "href",
    "hrefLang",
    "httpEquiv",
    "icon",
    "inputMode",
    "isMap",
    "itemId",
    "itemProp",
    "itemRef",
    "itemScope",
    "itemType",
    "kind",
    "label",
    "lang",
    "list",
    "loop",
    "manifest",
    "max",
    "maxLength",
    "media",
    "mediaGroup",
    "method",
    "min",
    "minLength",
    "multiple",
    "muted",
    "name",
    "noValidate",
    "open",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "poster",
    "preload",
    "radioGroup",
    "referrerPolicy",
    "readOnly",
    "rel",
    "required",
    "rows",
    "rowSpan",
    "sandbox",
    "scope",
    "scoped",
    "scrolling",
    "seamless",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "sortable",
    "span",
    "spellCheck",
    "src",
    "srcDoc",
    "srcSet",
    "start",
    "step",
    "target",
    "translate",
    "typeMustMatch",
    "useMap",
    "value",
    "wmode",
    "wrap"
]);
var DOMEventNames = /* @__PURE__ */ new Set([
    "onCopy",
    "onCut",
    "onPaste",
    "onLoad",
    "onError",
    "onWheel",
    "onScroll",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onSubmit",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onPointerDown",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerUp",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionEnd"
]);
;
}),
"[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDOMProps",
    ()=>filterDOMProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RFWDHYLZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RFWDHYLZ.mjs [app-client] (ecmascript)");
;
// src/filter-dom-props.ts
var propRe = /^(data-.*)$/;
var ariaRe = /^(aria-.*)$/;
var funcRe = /^(on[A-Z].*)$/;
function filterDOMProps(props, opts = {}) {
    let { labelable = true, enabled = true, propNames, omitPropNames, omitEventNames, omitDataProps, omitEventProps } = opts;
    let filteredProps = {};
    if (!enabled) {
        return props;
    }
    for(const prop in props){
        if (omitPropNames == null ? void 0 : omitPropNames.has(prop)) {
            continue;
        }
        if ((omitEventNames == null ? void 0 : omitEventNames.has(prop)) && funcRe.test(prop)) {
            continue;
        }
        if (funcRe.test(prop) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RFWDHYLZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMEventNames"].has(prop)) {
            continue;
        }
        if (omitDataProps && propRe.test(prop)) {
            continue;
        }
        if (omitEventProps && funcRe.test(prop)) {
            continue;
        }
        if (Object.prototype.hasOwnProperty.call(props, prop) && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RFWDHYLZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMPropNames"].has(prop) || labelable && ariaRe.test(prop) || (propNames == null ? void 0 : propNames.has(prop)) || propRe.test(prop)) || funcRe.test(prop)) {
            filteredProps[prop] = props[prop];
        }
    }
    return filteredProps;
}
;
}),
"[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-FGM523TA.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValidChildren",
    ()=>getValidChildren,
    "pickChildren",
    ()=>pickChildren
]);
// src/children.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function getValidChildren(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter((child)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child));
}
var pickChildren = (children, targetChild)=>{
    var _a;
    let target = [];
    const withoutTargetChildren = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (item)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(item)) return item;
        if (item.type === targetChild) {
            target.push(item);
            return null;
        }
        return item;
    })) == null ? void 0 : _a.filter(Boolean);
    const targetChildren = target.length >= 0 ? target : void 0;
    return [
        withoutTargetChildren,
        targetChildren
    ];
};
;
}),
"[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areRectsIntersecting",
    ()=>areRectsIntersecting,
    "canUseDOM",
    ()=>canUseDOM,
    "createDOMRef",
    ()=>createDOMRef,
    "createFocusableRef",
    ()=>createFocusableRef,
    "detectBrowser",
    ()=>detectBrowser,
    "detectDeviceType",
    ()=>detectDeviceType,
    "detectOS",
    ()=>detectOS,
    "detectTouch",
    ()=>detectTouch,
    "getUserAgentBrowser",
    ()=>getUserAgentBrowser,
    "getUserAgentOS",
    ()=>getUserAgentOS,
    "isBrowser",
    ()=>isBrowser,
    "useDOMRef",
    ()=>useDOMRef,
    "useFocusableRef",
    ()=>useFocusableRef,
    "useSyncRef",
    ()=>useSyncRef
]);
// src/dom.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
function getUserAgentBrowser(navigator) {
    const { userAgent: ua, vendor } = navigator;
    const android = /(android)/i.test(ua);
    switch(true){
        case /CriOS/.test(ua):
            return "Chrome for iOS";
        case /Edg\//.test(ua):
            return "Edge";
        case android && /Silk\//.test(ua):
            return "Silk";
        case /Chrome/.test(ua) && /Google Inc/.test(vendor):
            return "Chrome";
        case /Firefox\/\d+\.\d+$/.test(ua):
            return "Firefox";
        case android:
            return "AOSP";
        case /MSIE|Trident/.test(ua):
            return "IE";
        case /Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua):
            return "Safari";
        case /AppleWebKit/.test(ua):
            return "WebKit";
        default:
            return null;
    }
}
function getUserAgentOS(navigator) {
    const { userAgent: ua, platform } = navigator;
    switch(true){
        case /Android/.test(ua):
            return "Android";
        case /iPhone|iPad|iPod/.test(platform):
            return "iOS";
        case /Win/.test(platform):
            return "Windows";
        case /Mac/.test(platform):
            return "Mac";
        case /CrOS/.test(ua):
            return "Chrome OS";
        case /Firefox/.test(ua):
            return "Firefox OS";
        default:
            return null;
    }
}
function detectDeviceType(navigator) {
    const { userAgent: ua } = navigator;
    if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua)) return "tablet";
    if (/(mobi)/i.test(ua)) return "phone";
    return "desktop";
}
function detectOS(os) {
    if (!isBrowser) return false;
    return getUserAgentOS(window.navigator) === os;
}
function detectBrowser(browser) {
    if (!isBrowser) return false;
    return getUserAgentBrowser(window.navigator) === browser;
}
function detectTouch() {
    if (!isBrowser) return false;
    return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
}
function createDOMRef(ref) {
    return {
        UNSAFE_getDOMNode () {
            return ref.current;
        }
    };
}
function createFocusableRef(domRef, focusableRef = domRef) {
    return {
        ...createDOMRef(domRef),
        focus () {
            if (focusableRef.current) {
                focusableRef.current.focus();
            }
        }
    };
}
function useDOMRef(ref) {
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "useDOMRef.useImperativeHandle": ()=>domRef.current
    }["useDOMRef.useImperativeHandle"]);
    return domRef;
}
function useFocusableRef(ref, focusableRef) {
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "useFocusableRef.useImperativeHandle": ()=>createFocusableRef(domRef, focusableRef)
    }["useFocusableRef.useImperativeHandle"]);
    return domRef;
}
function useSyncRef(context, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSyncRef.useLayoutEffect": ()=>{
            if (context && context.ref && ref && ref.current) {
                context.ref.current = ref.current;
                return ({
                    "useSyncRef.useLayoutEffect": ()=>{
                        var _a;
                        if ((_a = context.ref) == null ? void 0 : _a.current) {
                            context.ref.current = null;
                        }
                    }
                })["useSyncRef.useLayoutEffect"];
            }
        }
    }["useSyncRef.useLayoutEffect"], [
        context,
        ref
    ]);
}
function areRectsIntersecting(rect1, rect2) {
    return rect1 && rect2 && rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
}
;
}),
"[project]/node_modules/@nextui-org/react-utils/dist/chunk-6UBKM7F3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsHydrated",
    ()=>useIsHydrated
]);
// src/use-is-hydrated.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function useIsHydrated() {
    const subscribe = ()=>()=>{};
    return __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](subscribe, {
        "useIsHydrated.useSyncExternalStore": ()=>true
    }["useIsHydrated.useSyncExternalStore"], {
        "useIsHydrated.useSyncExternalStore": ()=>false
    }["useIsHydrated.useSyncExternalStore"]);
}
;
}),
"[project]/node_modules/@nextui-org/ripple/dist/chunk-A6KBW6T5.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRipple",
    ()=>useRipple
]);
// src/use-ripple.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function useRipple(props = {}) {
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const onPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRipple.useCallback[onPress]": (event)=>{
            const trigger = event.target;
            const size = Math.max(trigger.clientWidth, trigger.clientHeight);
            setRipples({
                "useRipple.useCallback[onPress]": (prevRipples)=>[
                        ...prevRipples,
                        {
                            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueID"])(prevRipples.length.toString()),
                            size,
                            x: event.x - size / 2,
                            y: event.y - size / 2
                        }
                    ]
            }["useRipple.useCallback[onPress]"]);
        }
    }["useRipple.useCallback[onPress]"], []);
    const onClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRipple.useCallback[onClear]": (key)=>{
            setRipples({
                "useRipple.useCallback[onClear]": (prevState)=>prevState.filter({
                        "useRipple.useCallback[onClear]": (ripple)=>ripple.key !== key
                    }["useRipple.useCallback[onClear]"])
            }["useRipple.useCallback[onClear]"]);
        }
    }["useRipple.useCallback[onClear]"], []);
    return {
        ripples,
        onClear,
        onPress,
        ...props
    };
}
;
}),
"[project]/node_modules/@nextui-org/ripple/dist/chunk-MRKSP4U5.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ripple_default",
    ()=>ripple_default
]);
// src/ripple.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MNNRULGA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MNNRULGA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var domAnimation = ()=>__turbopack_context__.A("[project]/node_modules/@nextui-org/dom-animation/dist/index.mjs [app-client] (ecmascript, async loader)").then((res)=>res.default);
var Ripple = (props)=>{
    const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: ripples.map((ripple)=>{
            const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MNNRULGA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
                features: domAnimation,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span, {
                        animate: {
                            transform: "scale(2)",
                            opacity: 0
                        },
                        className: "nextui-ripple",
                        exit: {
                            opacity: 0
                        },
                        initial: {
                            transform: "scale(0)",
                            opacity: 0.35
                        },
                        style: {
                            position: "absolute",
                            backgroundColor: color,
                            borderRadius: "100%",
                            transformOrigin: "center",
                            pointerEvents: "none",
                            overflow: "hidden",
                            inset: 0,
                            zIndex: 0,
                            top: ripple.y,
                            left: ripple.x,
                            width: `${ripple.size}px`,
                            height: `${ripple.size}px`,
                            ...style
                        },
                        transition: {
                            duration
                        },
                        onAnimationComplete: ()=>{
                            onClear(ripple.key);
                        },
                        ...motionProps
                    })
                })
            }, ripple.key);
        })
    });
};
Ripple.displayName = "NextUI.Ripple";
var ripple_default = Ripple;
;
}),
"[project]/node_modules/@nextui-org/ripple/dist/chunk-MRKSP4U5.mjs [app-client] (ecmascript) <export ripple_default as Ripple>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ripple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripple_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/ripple/dist/chunk-MRKSP4U5.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
 //# sourceMappingURL=is-object.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
 //# sourceMappingURL=format-error-message.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
 //# sourceMappingURL=warn-once.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
 //# sourceMappingURL=errors.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
 //# sourceMappingURL=time-conversion.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
 //# sourceMappingURL=is-numerical-string.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
 //# sourceMappingURL=is-zero-value-string.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
 //# sourceMappingURL=array.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
 //# sourceMappingURL=subscription-manager.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
 //# sourceMappingURL=memo.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
 //# sourceMappingURL=is-bezier-definition.mjs.map
}),
"[project]/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
 //# sourceMappingURL=velocity-per-second.mjs.map
}),
"[project]/node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSafeLayoutEffect",
    ()=>useSafeLayoutEffect
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
;
}),
"[project]/node_modules/@nextui-org/use-image/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shouldShowFallbackImage",
    ()=>shouldShowFallbackImage,
    "useImage",
    ()=>useImage
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$6UBKM7F3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-6UBKM7F3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
;
function useImage(props = {}) {
    const { onLoad, onError, ignoreFallback } = props;
    const isHydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$6UBKM7F3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsHydrated"])();
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isHydrated ? new Image() : null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImage.useEffect": ()=>{
            if (!imageRef.current) return;
            imageRef.current.onload = ({
                "useImage.useEffect": (event)=>{
                    flush();
                    setStatus("loaded");
                    onLoad == null ? void 0 : onLoad(event);
                }
            })["useImage.useEffect"];
            imageRef.current.onerror = ({
                "useImage.useEffect": (error)=>{
                    flush();
                    setStatus("failed");
                    onError == null ? void 0 : onError(error);
                }
            })["useImage.useEffect"];
        }
    }["useImage.useEffect"], [
        imageRef.current
    ]);
    const flush = ()=>{
        if (imageRef.current) {
            imageRef.current.onload = null;
            imageRef.current.onerror = null;
            imageRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "useImage.useSafeLayoutEffect": ()=>{
            if (isHydrated) {
                setStatus(setImageAndGetInitialStatus(props, imageRef));
            }
        }
    }["useImage.useSafeLayoutEffect"], [
        isHydrated
    ]);
    return ignoreFallback ? "loaded" : status;
}
function setImageAndGetInitialStatus(props, imageRef) {
    const { loading, src, srcSet, crossOrigin, sizes, ignoreFallback } = props;
    if (!src) return "pending";
    if (ignoreFallback) return "loaded";
    const img = new Image();
    img.src = src;
    if (crossOrigin) img.crossOrigin = crossOrigin;
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;
    if (loading) img.loading = loading;
    imageRef.current = img;
    if (img.complete && img.naturalWidth) {
        return "loaded";
    }
    return "loading";
}
var shouldShowFallbackImage = (status, fallbackStrategy)=>status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";
;
}),
"[project]/node_modules/@nextui-org/image/dist/chunk-7THIFN6D.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImage",
    ()=>useImage
]);
// src/use-image.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$TOQXZATI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-TOQXZATI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$image$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-image/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useImage(originalProps) {
    var _a, _b;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$TOQXZATI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"].variantKeys);
    const { ref, as, src, className, classNames, loading, isBlurred, fallbackSrc, isLoading: isLoadingProp, disableSkeleton = !!fallbackSrc, removeWrapper = false, onError, onLoad, srcSet, sizes, crossOrigin, ...otherProps } = props;
    const imageStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$image$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImage"])({
        src,
        loading,
        onError,
        onLoad,
        ignoreFallback: false,
        srcSet,
        sizes,
        crossOrigin
    });
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const isImgLoaded = imageStatus === "loaded" && !isLoadingProp;
    const isLoading = imageStatus === "loading" || isLoadingProp;
    const isZoomed = originalProps.isZoomed;
    const Component = as || "img";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { w, h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useImage.useMemo": ()=>{
            return {
                w: props.width ? typeof props.width === "number" ? `${props.width}px` : props.width : "fit-content",
                h: props.height ? typeof props.height === "number" ? `${props.height}px` : props.height : "auto"
            };
        }
    }["useImage.useMemo"], [
        props == null ? void 0 : props.width,
        props == null ? void 0 : props.height
    ]);
    const showFallback = (!src || !isImgLoaded) && !!fallbackSrc;
    const showSkeleton = isLoading && !disableSkeleton;
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useImage.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$TOQXZATI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"])({
                ...variantProps,
                disableAnimation,
                showSkeleton
            })
    }["useImage.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation,
        showSkeleton
    ]);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, classNames == null ? void 0 : classNames.img);
    const getImgProps = (props2 = {})=>{
        const imgStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseStyles, props2 == null ? void 0 : props2.className);
        return {
            src,
            ref: domRef,
            "data-loaded": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isImgLoaded),
            className: slots.img({
                class: imgStyles
            }),
            loading,
            srcSet,
            sizes,
            crossOrigin,
            ...otherProps,
            style: {
                ...(otherProps == null ? void 0 : otherProps.height) && {
                    height: h
                },
                ...props2.style,
                ...otherProps.style
            }
        };
    };
    const getWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImage.useCallback[getWrapperProps]": ()=>{
            const fallbackStyle = showFallback ? {
                backgroundImage: `url(${fallbackSrc})`
            } : {};
            return {
                className: slots.wrapper({
                    class: classNames == null ? void 0 : classNames.wrapper
                }),
                style: {
                    ...fallbackStyle,
                    maxWidth: w
                }
            };
        }
    }["useImage.useCallback[getWrapperProps]"], [
        slots,
        showFallback,
        fallbackSrc,
        classNames == null ? void 0 : classNames.wrapper,
        w
    ]);
    const getBlurredImgProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImage.useCallback[getBlurredImgProps]": ()=>{
            return {
                src,
                "aria-hidden": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(true),
                className: slots.blurredImg({
                    class: classNames == null ? void 0 : classNames.blurredImg
                })
            };
        }
    }["useImage.useCallback[getBlurredImgProps]"], [
        slots,
        src,
        classNames == null ? void 0 : classNames.blurredImg
    ]);
    return {
        Component,
        domRef,
        slots,
        classNames,
        isBlurred,
        disableSkeleton,
        fallbackSrc,
        removeWrapper,
        isZoomed,
        isLoading,
        getImgProps,
        getWrapperProps,
        getBlurredImgProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "image_default",
    ()=>image_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$7THIFN6D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/image/dist/chunk-7THIFN6D.mjs [app-client] (ecmascript)");
// src/image.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
var Image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, domRef, slots, classNames, isBlurred, isZoomed, fallbackSrc, removeWrapper, disableSkeleton, getImgProps, getWrapperProps, getBlurredImgProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$7THIFN6D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImage"])({
        ...props,
        ref
    });
    const img = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        ...getImgProps()
    });
    if (removeWrapper) {
        return img;
    }
    const zoomed = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: slots.zoomedWrapper({
            class: classNames == null ? void 0 : classNames.zoomedWrapper
        }),
        children: img
    });
    if (isBlurred) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ...getWrapperProps(),
            children: [
                isZoomed ? zoomed : img,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(img, getBlurredImgProps())
            ]
        });
    }
    if (isZoomed || !disableSkeleton || fallbackSrc) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ...getWrapperProps(),
            children: [
                " ",
                isZoomed ? zoomed : img
            ]
        });
    }
    return img;
});
Image.displayName = "NextUI.Image";
var image_default = Image;
;
}),
"[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript) <export image_default as Image>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/chip/dist/chunk-TWKIP7BA.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChip",
    ()=>useChip
]);
// src/use-chip.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH4RNLJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-GH4RNLJX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function useChip(originalProps) {
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH4RNLJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip"].variantKeys);
    const { ref, as, children, avatar, startContent, endContent, onClose, classNames, className, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const isCloseable = !!onClose;
    const isDotVariant = originalProps.variant === "dot";
    const { focusProps: closeFocusProps, isFocusVisible: isCloseButtonFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])();
    const isOneChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChip.useMemo[isOneChar]": ()=>typeof children === "string" && (children == null ? void 0 : children.length) === 1
    }["useChip.useMemo[isOneChar]"], [
        children
    ]);
    const hasStartContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChip.useMemo[hasStartContent]": ()=>!!avatar || !!startContent
    }["useChip.useMemo[hasStartContent]"], [
        avatar,
        startContent
    ]);
    const hasEndContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChip.useMemo[hasEndContent]": ()=>!!endContent || isCloseable
    }["useChip.useMemo[hasEndContent]"], [
        endContent,
        isCloseable
    ]);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useChip.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$GH4RNLJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip"])({
                ...variantProps,
                hasStartContent,
                hasEndContent,
                isOneChar,
                isCloseable,
                isCloseButtonFocusVisible
            })
    }["useChip.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        isCloseButtonFocusVisible,
        hasStartContent,
        hasEndContent,
        isOneChar,
        isCloseable
    ]);
    const { pressProps: closePressProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePress"])({
        isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
        onPress: onClose
    });
    const getChipProps = ()=>{
        return {
            ref: domRef,
            className: slots.base({
                class: baseStyles
            }),
            ...otherProps
        };
    };
    const getCloseButtonProps = ()=>{
        return {
            role: "button",
            tabIndex: 0,
            className: slots.closeButton({
                class: classNames == null ? void 0 : classNames.closeButton
            }),
            "aria-label": "close chip",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(closePressProps, closeFocusProps)
        };
    };
    const getAvatarClone = (avatar2)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(avatar2)) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(avatar2, {
            className: slots.avatar({
                class: classNames == null ? void 0 : classNames.avatar
            })
        });
    };
    const getContentClone = (content)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(content) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(content, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("max-h-[80%]", content.props.className)
        }) : null;
    return {
        Component,
        children,
        slots,
        classNames,
        isDot: isDotVariant,
        isCloseable,
        startContent: getAvatarClone(avatar) || getContentClone(startContent),
        endContent: getContentClone(endContent),
        getCloseButtonProps,
        getChipProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chip_default",
    ()=>chip_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$TWKIP7BA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/chip/dist/chunk-TWKIP7BA.mjs [app-client] (ecmascript)");
// src/chip.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, children, slots, classNames, isDot, isCloseable, startContent, endContent, getCloseButtonProps, getChipProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$TWKIP7BA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChip"])({
        ...props,
        ref
    });
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Chip.useMemo[start]": ()=>{
            if (isDot && !startContent) {
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: slots.dot({
                        class: classNames == null ? void 0 : classNames.dot
                    })
                });
            }
            return startContent;
        }
    }["Chip.useMemo[start]"], [
        slots,
        startContent,
        isDot
    ]);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Chip.useMemo[end]": ()=>{
            if (isCloseable) {
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    ...getCloseButtonProps(),
                    children: endContent || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseFilledIcon"], {})
                });
            }
            return endContent;
        }
    }["Chip.useMemo[end]"], [
        endContent,
        isCloseable,
        getCloseButtonProps
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getChipProps(),
        children: [
            start,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: slots.content({
                    class: classNames == null ? void 0 : classNames.content
                }),
                children
            }),
            end
        ]
    });
});
Chip.displayName = "NextUI.Chip";
var chip_default = Chip;
;
}),
"[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseFilledIcon",
    ()=>CloseFilledIcon
]);
// src/close-filled.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
var CloseFilledIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
            fill: "currentColor"
        })
    });
;
}),
"[project]/node_modules/@nextui-org/spinner/dist/chunk-GF2IUMUE.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpinner",
    ()=>useSpinner
]);
// src/use-spinner.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$DBPAK7QN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-DBPAK7QN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function useSpinner(originalProps) {
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$DBPAK7QN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner"].variantKeys);
    const { children, className, classNames, label: labelProp, ...otherProps } = props;
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSpinner.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$DBPAK7QN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner"])({
                ...variantProps
            })
    }["useSpinner.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps)
    ]);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const label = labelProp || children;
    const ariaLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSpinner.useMemo[ariaLabel]": ()=>{
            if (label && typeof label === "string") {
                return label;
            }
            return !otherProps["aria-label"] ? "Loading" : "";
        }
    }["useSpinner.useMemo[ariaLabel]"], [
        children,
        label,
        otherProps["aria-label"]
    ]);
    const getSpinnerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpinner.useCallback[getSpinnerProps]": ()=>({
                "aria-label": ariaLabel,
                className: slots.base({
                    class: baseStyles
                }),
                ...otherProps
            })
    }["useSpinner.useCallback[getSpinnerProps]"], [
        ariaLabel,
        slots,
        baseStyles,
        otherProps
    ]);
    return {
        label,
        slots,
        classNames,
        getSpinnerProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spinner_default",
    ()=>spinner_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$GF2IUMUE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/spinner/dist/chunk-GF2IUMUE.mjs [app-client] (ecmascript)");
// src/spinner.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Spinner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { slots, classNames, label, getSpinnerProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$GF2IUMUE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpinner"])({
        ...props
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        ...getSpinnerProps(),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: slots.wrapper({
                    class: classNames == null ? void 0 : classNames.wrapper
                }),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("i", {
                        className: slots.circle1({
                            class: classNames == null ? void 0 : classNames.circle1
                        })
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("i", {
                        className: slots.circle2({
                            class: classNames == null ? void 0 : classNames.circle2
                        })
                    })
                ]
            }),
            label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: slots.label({
                    class: classNames == null ? void 0 : classNames.label
                }),
                children: label
            })
        ]
    });
});
Spinner.displayName = "NextUI.Spinner";
var spinner_default = Spinner;
;
}),
"[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-CLWTNWD4.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavbarProvider",
    ()=>NavbarProvider,
    "useNavbarContext",
    ()=>useNavbarContext
]);
// src/navbar-context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs [app-client] (ecmascript)");
"use client";
;
var [NavbarProvider, useNavbarContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "NavbarContext",
    strict: true,
    errorMessage: "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"
});
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-UJDFI5KD.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuVariants",
    ()=>menuVariants
]);
"use client";
// src/navbar-menu-transitions.ts
var menuVariants = {
    enter: {
        height: "calc(100vh - var(--navbar-height))",
        transition: {
            duration: 0.3,
            easings: "easeOut"
        }
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.25,
            easings: "easeIn"
        }
    }
};
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-QKHJHOQ7.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbar_menu_default",
    ()=>navbar_menu_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-CLWTNWD4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$UJDFI5KD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-UJDFI5KD.mjs [app-client] (ecmascript)");
// src/navbar-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$Overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/overlays/dist/Overlay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
var domAnimation = ()=>__turbopack_context__.A("[project]/node_modules/@nextui-org/dom-animation/dist/index.mjs [app-client] (ecmascript, async loader)").then((res)=>res.default);
var NavbarMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a, _b;
    const { className, children, portalContainer, motionProps, style, ...otherProps } = props;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, isMenuOpen, height, disableAnimation, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbarContext"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.menu, className);
    const OverlayComponent = isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$Overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"] : __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment;
    const contents = disableAnimation ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayComponent, {
        portalContainer,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            ref: domRef,
            className: (_a = slots.menu) == null ? void 0 : _a.call(slots, {
                class: styles
            }),
            "data-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isMenuOpen),
            style: {
                "--navbar-height": typeof height === "number" ? `${height}px` : height
            },
            ...otherProps,
            children
        })
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: isMenuOpen ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$Overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            portalContainer,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
                features: domAnimation,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].ul, {
                    ref: domRef,
                    layoutScroll: true,
                    animate: "enter",
                    className: (_b = slots.menu) == null ? void 0 : _b.call(slots, {
                        class: styles
                    }),
                    "data-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isMenuOpen),
                    exit: "exit",
                    initial: "exit",
                    style: {
                        "--navbar-height": typeof height === "number" ? `${height}px` : height,
                        ...style
                    },
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$UJDFI5KD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuVariants"],
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(motionProps, otherProps),
                    children
                })
            })
        }) : null
    });
    return contents;
});
NavbarMenu.displayName = "NextUI.NavbarMenu";
var navbar_menu_default = NavbarMenu;
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-SBDILHQN.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOnScrollVariants",
    ()=>hideOnScrollVariants
]);
// src/navbar-transitions.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$framer$2d$utils$2f$dist$2f$chunk$2d$736YWA4T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/framer-utils/dist/chunk-736YWA4T.mjs [app-client] (ecmascript)");
"use client";
;
var hideOnScrollVariants = {
    visible: {
        y: 0,
        transition: {
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$framer$2d$utils$2f$dist$2f$chunk$2d$736YWA4T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_EASINGS"].easeOut
        }
    },
    hidden: {
        y: "-100%",
        transition: {
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$framer$2d$utils$2f$dist$2f$chunk$2d$736YWA4T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_EASINGS"].easeIn
        }
    }
};
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-HY4MGMIV.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavbar",
    ()=>useNavbar
]);
// src/use-navbar.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$PMUB6T6D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-PMUB6T6D.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useResizeObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useResizeObserver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$scroll$2d$position$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-scroll-position/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-stately/utils/dist/useControlledState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$usePreventScroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/overlays/dist/usePreventScroll.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function useNavbar(originalProps) {
    var _a, _b;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$PMUB6T6D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar"].variantKeys);
    const { ref, as, parentRef, height = "4rem", shouldHideOnScroll = false, disableScrollHandler = false, shouldBlockScroll = true, onScrollPositionChange, isMenuOpen: isMenuOpenProp, isMenuDefaultOpen, onMenuOpenChange = ()=>{}, motionProps, className, classNames, ...otherProps } = props;
    const Component = as || "nav";
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const prevWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const navHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMenuOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavbar.useCallback[handleMenuOpenChange]": (isOpen)=>{
            onMenuOpenChange(isOpen || false);
        }
    }["useNavbar.useCallback[handleMenuOpenChange]"], [
        onMenuOpenChange
    ]);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledState"])(isMenuOpenProp, isMenuDefaultOpen != null ? isMenuDefaultOpen : false, handleMenuOpenChange);
    const updateWidth = ()=>{
        if (domRef.current) {
            const width = domRef.current.offsetWidth;
            if (width !== prevWidth.current) {
                prevWidth.current = width;
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$usePreventScroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreventScroll"])({
        isDisabled: !(shouldBlockScroll && isMenuOpen)
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useResizeObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])({
        ref: domRef,
        onResize: {
            "useNavbar.useResizeObserver": ()=>{
                var _a2;
                const currentWidth = (_a2 = domRef.current) == null ? void 0 : _a2.offsetWidth;
                const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
                if (currentWidth && currentWidth + scrollWidth == prevWidth.current) {
                    return;
                }
                if (currentWidth !== prevWidth.current) {
                    updateWidth();
                    setIsMenuOpen(false);
                }
            }
        }["useNavbar.useResizeObserver"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavbar.useEffect": ()=>{
            var _a2;
            updateWidth();
            navHeight.current = ((_a2 = domRef.current) == null ? void 0 : _a2.offsetHeight) || 0;
        }
    }["useNavbar.useEffect"], []);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNavbar.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$PMUB6T6D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar"])({
                ...variantProps,
                disableAnimation,
                hideOnScroll: shouldHideOnScroll
            })
    }["useNavbar.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation,
        shouldHideOnScroll
    ]);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$scroll$2d$position$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollPosition"])({
        elementRef: parentRef,
        isEnabled: shouldHideOnScroll || !disableScrollHandler,
        callback: {
            "useNavbar.useScrollPosition": ({ prevPos, currPos })=>{
                onScrollPositionChange == null ? void 0 : onScrollPositionChange(currPos.y);
                if (shouldHideOnScroll) {
                    setIsHidden({
                        "useNavbar.useScrollPosition": (prev)=>{
                            const next = currPos.y > prevPos.y && currPos.y > navHeight.current;
                            return next !== prev ? next : prev;
                        }
                    }["useNavbar.useScrollPosition"]);
                }
            }
        }["useNavbar.useScrollPosition"]
    });
    const getBaseProps = (props2 = {})=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(otherProps, props2),
            "data-hidden": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHidden),
            "data-menu-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isMenuOpen),
            ref: domRef,
            className: slots.base({
                class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseStyles, props2 == null ? void 0 : props2.className)
            }),
            style: {
                "--navbar-height": typeof height === "number" ? `${height}px` : height,
                ...otherProps == null ? void 0 : otherProps.style,
                ...props2 == null ? void 0 : props2.style
            }
        });
    const getWrapperProps = (props2 = {})=>({
            ...props2,
            "data-menu-open": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isMenuOpen),
            className: slots.wrapper({
                class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className)
            })
        });
    return {
        Component,
        slots,
        domRef,
        height,
        isHidden,
        disableAnimation,
        shouldHideOnScroll,
        isMenuOpen,
        classNames,
        setIsMenuOpen,
        motionProps,
        getBaseProps,
        getWrapperProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbar_default",
    ()=>navbar_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$QKHJHOQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-QKHJHOQ7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$SBDILHQN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-SBDILHQN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$HY4MGMIV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-HY4MGMIV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-CLWTNWD4.mjs [app-client] (ecmascript)");
// src/navbar.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$FGM523TA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-FGM523TA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
var domAnimation = ()=>__turbopack_context__.A("[project]/node_modules/@nextui-org/dom-animation/dist/index.mjs [app-client] (ecmascript, async loader)").then((res)=>res.default);
var Navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, ...otherProps } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$HY4MGMIV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbar"])({
        ...otherProps,
        ref
    });
    const Component = context.Component;
    const [childrenWithoutMenu, menu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$FGM523TA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickChildren"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$QKHJHOQ7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar_menu_default"]);
    const content = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("header", {
                ...context.getWrapperProps(),
                children: childrenWithoutMenu
            }),
            menu
        ]
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarProvider"], {
        value: context,
        children: context.shouldHideOnScroll ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
            features: domAnimation,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].nav, {
                animate: context.isHidden ? "hidden" : "visible",
                initial: false,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$SBDILHQN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOnScrollVariants"],
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(context.getBaseProps(), context.motionProps),
                children: content
            })
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...context.getBaseProps(),
            children: content
        })
    });
});
Navbar.displayName = "NextUI.Navbar";
var navbar_default = Navbar;
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs [app-client] (ecmascript) <export navbar_default as Navbar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$5HDGDWGW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navbar_brand_default",
    ()=>navbar_brand_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-CLWTNWD4.mjs [app-client] (ecmascript)");
// src/navbar-brand.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var NavbarBrand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$CLWTNWD4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbarContext"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.brand, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.brand) == null ? void 0 : _a.call(slots, {
            class: styles
        }),
        ...otherProps,
        children
    });
});
NavbarBrand.displayName = "NextUI.NavbarBrand";
var navbar_brand_default = NavbarBrand;
;
}),
"[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-client] (ecmascript) <export navbar_brand_default as NavbarBrand>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavbarBrand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbar_brand_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@react-aria/overlays/dist/PortalProvider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalContext",
    ()=>$96b38030c423d352$export$60d741e20e0aa309,
    "UNSTABLE_PortalProvider",
    ()=>$96b38030c423d352$export$db995ea7163b4b67,
    "useUNSTABLE_PortalContext",
    ()=>$96b38030c423d352$export$574e9b0fb070c3b0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $96b38030c423d352$export$60d741e20e0aa309 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function $96b38030c423d352$export$db995ea7163b4b67(props) {
    let { getContainer: getContainer } = props;
    let { getContainer: ctxGetContainer } = $96b38030c423d352$export$574e9b0fb070c3b0();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($96b38030c423d352$export$60d741e20e0aa309.Provider, {
        value: {
            getContainer: getContainer === null ? undefined : getContainer !== null && getContainer !== void 0 ? getContainer : ctxGetContainer
        }
    }, props.children);
}
function $96b38030c423d352$export$574e9b0fb070c3b0() {
    var _useContext;
    return (_useContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($96b38030c423d352$export$60d741e20e0aa309)) !== null && _useContext !== void 0 ? _useContext : {};
}
;
 //# sourceMappingURL=PortalProvider.module.js.map
}),
"[project]/node_modules/@react-aria/overlays/dist/Overlay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>$337b884510726a0d$export$c6fdb837b070b4ff,
    "OverlayContext",
    ()=>$337b884510726a0d$export$a2200b96afd16271,
    "useOverlayFocusContain",
    ()=>$337b884510726a0d$export$14c98a7594375490
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$PortalProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/overlays/dist/PortalProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$PressResponder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/PressResponder.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$FocusScope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/FocusScope.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSSR"])();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$overlays$2f$dist$2f$PortalProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUNSTABLE_PortalContext"])();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$FocusScope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"]), {
        restoreFocus: true,
        contain: contain && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$PressResponder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearPressResponder"]), null, contents));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}
;
 //# sourceMappingURL=Overlay.module.js.map
}),
"[project]/node_modules/@react-aria/overlays/dist/usePreventScroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreventScroll",
    ()=>$49c51c25361d4cd2$export$ee0f7cc6afcd1c18
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$getScrollParent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/getScrollParent.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $49c51c25361d4cd2$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let restoreScrollableStyles;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$getScrollParent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParent"])(e.target, true);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead.
        if (scrollable instanceof HTMLElement && window.getComputedStyle(scrollable).overscrollBehavior === 'auto') restoreScrollableStyles = $49c51c25361d4cd2$var$setStyle(scrollable, 'overscrollBehavior', 'contain');
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            setupStyles();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
        if (restoreScrollableStyles) restoreScrollableStyles();
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            setupStyles();
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let restoreStyles = null;
    let setupStyles = ()=>{
        if (restoreStyles) return;
        let onWindowScroll = ()=>{
            // Last resort. If the window scrolled, scroll it back to the top.
            // It should always be at the top because the body will have a negative margin (see below).
            window.scrollTo(0, 0);
        };
        // Record the original scroll position so we can restore it.
        // Then apply a negative margin to the body to offset it by the scroll position. This will
        // enable us to scroll the window to the top, which is required for the rest of this to work.
        let scrollX = window.pageXOffset;
        let scrollY = window.pageYOffset;
        restoreStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])($49c51c25361d4cd2$var$addEvent(window, 'scroll', onWindowScroll), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'), $49c51c25361d4cd2$var$setStyle(document.body, 'marginTop', `-${scrollY}px`), ()=>{
            window.scrollTo(scrollX, scrollY);
        });
        // Scroll to the top. The negative margin on the body will make this appear the same.
        window.scrollTo(0, 0);
    };
    let removeEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'focus', onFocus, true));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreScrollableStyles === null || restoreScrollableStyles === void 0 ? void 0 : restoreScrollableStyles();
        restoreStyles === null || restoreStyles === void 0 ? void 0 : restoreStyles();
        removeEvents();
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    // internal function, so it's ok to ignore the difficult to fix type error
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$getScrollParent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParent"])(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = nextTarget.getBoundingClientRect().top;
            if (targetTop > scrollableTop + nextTarget.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        nextTarget = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
;
 //# sourceMappingURL=usePreventScroll.module.js.map
}),
"[project]/node_modules/@nextui-org/framer-utils/dist/chunk-736YWA4T.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSITION_DEFAULTS",
    ()=>TRANSITION_DEFAULTS,
    "TRANSITION_EASINGS",
    ()=>TRANSITION_EASINGS,
    "TRANSITION_VARIANTS",
    ()=>TRANSITION_VARIANTS
]);
"use client";
// src/transition-utils.ts
var TRANSITION_EASINGS = {
    ease: [
        0.36,
        0.66,
        0.4,
        1
    ],
    easeIn: [
        0.4,
        0,
        1,
        1
    ],
    easeOut: [
        0,
        0,
        0.2,
        1
    ],
    easeInOut: [
        0.4,
        0,
        0.2,
        1
    ],
    spring: [
        0.155,
        1.105,
        0.295,
        1.12
    ],
    springOut: [
        0.57,
        -0.15,
        0.62,
        0.07
    ],
    softSpring: [
        0.16,
        1.11,
        0.3,
        1.02
    ]
};
var TRANSITION_DEFAULTS = {
    enter: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
    },
    exit: {
        duration: 0.1,
        ease: TRANSITION_EASINGS.easeIn
    }
};
var TRANSITION_VARIANTS = {
    scaleSpring: {
        enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2
            }
        },
        exit: {
            transform: "scale(0.85)",
            opacity: 0,
            transition: {
                type: "easeOut",
                duration: 0.15
            }
        }
    },
    scaleSpringOpacity: {
        initial: {
            opacity: 0,
            transform: "scale(0.8)"
        },
        enter: {
            opacity: 1,
            transform: "scale(1)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            transform: "scale(0.96)",
            transition: {
                type: "easeOut",
                bounce: 0,
                duration: 0.15
            }
        }
    },
    scale: {
        enter: {
            scale: 1
        },
        exit: {
            scale: 0.95
        }
    },
    scaleFadeIn: {
        enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: TRANSITION_EASINGS.easeIn
            }
        },
        exit: {
            transform: "scale(0.95)",
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: TRANSITION_EASINGS.easeOut
            }
        }
    },
    scaleInOut: {
        enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: TRANSITION_EASINGS.ease
            }
        },
        exit: {
            transform: "scale(1.03)",
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: TRANSITION_EASINGS.ease
            }
        }
    },
    fade: {
        enter: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: TRANSITION_EASINGS.ease
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: TRANSITION_EASINGS.ease
            }
        }
    },
    collapse: {
        enter: {
            opacity: 1,
            height: "auto",
            transition: {
                height: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                },
                opacity: {
                    easings: "ease",
                    duration: 0.4
                }
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                easings: "ease",
                duration: 0.3
            }
        }
    }
};
;
}),
"[project]/node_modules/@nextui-org/use-scroll-position/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollPosition",
    ()=>useScrollPosition
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var isBrowser = typeof window !== "undefined";
function getScrollPosition(element) {
    if (!isBrowser) return {
        x: 0,
        y: 0
    };
    if (!element) {
        return {
            x: window.scrollX,
            y: window.scrollY
        };
    }
    return {
        x: element.scrollLeft,
        y: element.scrollTop
    };
}
var useScrollPosition = (props)=>{
    const { elementRef, delay = 30, callback, isEnabled } = props;
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : {
        x: 0,
        y: 0
    });
    const throttleTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollPosition.useCallback[handler]": ()=>{
            const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);
            if (typeof callback === "function") {
                callback({
                    prevPos: position.current,
                    currPos
                });
            }
            position.current = currPos;
            throttleTimeout.current = null;
        }
    }["useScrollPosition.useCallback[handler]"], [
        callback,
        elementRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollPosition.useEffect": ()=>{
            if (!isEnabled) return;
            const handleScroll = {
                "useScrollPosition.useEffect.handleScroll": ()=>{
                    if (delay) {
                        if (throttleTimeout.current) {
                            clearTimeout(throttleTimeout.current);
                        }
                        throttleTimeout.current = setTimeout(handler, delay);
                    } else {
                        handler();
                    }
                }
            }["useScrollPosition.useEffect.handleScroll"];
            const target = (elementRef == null ? void 0 : elementRef.current) || window;
            target.addEventListener("scroll", handleScroll);
            return ({
                "useScrollPosition.useEffect": ()=>{
                    target.removeEventListener("scroll", handleScroll);
                    if (throttleTimeout.current) {
                        clearTimeout(throttleTimeout.current);
                        throttleTimeout.current = null;
                    }
                }
            })["useScrollPosition.useEffect"];
        }
    }["useScrollPosition.useEffect"], [
        elementRef == null ? void 0 : elementRef.current,
        delay,
        handler,
        isEnabled
    ]);
    return position.current;
};
;
}),
"[project]/node_modules/@react-stately/utils/dist/useControlledState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControlledState",
    ()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value || defaultValue);
    let isControlledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value !== undefined);
    let isControlled = value !== undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}
;
 //# sourceMappingURL=useControlledState.module.js.map
}),
"[project]/node_modules/@nextui-org/button/dist/chunk-BOMWXXSL.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroupProvider",
    ()=>ButtonGroupProvider,
    "useButtonGroupContext",
    ()=>useButtonGroupContext
]);
// src/button-group-context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs [app-client] (ecmascript)");
"use client";
;
var [ButtonGroupProvider, useButtonGroupContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "ButtonGroupContext",
    strict: false
});
;
}),
"[project]/node_modules/@nextui-org/button/dist/chunk-BZOXOCYW.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$BOMWXXSL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-BOMWXXSL.mjs [app-client] (ecmascript)");
// src/use-button.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$FIMGFFVI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-FIMGFFVI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-aria-button/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$A6KBW6T5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/ripple/dist/chunk-A6KBW6T5.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function useButton(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const groupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$BOMWXXSL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonGroupContext"])();
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const isInGroup = !!groupContext;
    const { ref, as, children, startContent: startContentProp, endContent: endContentProp, autoFocus, className, spinner, isLoading = false, disableRipple: disableRippleProp = false, fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false, radius = groupContext == null ? void 0 : groupContext.radius, size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md", color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default", variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid", disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false, isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false, isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false, spinnerPlacement = "start", onPress, onClick, ...otherProps } = props;
    const Component = as || "button";
    const shouldFilterDOMProps = typeof Component === "string";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const disableRipple = (_i = disableRippleProp || (globalContext == null ? void 0 : globalContext.disableRipple)) != null ? _i : disableAnimation;
    const { isFocusVisible, isFocused, focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus
    });
    const isDisabled = isDisabledProp || isLoading;
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useButton.useMemo[styles]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$FIMGFFVI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["button"])({
                size,
                color,
                variant,
                radius,
                fullWidth,
                isDisabled,
                isInGroup,
                disableAnimation,
                isIconOnly,
                className
            })
    }["useButton.useMemo[styles]"], [
        size,
        color,
        variant,
        radius,
        fullWidth,
        isDisabled,
        isInGroup,
        isIconOnly,
        disableAnimation,
        className
    ]);
    const { onPress: onRipplePressHandler, onClear: onClearRipple, ripples } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$A6KBW6T5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRipple"])();
    const handlePress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useButton.useCallback[handlePress]": (e)=>{
            if (disableRipple || isDisabled || disableAnimation) return;
            domRef.current && onRipplePressHandler(e);
        }
    }["useButton.useCallback[handlePress]"], [
        disableRipple,
        isDisabled,
        disableAnimation,
        domRef,
        onRipplePressHandler
    ]);
    const { buttonProps: ariaButtonProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAriaButton"])({
        elementType: as,
        isDisabled,
        onPress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(onPress, handlePress),
        onClick,
        ...otherProps
    }, domRef);
    const { isHovered, hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled
    });
    const getButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useButton.useCallback[getButtonProps]": (props2 = {})=>({
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isDisabled),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
                "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isPressed),
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
                "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered),
                "data-loading": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isLoading),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(ariaButtonProps, focusProps, hoverProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                    enabled: shouldFilterDOMProps
                }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props2))
            })
    }["useButton.useCallback[getButtonProps]"], [
        isLoading,
        isDisabled,
        isFocused,
        isPressed,
        shouldFilterDOMProps,
        isFocusVisible,
        isHovered,
        ariaButtonProps,
        focusProps,
        hoverProps,
        otherProps
    ]);
    const getIconClone = (icon)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(icon) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
            "aria-hidden": true,
            focusable: false,
            tabIndex: -1
        }) : null;
    const startContent = getIconClone(startContentProp);
    const endContent = getIconClone(endContentProp);
    const spinnerSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useButton.useMemo[spinnerSize]": ()=>{
            const buttonSpinnerSizeMap = {
                sm: "sm",
                md: "sm",
                lg: "md"
            };
            return buttonSpinnerSizeMap[size];
        }
    }["useButton.useMemo[spinnerSize]"], [
        size
    ]);
    const getRippleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useButton.useCallback[getRippleProps]": ()=>({
                ripples,
                onClear: onClearRipple
            })
    }["useButton.useCallback[getRippleProps]"], [
        ripples,
        onClearRipple
    ]);
    return {
        Component,
        children,
        domRef,
        spinner,
        styles,
        startContent,
        endContent,
        isLoading,
        spinnerPlacement,
        spinnerSize,
        disableRipple,
        getButtonProps,
        getRippleProps,
        isIconOnly
    };
}
;
}),
"[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "button_default",
    ()=>button_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$BZOXOCYW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-BZOXOCYW.mjs [app-client] (ecmascript)");
// src/button.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/ripple/dist/chunk-MRKSP4U5.mjs [app-client] (ecmascript) <export ripple_default as Ripple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, domRef, children, styles, spinnerSize, spinner = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
        color: "current",
        size: spinnerSize
    }), spinnerPlacement, startContent, endContent, isLoading, disableRipple, getButtonProps, getRippleProps, isIconOnly } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$BZOXOCYW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ref: domRef,
        className: styles,
        ...getButtonProps(),
        children: [
            startContent,
            isLoading && spinnerPlacement === "start" && spinner,
            isLoading && isIconOnly ? null : children,
            isLoading && spinnerPlacement === "end" && spinner,
            endContent,
            !disableRipple && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$MRKSP4U5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__["Ripple"], {
                ...getRippleProps()
            })
        ]
    });
});
Button.displayName = "NextUI.Button";
var button_default = Button;
;
}),
"[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["button_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/@react-aria/label/dist/useLabel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabel",
    ()=>$d191a55c9702f145$export$8467354a121f1b9f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLabels$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLabels.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    let labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLabels$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}
;
 //# sourceMappingURL=useLabel.module.js.map
}),
"[project]/node_modules/@react-aria/label/dist/useField.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useField",
    ()=>$2baaea4c71418dea$export$294aa081a6c6f55d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/label/dist/useLabel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])(props);
    let descriptionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlotId"])([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlotId"])([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}
;
 //# sourceMappingURL=useField.module.js.map
}),
"[project]/node_modules/@react-aria/form/dist/useFormValidation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormValidation",
    ()=>$e93e671b31057976$export$b8473d3665f3a75a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        state.resetValidation();
    });
    let onInvalid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInteractionModality"])('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        state.commitValidation();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}
;
 //# sourceMappingURL=useFormValidation.module.js.map
}),
"[project]/node_modules/@react-stately/form/dist/useFormValidationState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_VALIDATION_RESULT",
    ()=>$e5be200c675c3b3a$export$dad6ae84456c676a,
    "FormValidationContext",
    ()=>$e5be200c675c3b3a$export$571b5131b7e65c11,
    "VALID_VALIDITY_STATE",
    ()=>$e5be200c675c3b3a$export$aca958c65c314e6c,
    "mergeValidation",
    ()=>$e5be200c675c3b3a$export$75ee7c75d68f5b0e,
    "privateValidationStateProp",
    ()=>$e5be200c675c3b3a$export$a763b9476acd3eb,
    "useFormValidationState",
    ()=>$e5be200c675c3b3a$export$fc1a364ae1f3ff10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
        return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $e5be200c675c3b3a$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$e5be200c675c3b3a$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
}
;
 //# sourceMappingURL=useFormValidationState.module.js.map
}),
"[project]/node_modules/@react-aria/textfield/dist/useTextField.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextField",
    ()=>$2d73ec29415bd339$export$712718f7aec83d5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useFormReset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useFormReset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-stately/utils/dist/useControlledState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/label/dist/useField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$form$2f$dist$2f$useFormValidation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/form/dist/useFormValidation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$form$2f$dist$2f$useFormValidationState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-stately/form/dist/useFormValidationState.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledState"])(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusable"])(props, ref);
    let validationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$form$2f$dist$2f$useFormValidationState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormValidationState"])({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$label$2f$dist$2f$useField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$filterDOMProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useFormReset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormReset"])(ref, value, setValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$form$2f$dist$2f$useFormValidation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormValidation"])(props, validationState, ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}
;
 //# sourceMappingURL=useTextField.module.js.map
}),
"[project]/node_modules/@nextui-org/form/dist/chunk-BSTJ7ZCN.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SLOT",
    ()=>DEFAULT_SLOT,
    "useContextProps",
    ()=>useContextProps,
    "useSlottedContext",
    ()=>useSlottedContext
]);
// src/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeRefs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeRefs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)");
"use client";
;
;
var DEFAULT_SLOT = Symbol("default");
function useSlottedContext(context, slot) {
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (slot === null) {
        return null;
    }
    if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
        let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
        if (!slot && !ctx.slots[DEFAULT_SLOT]) {
            throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
        }
        let slotKey = slot || DEFAULT_SLOT;
        if (!ctx.slots[slotKey]) {
            throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    return ctx;
}
function useContextProps(props, ref, context) {
    let ctx = useSlottedContext(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useObjectRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useContextProps.useObjectRef[mergedRef]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeRefs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(ref, contextRef)
    }["useContextProps.useObjectRef[mergedRef]"], [
        ref,
        contextRef
    ]));
    let mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(contextProps, props);
    if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
        if (typeof contextProps.style === "function" || typeof props.style === "function") {
            mergedProps.style = (renderProps)=>{
                let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
                let defaultStyle = {
                    ...renderProps.defaultStyle,
                    ...contextStyle
                };
                let style = typeof props.style === "function" ? props.style({
                    ...renderProps,
                    defaultStyle
                }) : props.style;
                return {
                    ...defaultStyle,
                    ...style
                };
            };
        } else {
            mergedProps.style = {
                ...contextProps.style,
                ...props.style
            };
        }
    }
    return [
        mergedProps,
        mergedRef
    ];
}
;
}),
"[project]/node_modules/@nextui-org/form/dist/chunk-YBBOLEEC.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormContext",
    ()=>FormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$BSTJ7ZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/form/dist/chunk-BSTJ7ZCN.mjs [app-client] (ecmascript)");
// src/base-form.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$form$2f$dist$2f$useFormValidationState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-stately/form/dist/useFormValidationState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$E257OVH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-E257OVH3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var FormContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
var Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function Form2(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$BSTJ7ZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, FormContext);
    let { validationErrors, validationBehavior = "native", children, className, ...domProps } = props;
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Form.Form2.useMemo[styles]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$E257OVH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["form"])({
                className
            })
    }["Form.Form2.useMemo[styles]"], [
        className
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("form", {
        noValidate: validationBehavior !== "native",
        ...domProps,
        ref,
        className: styles,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FormContext.Provider, {
            value: {
                ...props,
                validationBehavior
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$form$2f$dist$2f$useFormValidationState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormValidationContext"].Provider, {
                value: validationErrors != null ? validationErrors : {},
                children
            })
        })
    });
});
;
}),
"[project]/node_modules/@nextui-org/input/dist/chunk-IEGJY7W3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInput",
    ()=>useInput
]);
// src/use-input.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$3ZDIPBHM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/theme/dist/chunk-3ZDIPBHM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusWithin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-RFEIBVIG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$CAFRINWI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-CAFRINWI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-stately/utils/dist/useControlledState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$textfield$2f$dist$2f$useTextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/textfield/dist/useTextField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$YBBOLEEC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/form/dist/chunk-YBBOLEEC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$BSTJ7ZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/form/dist/chunk-BSTJ7ZCN.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function useInput(originalProps) {
    var _a, _b, _c, _d;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const { validationBehavior: formValidationBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$BSTJ7ZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlottedContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$YBBOLEEC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]) || {};
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$3ZDIPBHM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].variantKeys);
    const { ref, as, type, label, baseRef, wrapperRef, description, className, classNames, autoFocus, startContent, endContent, onClear, onChange, validationState, validationBehavior = (_a = formValidationBehavior != null ? formValidationBehavior : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _a : "native", innerWrapperRef: innerWrapperRefProp, onValueChange = ()=>{}, ...otherProps } = props;
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[handleValueChange]": (value)=>{
            onValueChange(value != null ? value : "");
        }
    }["useInput.useCallback[handleValueChange]"], [
        onValueChange
    ]);
    const [isFocusWithin, setFocusWithin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const Component = as || "div";
    const disableAnimation = (_c = (_b = originalProps.disableAnimation) != null ? _b : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _c : false;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const baseDomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(baseRef);
    const inputWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(wrapperRef);
    const innerWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(innerWrapperRefProp);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$stately$2f$utils$2f$dist$2f$useControlledState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledState"])(props.value, (_d = props.defaultValue) != null ? _d : "", handleValueChange);
    const isFilledByDefault = [
        "date",
        "time",
        "month",
        "week",
        "range"
    ].includes(type);
    const isFilled = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(inputValue) || isFilledByDefault;
    const isFilledWithin = isFilled || isFocusWithin;
    const isHiddenType = type === "hidden";
    const isMultiline = originalProps.isMultiline;
    const isFileTypeInput = type === "file";
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className, isFilled ? "is-filled" : "");
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[handleClear]": ()=>{
            var _a2;
            setInputValue("");
            onClear == null ? void 0 : onClear();
            (_a2 = domRef.current) == null ? void 0 : _a2.focus();
        }
    }["useInput.useCallback[handleClear]"], [
        setInputValue,
        onClear
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$safe$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "useInput.useSafeLayoutEffect": ()=>{
            if (!domRef.current) return;
            setInputValue(domRef.current.value);
        }
    }["useInput.useSafeLayoutEffect"], [
        domRef.current
    ]);
    const { labelProps, inputProps, isInvalid: isAriaInvalid, validationErrors, validationDetails, descriptionProps, errorMessageProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$textfield$2f$dist$2f$useTextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextField"])({
        ...originalProps,
        validationBehavior,
        autoCapitalize: originalProps.autoCapitalize,
        value: inputValue,
        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$CAFRINWI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeAriaLabel"])(originalProps["aria-label"], originalProps.label, originalProps.placeholder),
        inputElementType: isMultiline ? "textarea" : "input",
        onChange: setInputValue
    }, domRef);
    if (isFileTypeInput) {
        delete inputProps.value;
        delete inputProps.onChange;
    }
    const { isFocusVisible, isFocused, focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus,
        isTextInput: true
    });
    const { isHovered, hoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled)
    });
    const { isHovered: isLabelHovered, hoverProps: labelHoverProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled)
    });
    const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])();
    const { focusWithinProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useFocusWithin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusWithin"])({
        onFocusWithinChange: setFocusWithin
    });
    const { pressProps: clearPressProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePress"])({
        isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) || !!(originalProps == null ? void 0 : originalProps.isReadOnly),
        onPress: handleClear
    });
    const isInvalid = validationState === "invalid" || isAriaInvalid;
    const labelPlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInput.useMemo[labelPlacement]": ()=>{
            var _a2;
            if ((!originalProps.labelPlacement || originalProps.labelPlacement === "inside") && !label) {
                return "outside";
            }
            return (_a2 = originalProps.labelPlacement) != null ? _a2 : "inside";
        }
    }["useInput.useMemo[labelPlacement]"], [
        originalProps.labelPlacement,
        label
    ]);
    const errorMessage = typeof props.errorMessage === "function" ? props.errorMessage({
        isInvalid,
        validationErrors,
        validationDetails
    }) : props.errorMessage || (validationErrors == null ? void 0 : validationErrors.join(" "));
    const isClearable = !!onClear || originalProps.isClearable;
    const hasElements = !!label || !!description || !!errorMessage;
    const hasPlaceholder = !!props.placeholder;
    const hasLabel = !!label;
    const hasHelper = !!description || !!errorMessage;
    const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
    const shouldLabelBeInside = labelPlacement === "inside";
    const isPlaceholderShown = domRef.current ? (!domRef.current.value || domRef.current.value === "" || !inputValue || inputValue === "") && hasPlaceholder : false;
    const isOutsideLeft = labelPlacement === "outside-left";
    const hasStartContent = !!startContent;
    const isLabelOutside = shouldLabelBeOutside ? labelPlacement === "outside-left" || hasPlaceholder || labelPlacement === "outside" && hasStartContent : false;
    const isLabelOutsideAsPlaceholder = labelPlacement === "outside" && !hasPlaceholder && !hasStartContent;
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInput.useMemo[slots]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$3ZDIPBHM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"])({
                ...variantProps,
                isInvalid,
                labelPlacement,
                isClearable,
                disableAnimation
            })
    }["useInput.useMemo[slots]"], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$RFEIBVIG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        isInvalid,
        labelPlacement,
        isClearable,
        hasStartContent,
        disableAnimation
    ]);
    const getBaseProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getBaseProps]": (props2 = {})=>{
            return {
                ref: baseDomRef,
                className: slots.base({
                    class: baseStyles
                }),
                "data-slot": "base",
                "data-filled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput),
                "data-filled-within": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFilledWithin || hasPlaceholder || hasStartContent || isPlaceholderShown || isFileTypeInput),
                "data-focus-within": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusWithin),
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
                "data-readonly": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isReadOnly),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
                "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered || isLabelHovered),
                "data-required": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isRequired),
                "data-invalid": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isInvalid),
                "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isDisabled),
                "data-has-elements": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(hasElements),
                "data-has-helper": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(hasHelper),
                "data-has-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(hasLabel),
                "data-has-value": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(!isPlaceholderShown),
                "data-hidden": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHiddenType),
                ...focusWithinProps,
                ...props2
            };
        }
    }["useInput.useCallback[getBaseProps]"], [
        slots,
        baseStyles,
        isFilled,
        isFocused,
        isHovered,
        isLabelHovered,
        isInvalid,
        hasHelper,
        hasLabel,
        hasElements,
        isPlaceholderShown,
        hasStartContent,
        isFocusWithin,
        isFocusVisible,
        isFilledWithin,
        hasPlaceholder,
        focusWithinProps,
        isHiddenType,
        originalProps.isReadOnly,
        originalProps.isRequired,
        originalProps.isDisabled
    ]);
    const getLabelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getLabelProps]": (props2 = {})=>{
            return {
                "data-slot": "label",
                className: slots.label({
                    class: classNames == null ? void 0 : classNames.label
                }),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(labelProps, labelHoverProps, props2)
            };
        }
    }["useInput.useCallback[getLabelProps]"], [
        slots,
        isLabelHovered,
        labelProps,
        classNames == null ? void 0 : classNames.label
    ]);
    const getInputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getInputProps]": (props2 = {})=>{
            return {
                "data-slot": "input",
                "data-filled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFilled),
                "data-filled-within": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFilledWithin),
                "data-has-start-content": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(hasStartContent),
                "data-has-end-content": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(!!endContent),
                className: slots.input({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.input, isFilled ? "is-filled" : "", isMultiline ? "pe-0" : "")
                }),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(focusProps, inputProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                    enabled: true,
                    labelable: true,
                    omitEventNames: new Set(Object.keys(inputProps))
                }), props2),
                "aria-readonly": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isReadOnly),
                onChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(inputProps.onChange, onChange),
                ref: domRef
            };
        }
    }["useInput.useCallback[getInputProps]"], [
        slots,
        inputValue,
        focusProps,
        inputProps,
        otherProps,
        isFilled,
        isFilledWithin,
        hasStartContent,
        endContent,
        classNames == null ? void 0 : classNames.input,
        originalProps.isReadOnly,
        originalProps.isRequired,
        onChange
    ]);
    const getInputWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getInputWrapperProps]": (props2 = {})=>{
            return {
                ref: inputWrapperRef,
                "data-slot": "input-wrapper",
                "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered || isLabelHovered),
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
                "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
                className: slots.inputWrapper({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.inputWrapper, isFilled ? "is-filled" : "")
                }),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(props2, hoverProps),
                onClick: ({
                    "useInput.useCallback[getInputWrapperProps]": (e)=>{
                        if (domRef.current && e.currentTarget === e.target) {
                            domRef.current.focus();
                        }
                    }
                })["useInput.useCallback[getInputWrapperProps]"],
                style: {
                    cursor: "text",
                    ...props2.style
                }
            };
        }
    }["useInput.useCallback[getInputWrapperProps]"], [
        slots,
        isHovered,
        isLabelHovered,
        isFocusVisible,
        isFocused,
        inputValue,
        classNames == null ? void 0 : classNames.inputWrapper
    ]);
    const getInnerWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getInnerWrapperProps]": (props2 = {})=>{
            return {
                ...props2,
                ref: innerWrapperRef,
                "data-slot": "inner-wrapper",
                onClick: ({
                    "useInput.useCallback[getInnerWrapperProps]": (e)=>{
                        if (domRef.current && e.currentTarget === e.target) {
                            domRef.current.focus();
                        }
                    }
                })["useInput.useCallback[getInnerWrapperProps]"],
                className: slots.innerWrapper({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
                })
            };
        }
    }["useInput.useCallback[getInnerWrapperProps]"], [
        slots,
        classNames == null ? void 0 : classNames.innerWrapper
    ]);
    const getMainWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getMainWrapperProps]": (props2 = {})=>{
            return {
                ...props2,
                "data-slot": "main-wrapper",
                className: slots.mainWrapper({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
                })
            };
        }
    }["useInput.useCallback[getMainWrapperProps]"], [
        slots,
        classNames == null ? void 0 : classNames.mainWrapper
    ]);
    const getHelperWrapperProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getHelperWrapperProps]": (props2 = {})=>{
            return {
                ...props2,
                "data-slot": "helper-wrapper",
                className: slots.helperWrapper({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.helperWrapper, props2 == null ? void 0 : props2.className)
                })
            };
        }
    }["useInput.useCallback[getHelperWrapperProps]"], [
        slots,
        classNames == null ? void 0 : classNames.helperWrapper
    ]);
    const getDescriptionProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getDescriptionProps]": (props2 = {})=>{
            return {
                ...props2,
                ...descriptionProps,
                "data-slot": "description",
                className: slots.description({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className)
                })
            };
        }
    }["useInput.useCallback[getDescriptionProps]"], [
        slots,
        classNames == null ? void 0 : classNames.description
    ]);
    const getErrorMessageProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getErrorMessageProps]": (props2 = {})=>{
            return {
                ...props2,
                ...errorMessageProps,
                "data-slot": "error-message",
                className: slots.errorMessage({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className)
                })
            };
        }
    }["useInput.useCallback[getErrorMessageProps]"], [
        slots,
        errorMessageProps,
        classNames == null ? void 0 : classNames.errorMessage
    ]);
    const getClearButtonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInput.useCallback[getClearButtonProps]": (props2 = {})=>{
            return {
                ...props2,
                type: "button",
                tabIndex: -1,
                disabled: originalProps.isDisabled,
                "aria-label": "clear input",
                "data-slot": "clear-button",
                "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isClearButtonFocusVisible),
                className: slots.clearButton({
                    class: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className)
                }),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(clearPressProps, clearFocusProps)
            };
        }
    }["useInput.useCallback[getClearButtonProps]"], [
        slots,
        isClearButtonFocusVisible,
        clearPressProps,
        clearFocusProps,
        classNames == null ? void 0 : classNames.clearButton
    ]);
    return {
        Component,
        classNames,
        domRef,
        label,
        description,
        startContent,
        endContent,
        labelPlacement,
        isClearable,
        hasHelper,
        hasStartContent,
        isLabelOutside,
        isOutsideLeft,
        isLabelOutsideAsPlaceholder,
        shouldLabelBeOutside,
        shouldLabelBeInside,
        hasPlaceholder,
        isInvalid,
        errorMessage,
        getBaseProps,
        getLabelProps,
        getInputProps,
        getMainWrapperProps,
        getInputWrapperProps,
        getInnerWrapperProps,
        getHelperWrapperProps,
        getDescriptionProps,
        getErrorMessageProps,
        getClearButtonProps
    };
}
;
}),
"[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "input_default",
    ()=>input_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IEGJY7W3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-IEGJY7W3.mjs [app-client] (ecmascript)");
// src/input.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, label, description, isClearable, startContent, endContent, labelPlacement, hasHelper, isOutsideLeft, shouldLabelBeOutside, errorMessage, isInvalid, getBaseProps, getLabelProps, getInputProps, getInnerWrapperProps, getInputWrapperProps, getMainWrapperProps, getHelperWrapperProps, getDescriptionProps, getErrorMessageProps, getClearButtonProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IEGJY7W3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        ...props,
        ref
    });
    const labelContent = label ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
        ...getLabelProps(),
        children: label
    }) : null;
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Input.useMemo[end]": ()=>{
            if (isClearable) {
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    ...getClearButtonProps(),
                    children: endContent || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseFilledIcon"], {})
                });
            }
            return endContent;
        }
    }["Input.useMemo[end]"], [
        isClearable,
        getClearButtonProps
    ]);
    const helperWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Input.useMemo[helperWrapper]": ()=>{
            const shouldShowError = isInvalid && errorMessage;
            const hasContent = shouldShowError || description;
            if (!hasHelper || !hasContent) return null;
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...getHelperWrapperProps(),
                children: shouldShowError ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...getErrorMessageProps(),
                    children: errorMessage
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...getDescriptionProps(),
                    children: description
                })
            });
        }
    }["Input.useMemo[helperWrapper]"], [
        hasHelper,
        isInvalid,
        errorMessage,
        description,
        getHelperWrapperProps,
        getErrorMessageProps,
        getDescriptionProps
    ]);
    const innerWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Input.useMemo[innerWrapper]": ()=>{
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                ...getInnerWrapperProps(),
                children: [
                    startContent,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        ...getInputProps()
                    }),
                    end
                ]
            });
        }
    }["Input.useMemo[innerWrapper]"], [
        startContent,
        end,
        getInputProps,
        getInnerWrapperProps
    ]);
    const mainWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Input.useMemo[mainWrapper]": ()=>{
            if (shouldLabelBeOutside) {
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    ...getMainWrapperProps(),
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            ...getInputWrapperProps(),
                            children: [
                                !isOutsideLeft ? labelContent : null,
                                innerWrapper
                            ]
                        }),
                        helperWrapper
                    ]
                });
            }
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        ...getInputWrapperProps(),
                        children: [
                            labelContent,
                            innerWrapper
                        ]
                    }),
                    helperWrapper
                ]
            });
        }
    }["Input.useMemo[mainWrapper]"], [
        labelPlacement,
        helperWrapper,
        shouldLabelBeOutside,
        labelContent,
        innerWrapper,
        errorMessage,
        description,
        getMainWrapperProps,
        getInputWrapperProps,
        getErrorMessageProps,
        getDescriptionProps
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getBaseProps(),
        children: [
            isOutsideLeft ? labelContent : null,
            mainWrapper
        ]
    });
});
Input.displayName = "NextUI.Input";
var input_default = Input;
;
}),
"[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript) <export input_default as Input>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input_default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/woocommerce-products/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$woocommerce$2d$products$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShoppingBag
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }
    ],
    [
        "path",
        {
            d: "M3.103 6.034h17.794",
            key: "awc11p"
        }
    ],
    [
        "path",
        {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm"
        }
    ]
];
const ShoppingBag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shopping-bag", __iconNode);
;
 //# sourceMappingURL=shopping-bag.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingBag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_c9f91767._.js.map