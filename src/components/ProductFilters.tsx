"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import { Input, Button, Select, SelectItem, Slider, Checkbox, Card, CardBody, Chip, Divider, Spacer } from "@nextui-org/react";
import { Search, Filter, RefreshCw } from "lucide-react";
import { ProductFilters } from "@/types/woocommerce";
import { WooCommerceCategory } from "@/types/woocommerce";

interface ProductFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  categories: WooCommerceCategory[];
}

// Filter options matching the screenshot
const gorivoOptions = [
  { key: "diesel", label: "Diesel" },
  { key: "gas", label: "Gas" },
];

const frekvencijaOptions = [
  { key: "50-hz", label: "50 Hz" },
  { key: "60-hz", label: "60 Hz" },
];

const fazaOptions = [
  { key: "single-phase", label: "Single phase" },
  { key: "three-phase", label: "Three phase" },
];

const emisijaOptions = [
  { key: "cumple-epa", label: "Cumple EPA" },
  { key: "non-certified", label: "non certified" },
  { key: "non-emission", label: "Non emission" },
  { key: "stage-2", label: "Stage 2" },
  { key: "stage-3a", label: "Stage 3A" },
  { key: "stage-5", label: "Stage 5" },
];

export function ProductFiltersComponent({ filters, onFiltersChange, categories }: ProductFiltersProps) {
  const [localFilters, setLocalFilters] = useState<ProductFilters>(filters);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync local state when external filters change (e.g. Reset all)
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

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
  const startPercent = ((currentMin - SLIDER_MIN) / sliderRange) * 100;
  const endPercent = ((currentMax - SLIDER_MIN) / sliderRange) * 100;

  const sliderStyle = {
    "--range-start": `${startPercent}%`,
    "--range-end": `${endPercent}%`,
  } as CSSProperties;

  const handleSearchChange = (value: string) => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Update local state immediately for UI feedback
    setLocalFilters({ ...localFilters, search: value });

    // Debounce the actual filter change to parent by 500ms
    searchTimeoutRef.current = setTimeout(() => {
      const newFilters = { ...localFilters, search: value };
      onFiltersChange(newFilters);
    }, 500);
  };

  const handleCategoryChange = (value: string) => {
    const newFilters = { ...localFilters, category: value === "all" ? undefined : value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleAttributeChange = (
    attribute: "gorivo" | "frekvencija" | "faza" | "emisija",
    value: string,
    checked: boolean
  ) => {
    const currentValues = localFilters[attribute] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);

    const newFilters = { ...localFilters, [attribute]: newValues };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleSnagaChange = (value: number | number[]) => {
    const values = Array.isArray(value) ? value : [6, value as number];
    const newFilters = {
      ...localFilters,
      minSnaga: values[0],
      maxSnaga: values[1],
    };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const cleared: ProductFilters = {};
    setLocalFilters(cleared);
    onFiltersChange(cleared);
  };

  return (
    <div className="space-y-3">
      {/* Power Range */}
      <div className="space-y-2 mt-8">
        <h4 className="text-sm font-semibold text-gray-700">Power Range (kW)</h4>
        <div className="space-y-1">
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="text-xs text-gray-600 font-semibold block mb-1">Min</label>
              <Input
                type="number"
                min="1"
                max="3000"
                value={String(localFilters.minSnaga || 1)}
                onChange={(e) => handleSnagaChange([Number(e.target.value), localFilters.maxSnaga || 3000])}
                size="sm"
                variant="bordered"
                classNames={{
                  input: "text-sm font-semibold bg-transparent text-[#da0018]",
                  inputWrapper: "border-gray-700 hover:border-[#da0018] bg-transparent hover:bg-gray-200",
                }}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-600 font-semibold block mb-1">Max</label>
              <Input
                type="number"
                min="1"
                max="3000"
                value={String(localFilters.maxSnaga || 3000)}
                onChange={(e) => handleSnagaChange([localFilters.minSnaga || 1, Number(e.target.value)])}
                size="sm"
                variant="bordered"
                classNames={{
                  input: "text-sm font-semibold bg-transparent text-[#da0018]",
                  inputWrapper: "border-gray-700 hover:border-[#da0018] bg-transparent hover:bg-gray-200",
                }}
              />
            </div>
          </div>
          <div className="bg-transparent rounded-xl p-2 mt-8">
            <Slider
              step={50}
              minValue={1}
              maxValue={3000}
              value={[
                localFilters.minSnaga || 1,
                localFilters.maxSnaga || 3000,
              ]}
              onChange={handleSnagaChange}
              className="w-full custom-power-slider"
              style={sliderStyle}
              size="md"
              color="primary"
              classNames={{
                thumb: "bg-[#333] rounded-full border-2 border-white shadow-md hover:bg-[#ff3344] transition-colors cursor-grab active:cursor-grabbing",
                trackWrapper: "h-2 cursor-grab",
                track: "bg-gray-[#eee] rounded-full h-2",
                filler: "bg-transparent h-2",
              }}
            />
            <div className="mt-1 flex justify-between text-xs text-gray-600 font-medium">
              <span>{localFilters.minSnaga || 1} kW</span>
              <span>{localFilters.maxSnaga || 3000} kW</span>
            </div>
          </div>
        </div>
      </div>

      <Divider className="bg-[#eee]" />

      {/* Fuel Type */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-700">Fuel Type</h4>
        <div className="grid grid-cols-2 gap-2">
          {gorivoOptions.map((option) => (
            <label key={option.key} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                checked={gorivo.includes(option.key)}
                onChange={(e) => handleAttributeChange("gorivo", option.key, e.target.checked)}
                className="w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#da0018]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Divider className="bg-[#eee]" />

      {/* Frequency */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-700">Frequency</h4>
        <div className="grid grid-cols-2 gap-2">
          {frekvencijaOptions.map((option) => (
            <label key={option.key} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                checked={frekvencija.includes(option.key)}
                onChange={(e) => handleAttributeChange("frekvencija", option.key, e.target.checked)}
                className="w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#da0018]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Divider className="bg-[#eee]" />

      {/* Phase */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-700">Phase</h4>
        <div className="grid grid-cols-2 gap-2">
          {fazaOptions.map((option) => (
            <label key={option.key} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                checked={faza.includes(option.key)}
                onChange={(e) => handleAttributeChange("faza", option.key, e.target.checked)}
                className="w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#da0018]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Divider className="bg-[#eee]" />

      {/* Emission */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-700">Emission</h4>
        <div className="grid grid-cols-2 gap-2">
          {emisijaOptions.map((option) => (
            <label key={option.key} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                checked={emisija.includes(option.key)}
                onChange={(e) => handleAttributeChange("emisija", option.key, e.target.checked)}
                className="w-5 h-5 rounded border-2 border-gray-400 text-[#da0018] cursor-pointer accent-[#da0018] hover:border-[#da0018] transition-colors"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#da0018]">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Divider className="bg-[#eee]" />

      {/* Reset Button */}
      <div className="flex justify-center">
        <Button 
          size="sm"
          variant="flat" 
          onClick={clearFilters}
          className="bg-gray-400 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg"
          startContent={<RefreshCw className="w-4 h-4" />}
        >
          Reset Filters
        </Button>
      </div>

    </div>
  );
}
