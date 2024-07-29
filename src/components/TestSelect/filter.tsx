import React from "react";
import {
  Province,
  Regency,
  District,
  Village,
} from "../../types/provinces.type";
import FilterSection from "./filterSection";

interface FilterProps {
  provinces: Province[] | undefined;
  regencies: Regency[] | undefined;
  districts: District[] | undefined;
  villages: Village[] | undefined;
  provincesLoading: boolean;
  regenciesLoading: boolean;
  districtsLoading: boolean;
  villagesLoading: boolean;
  onProvinceChange: (provinceId: number) => void;
  onRegencyChange: (regencyId: number) => void;
  onDistrictChange: (districtId: number) => void;
  onVillageChange: (villageId: number) => void;
  selectedProvince: number | null;
  selectedRegency: number | null;
  selectedDistrict: number | null;
  selectedVillage: number | null;
}

const Filter: React.FC<FilterProps> = ({
  provinces = [],
  regencies = [],
  districts = [],
  villages = [],
  onProvinceChange,
  onRegencyChange,
  onDistrictChange,
  onVillageChange,
  selectedProvince,
  selectedRegency,
  selectedDistrict,
  selectedVillage,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="my-4 font-bold text-md">Filter</h2>
      <FilterSection
        label="Province"
        options={provinces.map((province) => ({
          value: province.id.toString(),
          label: province.name,
        }))}
        onChange={onProvinceChange}
        selectedValue={selectedProvince}
        defaultText="Select a province"
      />

      {selectedProvince !== null && (
        <FilterSection
          label="Regency"
          options={regencies.map((regency) => ({
            value: regency.id.toString(),
            label: regency.name,
          }))}
          onChange={onRegencyChange}
          selectedValue={selectedRegency}
          defaultText="Select a regency"
        />
      )}

      {selectedRegency !== null && (
        <FilterSection
          label="District"
          options={districts.map((district) => ({
            value: district.id.toString(),
            label: district.name,
          }))}
          onChange={onDistrictChange}
          selectedValue={selectedDistrict}
          defaultText="Select a district"
        />
      )}

      {selectedDistrict !== null && (
        <FilterSection
          label="Village"
          options={villages.map((village) => ({
            value: village.id.toString(),
            label: village.name,
          }))}
          onChange={onVillageChange}
          selectedValue={selectedVillage}
          defaultText="Select a village"
        />
      )}
    </div>
  );
};

export default Filter;
