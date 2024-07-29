export interface Province {
  id: number;
  name: string;
}

export type Regency = {
  id: number;
  name: string;
};

export type District = {
  id: number;
  name: string;
};

export type Village = {
  id: number;
  name: string;
};

export type ProvincesResponse = Province[];
export type RegenciesResponse = Regency[];
export type DistrictsResponse = District[];
export type VillagesResponse = Village[];

export type ErrorResponse = {
  message: string;
};
