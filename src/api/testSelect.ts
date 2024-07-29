import axios from "axios";
import { axiosInstance } from "../lib/axiosInstance";
import { ProvincesResponse } from "../types/provinces.type";

export const getProvinces = async (): Promise<ProvincesResponse> => {
  try {
    const response = await axiosInstance.get<ProvincesResponse>("/provinces");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getRegencies = async (provinceId: number) => {
  try {
    const response = await axiosInstance.get(`regencies_of/${provinceId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getDistricts = async (regencyId: number) => {
  try {
    const response = await axiosInstance.get(`districts_of/${regencyId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getVillages = async (districtId: number) => {
  try {
    const response = await axiosInstance.get(`villages_of/${districtId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
};
