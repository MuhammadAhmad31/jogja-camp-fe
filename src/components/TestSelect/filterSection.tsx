import React from "react";
import { Dropdown } from "../global/Dropdown";

interface FilterSectionProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: number) => void;
  selectedValue: number | null;
  defaultText: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  label,
  options,
  onChange,
  selectedValue,
  defaultText,
}) => {
  return (
    <div className="mb-4 rounded-lg">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}:
      </label>
      <Dropdown
        options={options}
        onChange={(value) => onChange(parseInt(value))}
        defaultValue={
          options.find((option) => option.value === selectedValue?.toString())
            ?.label ?? defaultText
        }
      />
    </div>
  );
};

export default FilterSection;
