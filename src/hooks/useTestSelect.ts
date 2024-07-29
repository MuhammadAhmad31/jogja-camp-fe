import { useQuery } from "@tanstack/react-query";
import {
  getDistricts,
  getProvinces,
  getRegencies,
  getVillages,
} from "../api/testSelect";
import {
  DistrictsResponse,
  ErrorResponse,
  ProvincesResponse,
  RegenciesResponse,
  VillagesResponse,
} from "../types/provinces.type";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useGetProvinces = () => {
  const { status, data, error } = useQuery<
    ProvincesResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["provinces"],
    queryFn: getProvinces,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const message = "An error occurred";

  const notif = () => {
    console.log({
      variant: "destructive",
      title: "Failed to fetch data",
      description: `${message || "An error occurred"}`,
    });
  };

  useEffect(() => {
    if (status === "error") {
      notif();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    data,
    isLoading: status === "pending",
    isError: status === "error",
    error,
  };
};

export const useGetRegencies = (provinceId: number) => {
  const { status, data, error } = useQuery<
    RegenciesResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["regencies", provinceId],
    queryFn: () =>
      provinceId !== null ? getRegencies(provinceId) : Promise.resolve([]),
    enabled: provinceId !== null,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const message = "An error occurred";

  const notif = () => {
    console.log({
      variant: "destructive",
      title: "Failed to fetch data",
      description: `${message || "An error occurred"}`,
    });
  };

  useEffect(() => {
    if (status === "error") {
      notif();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    data,
    isLoading: status === "pending",
    isError: status === "error",
    error,
  };
};

export const useGetDistricts = (regencyId: number) => {
  const { status, data, error } = useQuery<
    DistrictsResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["districts", regencyId],
    queryFn: () =>
      regencyId !== null ? getDistricts(regencyId) : Promise.resolve([]),
    enabled: regencyId !== null,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const message = "An error occurred";

  const notif = () => {
    console.log({
      variant: "destructive",
      title: "Failed to fetch data",
      description: `${message || "An error occurred"}`,
    });
  };

  useEffect(() => {
    if (status === "error") {
      notif();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    data,
    isLoading: status === "pending",
    isError: status === "error",
    error,
  };
};

export const useGetVillages = (districtId: number) => {
  const { status, data, error } = useQuery<
    VillagesResponse,
    AxiosError<ErrorResponse>
  >({
    queryKey: ["villages", districtId],
    queryFn: () =>
      districtId !== null ? getVillages(districtId) : Promise.resolve([]),
    enabled: districtId !== null,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const message = "An error occurred";

  const notif = () => {
    console.log({
      variant: "destructive",
      title: "Failed to fetch data",
      description: `${message || "An error occurred"}`,
    });
  };

  useEffect(() => {
    if (status === "error") {
      notif();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return {
    data,
    isLoading: status === "pending",
    isError: status === "error",
    error,
  };
};
