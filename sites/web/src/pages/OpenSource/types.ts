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

export interface OpenSourceState {
  loading: {
    daily: boolean;
    monthly: boolean;
  };
  daily: DailyData | undefined;
  monthly: MonthlyData | undefined;
}
