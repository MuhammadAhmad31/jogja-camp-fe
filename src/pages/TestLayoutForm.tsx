/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "../components/TestLayoutForm/Button";
import { Dropdown } from "../components/global/Dropdown";
import { Input } from "../components/TestLayoutForm/Input";
import debounce from "lodash.debounce";
import { FaPlus, FaDownload, FaUpload } from "react-icons/fa";

export const TestLayoutForm: React.FC = () => {
  const loadInitialState = (): {
    searchValue: string;
    selectedYear: string;
  } => {
    const savedSearchValue = localStorage.getItem("searchValue") || "";
    const savedSelectedYear = localStorage.getItem("selectedYear") || "2020";
    return { searchValue: savedSearchValue, selectedYear: savedSelectedYear };
  };

  const [searchValue, setSearchValue] = useState<string>(
    loadInitialState().searchValue
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    loadInitialState().selectedYear
  );

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
    debouncedSubmit();
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem("selectedYear", selectedYear);
    debouncedSubmit();
  }, [selectedYear]);

  const debouncedSubmit = React.useCallback(
    debounce(() => {
      console.log("Form submitted with values:", {
        searchValue,
        selectedYear,
      });
    }, 2000),
    [searchValue, selectedYear]
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
    <div className="px-2 py-4 sm:px-12 lg:px-32">
      <form>
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center gap-1 my-4 md:justify-between lg:justify-center md:gap-0 lg:w-1/3 md:space-y-0 md:space-x-4 lg:mr-4">
            <Button
              label="Tambah"
              onClick={(e) => alert("Tambah clicked")}
              color="black"
              icon={<FaPlus />}
            />
            <div className="flex gap-1 sm:gap-1 lg:gap-4">
              <Button
                label="Import"
                onClick={(e) => alert("Import clicked")}
                color="slate"
                icon={<FaUpload />}
              />
              <Button
                label="Export"
                onClick={(e) => alert("Export clicked")}
                color="slate"
                icon={<FaDownload />}
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 mt-7 lg:mt-0 md:grid-cols-3">
            <div className="flex items-center col-span-3 md:col-span-2">
              <Input
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex items-center col-span-3 md:col-span-1">
              <Dropdown
                options={[
                  { value: "2020", label: "2020" },
                  { value: "2021", label: "2021" },
                  { value: "2022", label: "2022" },
                ]}
                onChange={handleYearChange}
                defaultValue={selectedYear}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
