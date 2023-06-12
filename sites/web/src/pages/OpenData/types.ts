export interface Statistic {
  date: string;
  onRespiratorForDate: number;
  hospitalizedForDate: number;
  sumHospitalized: number;
  positiveForDate: number;
  sumPositive: number;
  testedForDate: number;
  sumTested: number;
  deathsForDate: number;
  sumDeaths: number;
  percentOfInfectedComparedWithTestedForDate: number;
  percentOfInfectedSumComparedWithTestedSum: number;
  percentOfHospitalizedComparedWithInfectedSumForDate: number;
  percentOnRespiratorComparedWithHospitalizedForDate: number;
}
export interface DailyData {
  fetchTime: number;
  data: Array<Statistic>;
}

export interface MonthlyData {
  fetchTime: number;
  data: Array<Statistic>;
}

export interface AmbulancesData {
  fetchTime: number;
  data: Array<Ambulance>;
}

export interface AirQualityData {
  fetchTime: number;
  data: Array<AirQualityStation>;
}

interface AirQualityStation {
  station: Station;
  value: number;
}

interface Station {
  id: number;
  name: string;
  city: string;
  latitude: string;
  longitude: string;
}

export interface Ambulance {
  id: number;
  name: string;
  city: string;
  memo: string;
  type: string;
  street: string;
  homeNo: string;
  phone1: string;
  phone2: string;
  latitude: number;
  longitude: number;
}
export interface OpenSourceState {
  loading: {
    daily: boolean;
    monthly: boolean;
    ambulances: boolean;
    airQuality: boolean;
  };
  daily: DailyData | undefined;
  monthly: MonthlyData | undefined;
  ambulances: AmbulancesData | undefined;
  airQuality: AirQualityData | undefined;
}
