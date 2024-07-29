import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <MenuButton className="inline-flex items-center justify-between w-full px-4 py-2 text-gray-900 bg-white rounded-lg shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
          {defaultValue}
          <FaChevronDown className="w-5 h-5 ml-2 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        as="div"
        className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.value}>
              <button
                onClick={() => onChange(option.value)}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};
