import React, { useState, useEffect } from "react";
import {
  useGetVillages,
  useGetProvinces,
  useGetRegencies,
  useGetDistricts,
} from "../hooks/useTestSelect";
import Filter from "../components/TestSelect/filter";
import content from "../dummyData/contentTwo.json";

export const TestSelect: React.FC = () => {
  const { data: provinces, isLoading: provincesLoading } = useGetProvinces();
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [selectedVillage, setSelectedVillage] = useState<number | null>(null);

  const { data: regencies, isLoading: regenciesLoading } = useGetRegencies(
    selectedProvince !== null ? selectedProvince : -1
  );
  const { data: districts, isLoading: districtsLoading } = useGetDistricts(
    selectedRegency !== null ? selectedRegency : -1
  );
  const { data: villages, isLoading: villagesLoading } = useGetVillages(
    selectedDistrict !== null ? selectedDistrict : -1
  );

  useEffect(() => {
    const savedProvince = localStorage.getItem("selectedProvince");
    const savedRegency = localStorage.getItem("selectedRegency");
    const savedDistrict = localStorage.getItem("selectedDistrict");
    const savedVillage = localStorage.getItem("selectedVillage");

    if (savedProvince) setSelectedProvince(parseInt(savedProvince));
    if (savedRegency) setSelectedRegency(parseInt(savedRegency));
    if (savedDistrict) setSelectedDistrict(parseInt(savedDistrict));
    if (savedVillage) setSelectedVillage(parseInt(savedVillage));
  }, []);

  useEffect(() => {
    if (selectedProvince !== null)
      localStorage.setItem("selectedProvince", selectedProvince.toString());
    if (selectedRegency !== null)
      localStorage.setItem("selectedRegency", selectedRegency.toString());
    if (selectedDistrict !== null)
      localStorage.setItem("selectedDistrict", selectedDistrict.toString());
    if (selectedVillage !== null)
      localStorage.setItem("selectedVillage", selectedVillage.toString());
  }, [selectedProvince, selectedRegency, selectedDistrict, selectedVillage]);

  const handleProvinceChange = (provinceId: number) => {
    setSelectedProvince(provinceId);
    setSelectedRegency(null);
    setSelectedDistrict(null);
    setSelectedVillage(null);
  };

  const handleRegencyChange = (regencyId: number) => {
    setSelectedRegency(regencyId);
    setSelectedDistrict(null);
    setSelectedVillage(null);
  };

  const handleDistrictChange = (districtId: number) => {
    setSelectedDistrict(districtId);
    setSelectedVillage(null);
  };

  const handleVillageChange = (villageId: number) => {
    setSelectedVillage(villageId);
  };

  return (
    <div className="flex px-2 py-4 sm:px-12 lg:px-32">
      <div className="w-1/4 p-4">
        <Filter
          provinces={provinces}
          regencies={regencies}
          districts={districts}
          villages={villages}
          provincesLoading={provincesLoading}
          regenciesLoading={regenciesLoading}
          districtsLoading={districtsLoading}
          villagesLoading={villagesLoading}
          onProvinceChange={handleProvinceChange}
          onRegencyChange={handleRegencyChange}
          onDistrictChange={handleDistrictChange}
          onVillageChange={handleVillageChange}
          selectedProvince={selectedProvince}
          selectedRegency={selectedRegency}
          selectedDistrict={selectedDistrict}
          selectedVillage={selectedVillage}
        />
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-4">
        {content.map((item) => (
          <div
            key={item.id}
            className="p-4 mb-4 bg-white border-2 border-gray-100 rounded-lg"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              Last Updated: {item.lastUpdated}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
